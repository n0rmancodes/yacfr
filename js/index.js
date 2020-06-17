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
			var innerDiv = document.createElement("DIV");
			innerDiv.classList.add("postContent");
			var subTxt = document.createElement("P");
			subTxt.classList.add("sub");
			subTxt.innerHTML = "/" + wd.data.children[c].data.subreddit_name_prefixed  + " - posted by /u/" + wd.data.children[c].data.author;
			var title = document.createElement("H2");
			title.innerHTML = wd.data.children[c].data.title;
			title.classList.add("title");
			var url = document.createElement("A");
			if (wd.data.children[c].data.url.includes("https://v.redd.it/")) {
				url.href = wd.data.children[c].data.secure_media.reddit_video.fallback_url;
				var thumb = document.createElement("VIDEO");
				thumb.autoplay = true;
				thumb.loop = true;
				thumb.classList.add("thumb");
				if (wd.data.children[c].data.secure_media.reddit_video.scrubber_media_url) {
					thumb.src = wd.data.children[c].data.secure_media.reddit_video.scrubber_media_url;
				} else {
					thumb.src = wd.data.children[c].data.secure_media.reddit_video.fallback_url;
				}
			} else if (wd.data.children[c].data.url.includes("https://i.redd.it/") | wd.data.children[c].data.url.includes("https://i.imgur.com/")) {
				var thumb = document.createElement("IMG");
				thumb.classList.add("thumb");
				thumb.src = wd.data.children[c].data.url;
				url.href = wd.data.children[c].data.url
			}
			if (!url.href) {
				url.href = wd.data.children[c].data.url;
				var thumb = document.createElement("IMG");
				thumb.classList.add("thumb");
				thumb.src = "img/1.png"
			} else if (!thumb.src) {
				var thumb = document.createElement("IMG");
				thumb.classList.add("thumb");
				thumb.src = "img/1.png";
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
			innerDiv.appendChild(subTxt);
			innerDiv.appendChild(title);
			postDiv.appendChild(innerDiv);
			url.appendChild(thumb);
			postDiv.appendChild(url);
			document.getElementById("cProg").style = "width:100%";
			document.getElementById("postContainer").style.display = '';
			document.getElementById("postContainer").appendChild(postDiv);
			document.getElementById("pInfo").innerHTML = "Completed the task."
		}
	}
	http.onerror = function() {
		document.getElementById("cProg").style = "width:100%; background-color:#7b0101";
		document.getElementById("conErr").style.display = "";
		document.getElementById("postContainer").style.display = "none";
		document.getElementById("pInfo").innerHTML = "Error! Please see below for more details."
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

function load() {
	if (window.location.hash) {
		var h = window.location.hash;
		if (h.includes("#post#")) {
			
		}
	}
}