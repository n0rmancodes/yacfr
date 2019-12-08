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
		if (!num) {
			const num = 0;
			console.log(num);
		} else if (num < 100) {
			const num = num + 1;
			console.log(num);
		} else if (num == 100 | num > 100) {
			return;
		}
		var sub1 = wd.data.children[num].data.subreddit_name_prefixed;
		var title = wd.data.children[num].data.title;
		if (title.length > 70) {
			document.getElementById("post1").style = "height:200px;"
			document.getElementById("thumb1").style = "height:199px;"
		} else {
			document.getElementById("post1").style = "height:110px;"
			document.getElementById("thumb1").style = "height:109px;"
		}
		var thumb = wd.data.children[num].data.thumbnail;
		var url1 = wd.data.children[num].data.url;
		var pUrl1 = "https://reddit.com" + wd.data.children[num].data.permalink;
		if (url1.includes("https://i.redd.it/") | url1.includes("https://i.imgur.com/") | url1.includes("https://pbs.twimg.com") | url1.includes("media.tumblr.com")) {
			var url1 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url1.replace(".gifv", ".gif");
		}
		if (url1.includes("https://v.redd.it/")) {
			var url1 = "https://yacfr-img-proxy.herokuapp.com/?url=" + wd.data.children[num].data.secure_media.reddit_video.fallback_url;
		}
		var pUrl1 = "https://reddit.com" + wd.data.children[num].data.permalink;
		start();
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
			} else if (document.getElementById("postli1").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli1").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
			return;
		} else if (window.location.href.includes("v2")) {
			if (document.getElementById("postli2").href.includes("https://i.redd.it") | document.getElementById("postli2").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli2").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli2").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli2").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
			return;
		} else if (window.location.href.includes("v3")) {
			if (document.getElementById("postli3").href.includes("https://i.redd.it") | document.getElementById("postli3").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli3").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli3").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli3").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
			return;
		} else if (window.location.href.includes("v4")) {
			if (document.getElementById("postli4").href.includes("https://i.redd.it") | document.getElementById("postli4").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli4").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli4").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli4").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			} 
		} else if (window.location.href.includes("v5")) {
			if (document.getElementById("postli5").href.includes("https://i.redd.it") | document.getElementById("postli5").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli5").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli5").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli5").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v6")) {
			if (document.getElementById("postli6").href.includes("https://i.redd.it") | document.getElementById("postli6").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli6").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli6").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli6").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v7")) {
			if (document.getElementById("postli7").href.includes("https://i.redd.it") | document.getElementById("postli7").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli7").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli7").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli7").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		} else if (window.location.href.includes("v8")) {
			if (document.getElementById("postli8").href.includes("https://i.redd.it") | document.getElementById("postli8").href.includes("https://i.imgur.com")) {
				document.getElementById("imageViewer").innerHTML = "<img src='" + document.getElementById("postli8").href +"' class='imgViewer'>"
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
			} else if (document.getElementById("postli8").href.includes("https://v.redd.it")) {
				document.getElementById("imageViewer").style.display = 'none';
				document.getElementById("ytPlayer").style.display = 'none';
				document.getElementById("player").style.display = '';
				document.getElementById("player").src = document.getElementById("postli8").href;
			} else {
				document.getElementById("imageViewer").innerHTML = 'This media could not be opened.'
			}
		}
	}, 500);
}