<script>
	import CodeExample from '../components/codeExample.svelte';
	import TrainAnimation from '../components/trainAnimation.svelte';
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
			<div class="train-animation-box">
				<TrainAnimation />
			</div>
		</div>
		<div class="content">
			<CodeExample />
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
		height: auto;
		width: fit-content;
	}

	.grid-container {
		display: grid;
		grid-template-areas:
			'header'
			'content'
			'footer';
		gap: 10px;
	}

	.grid-container > div {
		text-align: center;
		font-size: 35px;
	}

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

	.content {
		grid-area: content;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.footer {
		grid-area: footer;
	}

	h1 {
		margin: 3%;
		padding: 3%;
		color: #272822;
	}
</style>
