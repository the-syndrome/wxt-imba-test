export default tag Counter
	clicks = 0
	<self>
		<button @click=(clicks += 1)> "Counter: {clicks}"