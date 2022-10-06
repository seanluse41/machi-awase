<script>
	import { linePOSTRequestSample, stationPOSTRequestSample } from '../constants/codeSamples';
	import Prism from 'svelte-prism';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css"
	/>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
	</style>
</svelte:head>

<div class="main">
	<div class="grid-container">
		<div class="header">
			<h1>Tokyo Metro and Train API</h1>
		</div>
		<div class="left">
			<h4>Sample LINE request</h4>
			<div style="font-size: 0.4em;">
				<Prism language="js" source={linePOSTRequestSample} />
			</div>
		</div>
		<div class="right">
			<h4>Sample STATION request</h4>
			<div style="font-size: 0.4em;">
				<Prism language="js" source={stationPOSTRequestSample} />
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0%;
	}

	.main {
		margin: 0%;
		padding: 2%;
		font-family: 'Noto Sans JP';
		background: rgb(47, 2, 194);
		background: linear-gradient(0deg, rgba(47, 2, 194, 1) 0%, rgba(238, 174, 202, 1) 100%);
		height: 100vh;
		max-width: 100vw;
	}

	.header {
		grid-area: header;
		display: flex;
		justify-content: space-evenly;
		margin-top: 3%;
	}

	.left {
		grid-area: left;
		display: inline-block;
		flex-direction: column;
	}

	.right {
		grid-area: right;
		display: flex;
		flex-direction: column;
	}

	.footer {
		grid-area: footer;
	}

	.grid-container {
		display: grid;
		grid-template-areas:
			'header header header header'
			'left left right right'
			'footer footer footer footer';
		gap: 10px;
		padding: 10px;
	}

	.grid-container > div {
		text-align: center;
		padding: 10px 0;
		font-size: 35px;
	}

	h1 {
		margin: 3%;
		padding: 3%;
		color: #272822;
	}

	h4 {
		margin: 0%;
		color: cornsilk;
	}
</style>
