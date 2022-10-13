<script>
	import TrainAnimation from './trainAnimation.svelte';
</script>

<div class="header">
	<h1>Tokyo Metro and Train API</h1>
	<div class="train-animation-box">
		<TrainAnimation />
	</div>
</div>

<style>
	.header {
		grid-area: header;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: flex-start;
		margin-top: 2%;
	}

	.train-animation-box {
		width: 25%;
		height: 25%;
	}
	h1 {
		margin: 0%;
		padding: 3%;
		color: #272822;
        font-size: 4em;
	}
</style>
