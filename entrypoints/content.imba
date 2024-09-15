
export default defineContentScript({
  matches: ["*://*/*"],
  main: do console.log "Hello content."
})