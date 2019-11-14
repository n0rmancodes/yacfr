var cooldownAllow = true;
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
	if (cooldownAllow === false) {
		document.getElementById("cooldownErr").style.display = '';
		return;
	} else {
		cooldown();
		document.getElementById("cProg").style = "width:1%";
		document.getElementById("pInfo").innerHTML = "Setting up request..."
		const http = new XMLHttpRequest();
		const dUrl = "https://cors-anywhere.herokuapp.com/https://www.reddit.com/" + localStorage.getItem('bType') + ".json?"
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
			if (url1.includes("https://i.redd.it/") | url1.includes("https://i.imgur.com/")) {
				var url1 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url1;
			}
			document.getElementById("sub1").innerHTML = sub1;
			document.getElementById("title1").innerHTML = title1;
			if (thumb1 === "self" | thumb1 === "default" | thumb1 === "nsfw") {
				document.getElementById("thumb1").src = "img/1.png"
			} else {
				document.getElementById("thumb1").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb1;
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
			if (url2.includes("https://i.redd.it/") | url2.includes("https://i.imgur.com/")) {
				var url2 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url2;
			}
			document.getElementById("sub2").innerHTML = sub2;
			document.getElementById("title2").innerHTML = title2;
			if (thumb2 === "self" | thumb2 === "default" | thumb3 === "nsfw") {
				document.getElementById("thumb2").src = "img/1.png"
			} else {
				document.getElementById("thumb2").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb2;
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
			if (url3.includes("https://i.redd.it/") | url3.includes("https://i.imgur.com/")) {
				var url3 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url3;
			}
			document.getElementById("sub3").innerHTML = sub3;
			document.getElementById("title3").innerHTML = title3;
			if (thumb3 === "self" | thumb3 === "default" | thumb3 === "nsfw") {
				document.getElementById("thumb3").src = "img/1.png"
			} else {
				document.getElementById("thumb3").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb3;
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
			if (url4.includes("https://i.redd.it/") | url4.includes("https://i.imgur.com/")) {
				var url4 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url4;
			}
			document.getElementById("sub4").innerHTML = sub4;
			document.getElementById("title4").innerHTML = title4;
			if (thumb4 === "self" | thumb4 === "default" | thumb4 === "nsfw") {
				document.getElementById("thumb4").src = "img/1.png"
			} else {
				document.getElementById("thumb4").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb4;
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
			if (url5.includes("https://i.redd.it/") | url5.includes("https://i.imgur.com/")) {
				var url5 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url5;
			}
			document.getElementById("sub5").innerHTML = sub5;
			document.getElementById("title5").innerHTML = title5;
			if (thumb5 === "self" | thumb5 === "default" | thumb5 === "nsfw") {
				document.getElementById("thumb5").src = "img/1.png"
			} else {
				document.getElementById("thumb5").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb5;
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
			if (url6.includes("https://i.redd.it/") | url6.includes("https://i.imgur.com/")) {
				var url6 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url6;
			}
			document.getElementById("sub6").innerHTML = sub6;
			document.getElementById("title6").innerHTML = title6;
			if (thumb6 === "self" | thumb6 === "default" | thumb6 === "nsfw") {
				document.getElementById("thumb6").src = "img/1.png"
			} else {
				document.getElementById("thumb6").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb6;
			}
			document.getElementById("postli6").href = url6;
			
			document.getElementById("postContainer").style.display = '';
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
			if (url7.includes("https://i.redd.it/") | url7.includes("https://i.imgur.com/")) {
				var url7 = "https://yacfr-img-proxy.herokuapp.com/?url=" + url7;
			}
			document.getElementById("sub7").innerHTML = sub7;
			document.getElementById("title7").innerHTML = title7;
			if (thumb7 === "self" | thumb7 === "default" | thumb7 === "nsfw") {
				document.getElementById("thumb7").src = "img/1.png"
			} else {
				document.getElementById("thumb7").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb7;
			}
			document.getElementById("postli7").href = url7;
			document.getElementById("cProg").style = "width:100%";
			document.getElementById("postContainer").style.display = '';
			document.getElementById("cProg").style = "width:100%";
			document.getElementById("pInfo").innerHTML = "Completed the task."
			
		}
		http.onerror = function() {
			document.getElementById("cProg").style = "width:100%";
			document.getElementById("conErr").style.display = "";
			document.getElementById("pInfo").innerHTML = "Error! Plase see below for more details."
		}
		cooldown();
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

function subTo() {
	document.getElementById("cProg").style = "width:10%";
	document.getElementById("subTxt").style.display = '';
	document.getElementById("sBtn").style.display = '';
	document.getElementById("cProg").style = "width:1%";
	if (!document.getElementById('subscribe').value.includes("r/")) {
		var sub = "r/" + document.getElementById('subscribe').value;
	} else {
		var sub = document.getElementById('subscribe').value;
	}
	if (!document.getElementById('subscribe').value) {
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("subTxt").innerHTML = "Error: No sub inputted."
		document.getElementById('subscribe').focus();
		return;
	}
	if (document.getElementById('subscribe').value.includes(" ")) {
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("subTxt").innerHTML = "Error: Subs cannot contain spaces."
		document.getElementById('subscribe').focus();
		return;
	}
	document.getElementById("cProg").style = "width:50%";
	document.getElementById("subTxt").innerHTML = "Hold on..."
	document.getElementById("subscribe").disabled = true;
	document.getElementById("sBtn").style.display = 'none';
	localStorage.setItem('noSub', false);
	document.getElementById("cProg").style = "width:75%";
	if (!localStorage.getItem("totalSubs")) {
		localStorage.setItem(1, sub);
		localStorage.setItem('totalSubs', 1)
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("subTxt").innerHTML = "Subbed to " + sub + "!<br> You are now subbed to 1 subreddit."
		document.getElementById("subscribe").disabled = false;
		document.getElementById("sBtn").style.display = '';
	} else {
		localStorage.setItem('totalSubs', localStorage.getItem('totalSubs') + 1);
		localStorage.setItem(localStorage.getItem('totalSubs') + 1, sub);
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("subTxt").innerHTML = "Subbed to " + sub + "!<br> You are now subbed to " + localStorage.getItem("totalSubs") + " subreddits."
		document.getElementById("subscribe").disabled = false;
		document.getElementById("sBtn").style.display = '';
	}
}

function sv() {
	//if (!document.getElementById('frontPage').style.display) {
		//document.getElementById("cProg").style = "width:0%";
		//document.getElementById('fpButton').classList.remove("onLink");
		//document.getElementById('svButton').classList.add("onLink");
		//document.getElementById('frontPage').style.display = 'none';
		//if (!localStorage.getItem('noSub')) {
		//	document.getElementById('subView').style.display = '';
		//	document.getElementById('nosuberr').style.display = '';
		//} else {
		//	document.getElementById('subView').style.display = '';
		//	getSubs();
		//}
	//} else {
	//	return;
	//}
	alert("Still under construction!");
	return;
}

function fp() {
	//if (document.getElementById('frontPage').style.display) {
	//	document.getElementById("cProg").style = "width:0%";
	//	document.getElementById('fpButton').classList.add("onLink");
	//  document.getElementById('svButton').classList.remove("onLink");
	//	document.getElementById('frontPage').style.display = '';
	//	document.getElementById('subView').style.display = 'none';
	//	start();
	//} else {
		return;
	//}
}


function getSubs() {
	
}

function cooldown() {
	document.getElementById("cooldownErr").style.display = 'none';
	var cooldownAllow = false;
	setTimeout(function () {
		var cooldownAllow = true;
	}, 5000);
}

function shortcuts() {
	if (document.getElementById("shortMenu").style.display = 'none') {
		document.getElementById("shortMenu").style.display = '';
	} else {
		document.getElementById("shortMenu").style.display = 'none';
	}
}
