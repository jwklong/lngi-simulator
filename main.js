const querymanager = new URLSearchParams(window.location.search)
if (querymanager.has("test")) {
	console.log(querymanager.get("test"))
}
