const querymanager = new URLSearchParams(window.location.search)
const gain = querymanager.has("gain") ? querymanager.get("gain") : "1"
const gaintype = querymanager.has("gaintype") ? querymanager.get("gaintype") : "add"
const maxcap = querymanager.has("maxcap") ? querymanager.get("maxcap") : Infinity
const mincap = querymanager.has("mincap") ? querymanager.get("mincap") : -Infinity
const startnum = querymanager.has("startnum") ? querymanager.get("startnum") : "2"
const background = querymanager.has("background") ? querymanager.get("background") : "#222"
const textcolor = querymanager.has("textcolor") ? querymanager.get("textcolor") : "#fff"

document.getElementById("body").style.background = background
document.getElementById("body").style.color = textcolor

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
	
	if (number.gte(maxcap)) {
		number = new ExpantaNum(maxcap)
	}
	if (number.lte(mincap)) {
		number = new ExpantaNum(mincap)
	}
	document.getElementById("number").innerHTML = number.toStringWithDecimalPlaces(4)
}
setInterval(lngi,1000/30)
