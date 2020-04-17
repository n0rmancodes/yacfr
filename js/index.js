if (!localStorage.getItem('bType')) {document.getElementById("bType").value = "top"; localStorage.setItem("bType", document.getElementById("bType").value);} 
document.getElementById("bType").value = localStorage.getItem('bType');
start();

document.onkeyup = function(e) {
	if (e.shiftKey && e.which == 84) {
		localStorage.setItem('bType', 'top');
		document.getElementById("bType").value = localStorage.getItem('bType');
		start();
	} else if (e.shiftKey && e.which == 66) {
		localStorage.setItem('bType', 'best');
		document.getElementById("bType").value = localStorage.getItem('bType');
		start();
	} else if (e.shiftKey && e.which == 72) {
		localStorage.setItem('bType', 'hot');
		document.getElementById("bType").value = localStorage.getItem('bType');
		start();
	} else if (e.shiftKey && e.which == 78) {
		localStorage.setItem('bType', 'new');
		document.getElementById("bType").value = localStorage.getItem('bType');
		start();
	} else if (e.shiftKey && e.which == 67) {
		localStorage.setItem('bType', 'controversial');
		document.getElementById("bType").value = localStorage.getItem('bType');
		start();
	} else if (e.shiftKey && e.which == 82) {
		localStorage.setItem('bType', 'rising');
		document.getElementById("bType").value = localStorage.getItem('bType');
		start();
	}
}

function start() {
	document.getElementById("cProg").style = "width:1%; background-color:#404040;";
	document.getElementById("pInfo").innerHTML = "Setting up request..."
	const http = new XMLHttpRequest();
	const dUrl = "https://cors-anywhere.herokuapp.com/https://www.reddit.com/" + localStorage.getItem('bType') + ".json?limit=100"
	http.open("GET", dUrl);
	document.getElementById("postContainer").innerHTML = "";
	document.getElementById("cProg").style = "width:5%";
	document.getElementById("pInfo").innerHTML = "Opening request..."
	http.send();
	document.getElementById("cProg").style = "width:15%";
	document.getElementById("pInfo").innerHTML = "Sending request..."
	http.onreadystatechange=(e)=>{
		document.getElementById("cProg").style = "width:25%";
		document.getElementById("pInfo").innerHTML = "Parsing request..."
		var wd = JSON.parse(http.responseText);
		document.getElementById("cProg").style = "width:50%";
		document.getElementById("pInfo").innerHTML = "Defining request variables and writing to HTML..."
		for (var c in wd.data.children) {
			var postDiv = document.createElement("DIV");
			postDiv.classList.add("post");
			postDiv.id = "post" + c;
			var innerDiv = document.createElement("DIV");
			innerDiv.classList.add("postContent");
			innerDiv.id = "pc" + c;
			var subTxt = document.createElement("P");
			subTxt.classList.add("sub");
			subTxt.innerHTML = wd.data.children[c].data.subreddit_name_prefixed;
			var title = document.createElement("H2");
			title.innerHTML = wd.data.children[c].data.title;
			title.classList.add("title");
			var url = document.createElement("A");
			url.id = "postLink" + c;
			var thumb = document.createElement("IMG");
			thumb.classList.add("thumb");
			var pUrl1 = "https://reddit.com" + wd.data.children[c].data.permalink;
			if (wd.data.children[c].data.url.includes("https://v.redd.it/")) {
				url.href = wd.data.children[c].data.secure_media.reddit_video.fallback_url;
			} else {
				url.href = wd.data.children[c].data.url
			}
			if (title.innerHTML.length > 59) {
				postDiv.style = "height:200px;";
				thumb.style = "height:200px;";
				if (title.innerHTML.length > 149) {
					postDiv.style = "height:280px;";
					thumb.style = "height:280px;";
					if (title.innerHTML.length > 250) {
						postDiv.style = "height:350px;";
						thumb.style = "height:350px;";
					}
				}
			}
			var tLink = wd.data.children[c].data.thumbnail;
			//var pUrl1 = "https://reddit.com" + wd.data.children[c].data.permalink;
			//document.getElementById("fullPost1").href = pUrl1;
			//document.getElementById("sub1").innerHTML = sub1;
			//document.getElementById("title1").innerHTML = title1;
			if (tLink === "self" | tLink === "default" | tLink === "nsfw" | tLink === "image") {
				thumb.src = "img/1.png"
			} else {
				thumb.src = tLink;
			}
			document.getElementById("postContainer").appendChild(postDiv);
			document.getElementById("post"+c).appendChild(innerDiv);
			document.getElementById("pc"+c).appendChild(subTxt);
			document.getElementById("pc"+c).appendChild(title);
			document.getElementById("post"+c).appendChild(url);
			document.getElementById("postLink"+c).appendChild(thumb);
			document.getElementById("cProg").style = "width:100%";
			document.getElementById("postContainer").style.display = '';
			document.getElementById("cProg").style = "width:100%";
			document.getElementById("pInfo").innerHTML = "Completed the task."
		}
	}
	http.onerror = function() {
		document.getElementById("cProg").style = "width:100%; background-color:#7b0101";
		document.getElementById("conErr").style.display = "";
		document.getElementById("postContainer").style.display = "none";
		document.getElementById("pInfo").innerHTML = "Error! Plase see below for more details."
		setTimeout(function () {
			start();
			document.getElementById("conErr").style.display = "none";
		}, 10000);
	}
}

