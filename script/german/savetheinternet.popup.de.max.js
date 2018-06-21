function start() {

    //<![CDATA[
    if (document.createStyleSheet) {
        document.createStyleSheet('https://cdn.pluoi.com/savetheinternet.popup.css');
    } else {
        var styles = "@import url('https://cdn.pluoi.com/savetheinternet.popup.css');";
        var newSS = document.createElement('link');
        newSS.rel = 'stylesheet';
        newSS.href = 'data:text/css,' + escape(styles);
        document.getElementsByTagName("head")[0].appendChild(newSS);
    }
    //]]>

    function closePopUp() {
        var e, t, n, o;
        sti_dialog.style.display = "none", e = "savetheinternetCookie", t = "true", n = new Date, o = "expires=", n.setTime(n.getTime() + 31536e6), o += n.toGMTString(), document.cookie = e + "=" + t + "; " + o + "; path=/"
    }
    document.body.innerHTML += '<div id="savetheinternetdialog"><div id="savetheinternetinfo"><p id="savetheinternettitle">Das Internet ist in Gefahr!</p><p id="savetheinternettext">Hilf uns im Kampf gegen ein zensiertes Internet, wir zählen auf dich!</p><a href="https://savetheinternet.info" target="_blank" id="savetheinternetlink"><button id="savetheinternetbutton">Ich möchte helfen!</button></a><a href="#" id="savetheinternetclose">&#10006;</a></div><div id="savetheinternetbackground"></div></div>';
    var t;
    var n;
    var sti_dialog = document.getElementById("savetheinternetdialog");
    var sti_close = document.getElementById("savetheinternetclose");
    var sti_link = document.getElementById("savetheinternetlink");
    var sti_background = document.getElementById("savetheinternetbackground");
    0 == (t = "savetheinternetCookie", 2 == (n = ("; " + document.cookie).split("; " + t + "=")).length && n.pop().split(";").shift()) && (sti_dialog.style.display = "block");
    sti_close.onclick = function() {
        closePopUp();
    }
    sti_link.onclick = function() {
        closePopUp();
    }
    sti_background.onclick = function() {
        closePopUp();
    }
}
window.onload = start;