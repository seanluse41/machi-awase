<script>
	import StationDisplay from '../../components/stationDisplay.svelte';
	let targetLine;
	let targetStation = "";
	let lineInfo = [];
	let stationInfo;

	const getLine = async () => {
		const response = await fetch('/line', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				targetLine: targetLine
			})
		});
		let jsonResponse = await response.json();
		lineInfo = jsonResponse.stations
	};

	const getStation = async () => {
		const response = await fetch('/station', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				requestStation: targetStation
			})
		});
		stationInfo = await response.json();
		console.log(stationInfo)
	};
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
	</style>
</svelte:head>

<div class="main">
	<div class="grid-container">
		<div class="header">
			<button on:click={getLine}><h2>Get Line Info</h2></button>
			<button on:click={getStation}><h2>Get Station Info</h2></button>
		</div>

		<div class="left">
			<h5>Which Line?</h5>
			<select bind:value={targetLine}>
				<option default value="asakusa">Asakusa Line</option>
				<option value="chiyoda">Chiyoda Line</option>
				<option value="fukutoshin">Fukutoshin Line</option>
				<option value="ginza">Ginza Line</option>
				<option value="hanzomon">Hanzomon Line</option>
				<option value="hibiya">Hibiya Line</option>
				<option value="marunouchi">Marunouchi Line</option>
				<option value="mita">Mita Line</option>
				<option value="namboku">Namboku Line</option>
				<option value="oedo">Oedo Line</option>
				<option value="shiinjuku">Shinjuku Line</option>
				<option value="tozai">Tozai Line</option>
				<option value="yurakucho">Yurakucho Line</option>
			</select>
			{#each lineInfo as station}
				<StationDisplay stationInfo={station} />
			{/each}
		</div>
		<div class="right">
			<h5>Which Station? (Romaji)</h5>
			<input type="text" bind:value={targetStation}/>
			<div>
				{#if stationInfo}
				{stationInfo.name}
				{stationInfo.lines}
				{/if}
			</div>
		</div>
		<div class="footer">Footer</div>
	</div>
</div>

<style>
	.main {
		font-family: 'Noto Sans JP';
	}

	.header {
		grid-area: header;
		display: flex;
		justify-content: space-evenly;
	}
	.left {
		grid-area: left;
		display: flex;
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
		background-color: #2196f3;
		padding: 10px;
	}

	.grid-container > div {
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
		padding: 10px 0;
		font-size: 35px;
	}

	h2,
	h5 {
		margin: 0%;
	}
</style>
