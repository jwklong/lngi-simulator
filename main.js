const querymanager = new URLSearchParams(window.location.search)
const gain = querymanager.has("gain") ? querymanager.get("gain") : "1"
const gaintype = querymanager.has("gaintype") ? querymanager.get("gaintype") : "add"

var number = new ExpantaNum("2")
function lngi() {
	if (gaintype == "add") {
		number = number.add(new ExpantaNum(gain))
	}
	document.getElementById("number").innerHTML = number
}
setInterval(lngi,1000/30)
