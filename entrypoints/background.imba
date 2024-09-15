export default defineBackground do
	console.log "Hello background!", { id: browser.runtime.id }
