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
		var sub1 = wd.data.children[0].data.subreddit_name_prefixed;
		var title1 = wd.data.children[0].data.title;
		if (title1.length > 70) {
			document.getElementById("post1").style = "height:200px;"
			document.getElementById("thumb1").style = "height:199px;"
		} else {
			document.getElementById("post1").style = "height:110px;"
			document.getElementById("thumb1").style = "height:109px;"
		}
		var thumb1 = wd.data.children[0].data.thumbnail;
		var url1 = wd.data.children[0].data.url;
		var pUrl1 = "https://reddit.com" + wd.data.children[0].data.permalink;
		if (url1.includes("https://i.redd.it/") | url1.includes("https://i.imgur.com/") | url1.includes("https://pbs.twimg.com") | url1.includes("media.tumblr.com")) {
			var url1 =url1.replace(".gifv", ".gif");
		}
		if (url1.includes("https://v.redd.it/")) {
			var url1 =wd.data.children[0].data.secure_media.reddit_video.fallback_url;
		}
		var pUrl1 = "https://reddit.com" + wd.data.children[0].data.permalink;
		document.getElementById("fullPost1").href = pUrl1;
		document.getElementById("sub1").innerHTML = sub1;
		document.getElementById("title1").innerHTML = title1;
		if (thumb1 === "self" | thumb1 === "default" | thumb1 === "nsfw" | thumb1 === "image") {
			document.getElementById("thumb1").src = "img/1.png"
		} else {
			document.getElementById("thumb1").src =thumb1;
		}
		document.getElementById("postli1").href = url1;
		var sub2 = wd.data.children[1].data.subreddit_name_prefixed;
		var title2 = wd.data.children[1].data.title;
		if (title2.length > 70) {
			document.getElementById("post2").style = "height:200px;"
			document.getElementById("thumb2").style = "height:199px;"
		} else {
			document.getElementById("post2").style = "height:110px;"
			document.getElementById("thumb2").style = "height:109px;"
		}
		var thumb2 = wd.data.children[1].data.thumbnail;
		var url2 = wd.data.children[1].data.url;
		if (url2.includes("https://i.redd.it/") | url2.includes("https://i.imgur.com/") | url2.includes("https://pbs.twimg.com") | url2.includes("media.tumblr.com")) {
			var url2 =url2.replace(".gifv", ".gif");
		}
		if (url2.includes("https://v.redd.it/")) {
			var url2 =wd.data.children[1].data.secure_media.reddit_video.fallback_url;
		}
		var pUrl2 = "https://reddit.com" + wd.data.children[1].data.permalink;
		document.getElementById("fullPost2").href = pUrl2;
		document.getElementById("sub2").innerHTML = sub2;
		document.getElementById("title2").innerHTML = title2;
		if (thumb2 === "self" | thumb2 === "default" | thumb2 === "nsfw" | thumb2 === "image") {
			document.getElementById("thumb2").src = "img/1.png"
		} else {
			document.getElementById("thumb2").src =thumb2;
		}
		document.getElementById("postli2").href = url2;
		var sub3 = wd.data.children[2].data.subreddit_name_prefixed;
		var title3 = wd.data.children[2].data.title;
		if (title3.length > 70) {
			document.getElementById("post3").style = "height:200px;"
			document.getElementById("thumb3").style = "height:199px;"
		} else {
			document.getElementById("post3").style = "height:110px;"
			document.getElementById("thumb3").style = "height:109px;"
		}
		var thumb3 = wd.data.children[2].data.thumbnail;
		var url3 = wd.data.children[2].data.url;
		if (url3.includes("https://i.redd.it/") | url3.includes("https://i.imgur.com/") | url3.includes("https://pbs.twimg.com") | url3.includes("media.tumblr.com")) {
			var url3 =url3.replace(".gifv", ".gif");
		}
		if (url3.includes("https://v.redd.it/")) {
			var url3 =wd.data.children[2].data.secure_media.reddit_video.fallback_url;
		}
		var pUrl3 = "https://reddit.com" + wd.data.children[2].data.permalink;
		document.getElementById("fullPost3").href = pUrl1;
		document.getElementById("sub3").innerHTML = sub3;
		document.getElementById("title3").innerHTML = title3;
		if (thumb3 === "self" | thumb3 === "default" | thumb3 === "nsfw" | thumb3 === "image") {
			document.getElementById("thumb3").src = "img/1.png"
		} else {
			document.getElementById("thumb3").src =thumb3;
		}
		document.getElementById("postli3").href = url3;
		var sub4 = wd.data.children[3].data.subreddit_name_prefixed;
		var title4 = wd.data.children[3].data.title;
		if (title4.length > 70) {
			document.getElementById("post4").style = "height:200px;"
			document.getElementById("thumb4").style = "height:199px;"
		} else {
			document.getElementById("post4").style = "height:110px;"
			document.getElementById("thumb4").style = "height:109px;"
		}
		var thumb4 = wd.data.children[3].data.thumbnail;
		var url4 = wd.data.children[3].data.url;
		if (url4.includes("https://i.redd.it/") | url4.includes("https://i.imgur.com/") | url4.includes("https://pbs.twimg.com") | url4.includes("media.tumblr.com")) {
			var url4 =url4.replace(".gifv", ".gif");
		}
		if (url4.includes("https://v.redd.it/")) {
			var url4 =wd.data.children[3].data.secure_media.reddit_video.fallback_url;
		}
		var pUrl4 = "https://reddit.com" + wd.data.children[3].data.permalink;
		document.getElementById("fullPost4").href = pUrl4;
		document.getElementById("sub4").innerHTML = sub4;
		document.getElementById("title4").innerHTML = title4;
		if (thumb4 === "self" | thumb4 === "default" | thumb4 === "nsfw" | thumb4 === "image") {
			document.getElementById("thumb4").src = "img/1.png"
		} else {
			document.getElementById("thumb4").src =thumb4;
		}
		document.getElementById("postli4").href = url4;
		var sub5 = wd.data.children[4].data.subreddit_name_prefixed;
		var title5 = wd.data.children[4].data.title;
		if (title5.length > 70) {
			document.getElementById("post5").style = "height:200px;"
			document.getElementById("thumb5").style = "height:199px;"
		} else {
			document.getElementById("post5").style = "height:110px;"
			document.getElementById("thumb5").style = "height:109px;"
		}
		var thumb5 = wd.data.children[4].data.thumbnail;
		var url5 = wd.data.children[4].data.url;
		if (url5.includes("https://i.redd.it/") | url5.includes("https://i.imgur.com/") | url5.includes("https://pbs.twimg.com") | url5.includes("media.tumblr.com")) {
			var url5 =url5.replace(".gifv", ".gif");
		}
		if (url5.includes("https://v.redd.it/")) {
			var url5 =wd.data.children[4].data.secure_media.reddit_video.fallback_url;
		}
		var pUrl5 = "https://reddit.com" + wd.data.children[4].data.permalink;
		document.getElementById("fullPost5").href = pUrl5;
		document.getElementById("sub5").innerHTML = sub5;
		document.getElementById("title5").innerHTML = title5;
		if (thumb5 === "self" | thumb5 === "default" | thumb5 === "nsfw" | thumb5 === "image") {
			document.getElementById("thumb5").src = "img/1.png"
		} else {
			document.getElementById("thumb5").src =thumb5;
		}
		document.getElementById("postli5").href = url5;
		var sub6 = wd.data.children[5].data.subreddit_name_prefixed;
		var title6 = wd.data.children[5].data.title;
		if (title6.length > 70) {
			document.getElementById("post6").style = "height:200px;"
			document.getElementById("thumb6").style = "height:199px;"
		} else {
			document.getElementById("post6").style = "height:110px;"
			document.getElementById("thumb6").style = "height:109px;"
		}
		var thumb6 = wd.data.children[5].data.thumbnail;
		var url6 = wd.data.children[5].data.url;
		if (url6.includes("https://i.redd.it/") | url6.includes("https://i.imgur.com/") | url6.includes("https://pbs.twimg.com") | url6.includes("media.tumblr.com")) {
			var url6 =url6.replace(".gifv", ".gif");
		}
		if (url6.includes("https://v.redd.it/")) {
			var url6 =wd.data.children[5].data.secure_media.reddit_video.fallback_url;;
		}
		var pUrl6 = "https://reddit.com" + wd.data.children[5].data.permalink;
		document.getElementById("fullPost6").href = pUrl6;
		document.getElementById("sub6").innerHTML = sub6;
		document.getElementById("title6").innerHTML = title6;
		if (thumb6 === "self" | thumb6 === "default" | thumb6 === "nsfw") {
			document.getElementById("thumb6").src = "img/1.png"
		} else {
			document.getElementById("thumb6").src =thumb6;
		}
		document.getElementById("postli6").href = url6;	
		var sub7 = wd.data.children[6].data.subreddit_name_prefixed;
		var title7 = wd.data.children[6].data.title;
		if (title7.length > 70) {
			document.getElementById("post7").style = "height:200px;"
			document.getElementById("thumb7").style = "height:199px;"
		} else {
			document.getElementById("post7").style = "height:110px;"
			document.getElementById("thumb7").style = "height:109px;"
		}
		var thumb7 = wd.data.children[6].data.thumbnail;
		var url7 = wd.data.children[6].data.url;
		if (url7.includes("https://i.redd.it/") | url7.includes("https://i.imgur.com/") | url7.includes("https://pbs.twimg.com") | url7.includes("media.tumblr.com")) {
			var url7 =url7.replace(".gifv", ".gif");
		}
		if (url7.includes("https://v.redd.it/")) {
			var url7 =wd.data.children[6].data.secure_media.reddit_video.fallback_url;;
		}
		var pUrl7 = "https://reddit.com" + wd.data.children[6].data.permalink;
		document.getElementById("fullPost7").href = pUrl7;
		document.getElementById("sub7").innerHTML = sub7;
		document.getElementById("title7").innerHTML = title7;
		if (thumb7 === "self" | thumb7 === "default" | thumb7 === "nsfw" | thumb7 === "image") {
			document.getElementById("thumb7").src = "img/1.png"
		} else {
			document.getElementById("thumb7").src =thumb7;
		}
		document.getElementById("postli7").href = url7;
		var sub8 = wd.data.children[7].data.subreddit_name_prefixed;
		var title8 = wd.data.children[7].data.title;
		if (title8.length > 70) {
			document.getElementById("post8").style = "height:200px;"
			document.getElementById("thumb8").style = "height:199px;"
		} else {
			document.getElementById("post7").style = "height:110px;"
			document.getElementById("thumb7").style = "height:109px;"
		}
		var thumb8 = wd.data.children[7].data.thumbnail;
		var url8 = wd.data.children[7].data.url;
		if (url8.includes("https://i.redd.it/") | url8.includes("https://i.imgur.com/") | url8.includes("https://pbs.twimg.com") | url8.includes("media.tumblr.com")) {
			var url8 =url8.replace(".gifv", ".gif");
		}
		if (url8.includes("https://v.redd.it/")) {
			var url8 =wd.data.children[7].data.secure_media.reddit_video.fallback_url;;
		}
		var pUrl8 = "https://reddit.com" + wd.data.children[7].data.permalink;
		document.getElementById("fullPost8").href = pUrl8;
		document.getElementById("sub8").innerHTML = sub8;
		document.getElementById("title8").innerHTML = title8;
		if (thumb8 === "self" | thumb8 === "default" | thumb8 === "nsfw" | thumb8 === "image") {
			document.getElementById("thumb8").src = "img/1.png"
		} else {
			document.getElementById("thumb8").src =thumb8;
		}
		document.getElementById("postli8").href = url8;
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("postContainer").style.display = '';
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("pInfo").innerHTML = "Completed the task."
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
