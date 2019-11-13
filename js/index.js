if (!localStorage.getItem('bType')) {document.getElementById("bType").value = "top"; localStorage.setItem("bType", document.getElementById("bType").value);} 
document.getElementById("bType").value = localStorage.getItem('bType');
start();

function start() {
	document.getElementById("cProg").style = "width:1%";
	const http = new XMLHttpRequest();
	const dUrl = "https://cors-anywhere.herokuapp.com/https://www.reddit.com/" + localStorage.getItem('bType') + ".json?limit-100"
	http.open("GET", dUrl);
	document.getElementById("cProg").style = "width:5%";
	http.send();
	document.getElementById("cProg").style = "width:15%";
	http.onreadystatechange=(e)=>{
		document.getElementById("cProg").style = "width:25%";
		var wd = JSON.parse(http.responseText);
		document.getElementById("cProg").style = "width:50%";
		var sub1 = wd.data.children[0].data.subreddit_name_prefixed;
		var title1 = wd.data.children[0].data.title;
		if (title1.length > 70) {
			document.getElementById("post1").style = "height:200px;"
			document.getElementById("thumb1").style = "height:199px;"
		} else {
			document.getElementById("post1").style = "height:100px;"
			document.getElementById("thumb1").style = "height:99px;"
		}
		var thumb1 = wd.data.children[0].data.thumbnail;
		var url1 = wd.data.children[0].data.url;
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
			document.getElementById("post2").style = "height:100px;"
			document.getElementById("thumb2").style = "height:99px;"
		}
		var thumb2 = wd.data.children[1].data.thumbnail;
		var url2 = wd.data.children[1].data.url;
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
			document.getElementById("post3").style = "height:100px;"
			document.getElementById("thumb3").style = "height:99px;"
		}
		var thumb3 = wd.data.children[2].data.thumbnail;
		var url3 = wd.data.children[2].data.url;
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
			document.getElementById("post4").style = "height:100px;"
			document.getElementById("thumb4").style = "height:99px;"
		}
		var thumb4 = wd.data.children[3].data.thumbnail;
		var url4 = wd.data.children[3].data.url;
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
			document.getElementById("post5").style = "height:100px;"
			document.getElementById("thumb5").style = "height:99px;"
		}
		var thumb5 = wd.data.children[4].data.thumbnail;
		var url5 = wd.data.children[4].data.url;
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
			document.getElementById("post6").style = "height:100px;"
			document.getElementById("thumb6").style = "height:99px;"
		}
		var thumb6 = wd.data.children[5].data.thumbnail;
		var url6 = wd.data.children[5].data.url;
		document.getElementById("sub6").innerHTML = sub6;
		document.getElementById("title6").innerHTML = title6;
		if (thumb6 === "self" | thumb6 === "default" | thumb6 === "nsfw") {
			document.getElementById("thumb6").src = "img/1.png"
		} else {
			document.getElementById("thumb6").src = "https://yacfr-img-proxy.herokuapp.com/?url=" + thumb6;
		}
		document.getElementById("postli6").href = url6;
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("postContainer").style.display = '';
		var sub7 = wd.data.children[6].data.subreddit_name_prefixed;
		var title7 = wd.data.children[6].data.title;
		if (title7.length > 70) {
			document.getElementById("post7").style = "height:200px;"
			document.getElementById("thumb7").style = "height:199px;"
		} else {
			document.getElementById("post7").style = "height:100px;"
			document.getElementById("thumb7").style = "height:99px;"
		}
		var thumb7 = wd.data.children[6].data.thumbnail;
		var url7 = wd.data.children[6].data.url;
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
	}
	http.onerror = function() {
		document.getElementById("cProg").style = "width:100%";
		document.getElementById("conErr").style.display = "";
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
	///	document.getElementById("cProg").style = "width:0%";
	//	document.getElementById('fpButton').classList.add("onLink");
	///	document.getElementById('svButton').classList.remove("onLink");
	//	document.getElementById('frontPage').style.display = '';
	//	document.getElementById('subView').style.display = 'none';
	//	start();
	//} else {
		return;
	//}
}


function getSubs() {
	
}