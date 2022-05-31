const querymanager = new URLSearchParams(window.location.search)
const gain = querymanager.has("gain") ? querymanager.get("gain") : "1"
const gaintype = querymanager.has("gaintype") ? querymanager.get("gaintype") : "add"

var number = new ExpantaNum("2")
function lngi() {
	if (gaintype == "add") {
		number = number.add(new ExpantaNum(gain).div(30))
	}
	if (gaintype == "mul") {
		number = number.mul(new ExpantaNum(gain).div(30))
	}
	if (gaintype == "pow") {
		number = number.pow(new ExpantaNum(gain).div(30))
	}
	if (gaintype == "tet") {
		number = number.tetrate(new ExpantaNum(gain).div(30))
	}
	document.getElementById("number").innerHTML = number.toStringWithDecimalPlaces(4)
}
setInterval(lngi,1000/30)
