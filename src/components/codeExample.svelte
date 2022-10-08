<script context="module">
	import { linePOSTRequestSample, stationPOSTRequestSample } from '../constants/codeSamples';
	import Prism from 'svelte-prism';
</script>

<div class="code-example">
	<h3 style="color: #272822;">Sample LINE request</h3>
	<div class="code-and-text" style="font-size: 0.5em;">
		<Prism language="js" source={linePOSTRequestSample} />
		<p>Make a POST request to /line, specifying the train line in your POST body in Romaji.</p>
	</div>
</div>
<div class="code-example">
	<h3 style="color: cornsilk">Sample STATION request</h3>
	<div class="code-and-text" style="font-size: 0.5em;">
		<p>Make a POST request to /station, specifying the station name in your POST body in Romaji.</p>
		<Prism language="js" source={stationPOSTRequestSample} />
	</div>
</div>

<style>
	.code-example {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		margin: 2%;
		padding: 2%;
		background-color: rgba(255, 255, 255, 0.1);
	}
	.code-and-text {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1%, 2%, 1%, 5%;
		flex-wrap: wrap;
		justify-content: center;
	}
	.code-and-text > p {
		font-size: x-large;
		max-width: 45%;
		margin: 5%;
		color: cornsilk;
	}
    h3 {
		margin: 0%;
	}
</style>
