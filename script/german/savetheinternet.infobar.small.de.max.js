<script type="text/javascript">
	function start() {

    //<![CDATA[
    if (document.createStyleSheet) {
        document.createStyleSheet('https://cdn.pluoi.com/savetheinternet.infobar.css');
    } else {
        var styles = "@import url('https://cdn.pluoi.com/savetheinternet.infobar.css');";
        var newSS = document.createElement('link');
        newSS.rel = 'stylesheet';
        newSS.href = 'data:text/css,' + escape(styles);
        document.getElementsByTagName("head")[0].appendChild(newSS);
    }
    //]]>

    document.body.innerHTML += '<div id="savetheinternetbar"><div id="savetheinternettext"><p id="savetheinternettitle">Das Internet ist in Gefahr!</p><p id="savetheinternetinfo">Hilf uns im Kampf gegen ein zensiertes Internet, wir zählen auf dich!</p></div><div id="savetheinternetbuttons"><a class="savetheinternetlink" href="https://savetheinternet.info"><button id="savetheinternethelp">Ich möchte helfen!</button></a><a class="savetheinternetlink" href="#"><button id="savetheinternetdismiss">Ist mir egal</button></a></div></div>';

    var dialog = document.getElementById("savetheinternetbar");
    var close = document.getElementById("savetheinternetdismiss");
    var link = document.getElementById("savetheinternethelp");

    close.onclick = function () {
        hideElement();
    }

    link.onclick = function () {
        hideElement();
    }

    function hideElement() {
        dialog.style.display = "none"
    }

}
window.onload = start;
</script>