<script>
	import {
		linePOSTRequestSample,
		stationPOSTRequestSample,
		linePOSTResponseSample,
		stationPOSTResponseSample
	} from '../constants/codeSamples';
	import { fade } from 'svelte/transition';
	import Prism from 'svelte-prism';
	let lineSampleToggle = false;
	let stationSampleToggle = false;
</script>

{#if lineSampleToggle}
	<div class="code-example">
		<div class="toggle-box">
			<h3 style="color: #272822;">Sample LINE response</h3>
			<label class="switch">
				<input type="checkbox" bind:checked={lineSampleToggle} />
				<span class="slider round" />
			</label>
		</div>
		<div class="code-and-text" style="font-size: 0.5em;">
			<Prism language="js" source={linePOSTResponseSample} />
			<p style="color: #272822;">
				... and get JSON about a train line. Each station object contains it's own name, line, and
				transfer info. Use the transferInfo array to recursively call your function and change train
				lines when necessary.
			</p>
		</div>
	</div>
{:else}
	<div class="code-example">
		<div class="toggle-box">
			<h3 style="color: #272822;" transition:fade>Sample LINE request</h3>
			<label class="switch">
				<input type="checkbox" bind:checked={lineSampleToggle} />
				<span class="slider round" />
			</label>
		</div>
		<div class="code-and-text" style="font-size: 0.5em;" transition:fade>
			<Prism language="js" source={linePOSTRequestSample} />
			<p style="color: #272822;">
				Make a POST request to /line, specifying the train line in your POST body in Romaji...
			</p>
		</div>
	</div>
{/if}
{#if stationSampleToggle}
	<div class="code-example">
		<div class="toggle-box">
			<h3 style="color: cornsilk;">Sample STATION response</h3>
			<label class="switch">
				<input type="checkbox" bind:checked={stationSampleToggle} />
				<span class="slider round" />
			</label>
		</div>
		<div class="code-and-text" style="font-size: 0.5em;">
			<Prism language="js" source={stationPOSTResponseSample} />
			<p style="color: cornsilk;">
				This returns the station in question, and all train lines that pass through it, or are
				reasonably transferable, in case the official designation is a different station.
			</p>
		</div>
	</div>
{:else}
	<div class="code-example">
		<div class="toggle-box">
			<h3 style="color: cornsilk" transition:fade>Sample STATION request</h3>
			<label class="switch">
				<input type="checkbox" bind:checked={stationSampleToggle} />
				<span class="slider round" />
			</label>
		</div>
		<div class="code-and-text" style="font-size: 0.5em;" transition:fade>
			<p>
				Make a POST request to /station, specifying the station name in your POST body in Romaji.
			</p>
			<Prism language="js" source={stationPOSTRequestSample} />
		</div>
	</div>
{/if}

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
		min-height: 584px;
	}

	h3 {
		margin: 2%;
	}

	.toggle-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 90%;
		justify-content: center;
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

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
