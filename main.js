const querymanager = new URLSearchParams(window.location.search)
const gain = querymanager.has("gain") ? querymanager.get("gain") : "1"
const gaintype = querymanager.has("gaintype") ? querymanager.get("gaintype") : "add"
const cap = querymanager.has("cap") ? querymanager.get("cap") : Infinity
const startnum = querymanager.has("startnum") ? querymanager.get("startnum") : "2"

var number = new ExpantaNum(startnum)
var number2 = new ExpantaNum("0")
if (gaintype == "powpow") {
	number2 = new ExpantaNum(gain)
}
function lngi() {
	if (gaintype == "add") {
		number = number.add(new ExpantaNum(gain).div(30))
	}
	if (gaintype == "mul") {
		number = number.mul(new ExpantaNum(gain).div(30).add(1))
	}
	if (gaintype == "pow") {
		number = number.pow(new ExpantaNum(gain).div(30).add(1))
	}
	if (gaintype == "powpow") {
		number2 = number2.pow(new ExpantaNum(gain).div(30).add(1))
		number = number.pow(number2.div(30).add(1))
	}
	if (gaintype == "tet") {
		number = number.tetr(new ExpantaNum(gain).div(30).add(1))
	}
	if (gaintype == "pen") {
		number = number.pent(new ExpantaNum(gain).div(30).add(1))
	}
	
	if (number.gte(cap)) {
		number = new ExpantaNum(cap)
	}
	document.getElementById("number").innerHTML = number.toStringWithDecimalPlaces(4)
}
setInterval(lngi,1000/30)