function saveType() {
	localStorage.setItem("bType", document.getElementById("bType").value);
	if (document.getElementById("frontPage").style.display) {
		getSubs();
	} else {
		start();
	}
}

function shortcuts() {
	if (document.getElementById("shortMenu").style.display = 'none') {
		document.getElementById("shortMenu").style.display = '';
	} else {
		document.getElementById("shortMenu").style.display = 'none';
	}
}

function openPost() {
	document.getElementById("viewer").style.display = '';
	document.getElementById("imageViewer").style.display = '';
	document.getElementById("ytPlayer").style.display = 'none';
	document.getElementById("player").style.display = 'none';
	setTimeout(function () {
		if (window.location.href.includes("v1")) {
			if (document.getElementById("postli1").href.includes("https://i.redd.it") | document.getElementById("postli1").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli1").href +"' class='imgViewer'>"
			} else if (document.getElementById("postli1").href.includes("youtu")) {
				if (document.getElementById("postli1").href.includes("youtu.be")) {
					var id = document.getElementById("postli1").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli1").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli1").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli1").href;
			} else if (document.getElementById("postli1").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli1").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
			return;
		} else if (window.location.href.includes("v2")) {
			if (document.getElementById("postli2").href.includes("https://i.redd.it") | document.getElementById("postli2").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli2").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli2").href.includes("youtu")) {
				if (document.getElementById("postli2").href.includes("youtu.be")) {
					var id = document.getElementById("postli2").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli2").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli2").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli2").href;
			} else if (document.getElementById("postli2").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli2").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
			return;
		} else if (window.location.href.includes("v3")) {
			if (document.getElementById("postli3").href.includes("https://i.redd.it") | document.getElementById("postli3").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli3").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli3").href.includes("youtu")) {
				if (document.getElementById("postli3").href.includes("youtu.be")) {
					var id = document.getElementById("postli3").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli3").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli3").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli3").href;
			} else if (document.getElementById("postli3").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli3").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
			return;
		} else if (window.location.href.includes("v4")) {
			if (document.getElementById("postli4").href.includes("https://i.redd.it") | document.getElementById("postli4").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli4").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli4").href.includes("youtu")) {
				if (document.getElementById("postli4").href.includes("youtu.be")) {
					var id = document.getElementById("postli4").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli4").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli4").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli4").href;
			} else if (document.getElementById("postli4").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli4").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v5")) {
			if (document.getElementById("postli5").href.includes("https://i.redd.it") | document.getElementById("postli5").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli5").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli5").href.includes("youtu")) {
				if (document.getElementById("postli5").href.includes("youtu.be")) {
					var id = document.getElementById("postli5").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli5").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli5").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli5").href;
			} else if (document.getElementById("postli5").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli5").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v6")) {
			if (document.getElementById("postli6").href.includes("https://i.redd.it") | document.getElementById("postli6").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli6").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli6").href.includes("youtu")) {
				if (document.getElementById("postli6").href.includes("youtu.be")) {
					var id = document.getElementById("postli6").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli6").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli6").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli6").href;
			} else if (document.getElementById("postli6").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli6").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v7")) {
			if (document.getElementById("postli7").href.includes("https://i.redd.it") | document.getElementById("postli7").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli7").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli7").href.includes("youtu")) {
				if (document.getElementById("postli7").href.includes("youtu.be")) {
					var id = document.getElementById("postli7").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli7").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli7").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli7").href;
			} else if (document.getElementById("postli7").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli7").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v8")) {
			if (document.getElementById("postli8").href.includes("https://i.redd.it") | document.getElementById("postli8").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli8").href +"' class='imgViewer'>"
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else if (document.getElementById("postli8").href.includes("youtu")) {
				if (document.getElementById("postli8").href.includes("youtu.be")) {
					var id = document.getElementById("postli8").href.substring(17,28);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				} else {
					var id = document.getElementById("postli8").href.substring(32,43);
					document.getElementById("ytPlayer").src = "https://youtube.com/embed/" + id;
					document.getElementById("ytPlayer").style.display = '';
				}
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("player").style.display = 'none';
			} else if (document.getElementById("postli8").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("gyPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli8").href;
			} else if (document.getElementById("postli8").href.includes("https://gfycat.com/")) {
				document.getElementById("gyPlayer").style.display = '';
				var id = document.getElementById("postli8").href.substring(19);
				document.getElementById("gyPlayer").src = "https://gfycat.com/ifr/" + id;
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("videoViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		}
	}, 500);
}
