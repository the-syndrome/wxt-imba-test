import "./style.css"
import imbaLogo from "/icon/32.png?url"
import viteLogo from "/wxt.svg?url"
import Counter from "@/components/Counter.imba"

tag App
	<self>
		<div>
		<a href="https://wxt.dev" target="_blank">
			<img.logo src=viteLogo alt="WXT logo">
		<a href="https://imba.io/" target="_blank">
			<img.logo.vanilla src=imbaLogo alt="imba logo">
		<h1> "WXT + Imba"
		<div class="card">
			<Counter>
		<p class="read-the-docs">
			"Click on the WXT and imba logos to learn more"

imba.mount <App>, document.querySelector("#app")
