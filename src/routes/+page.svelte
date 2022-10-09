<script>
	import GlobalNav from '../components/globalNav.svelte';
	import Header from '../components/header.svelte';
	import CodeExample from '../components/codeExample.svelte';
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
	<GlobalNav />
	<div class="grid-container">
		<Header />
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
</style>
