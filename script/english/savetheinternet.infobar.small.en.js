function start(){if(document.createStyleSheet)document.createStyleSheet("https://cdn.pluoi.com/savetheinternet.infobar.css");else{var e=document.createElement("link");e.rel="stylesheet",e.href="data:text/css,"+escape("@import url('https://cdn.pluoi.com/savetheinternet.infobar.css');"),document.getElementsByTagName("head")[0].appendChild(e)}document.body.innerHTML+='<div id="savetheinternetbar"><div id="savetheinternettext"><p id="savetheinternettitle">The Internet is in danger!</p><p id="savetheinternetinfo">Help us fight a censored Internet, we count on you!</p></div><div id="savetheinternetbuttons"><a class="savetheinternetlink" href="https://savetheinternet.info"><button id="savetheinternethelp">I want to help!</button></a><a class="savetheinternetlink" href="#"><button id="savetheinternetdismiss">I dont care!</button></a></div></div>';var t=document.getElementById("savetheinternetbar"),n=document.getElementById("savetheinternetdismiss"),i=document.getElementById("savetheinternethelp");function s(){t.style.display="none"}n.onclick=function(){s()},i.onclick=function(){s()}}window.onload=start;