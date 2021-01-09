<script>
	import successkid from 'images/successkid.jpg';
import Resume from '../resume/Resume.svelte';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Chomtana Chanjaraswichai - Resume and Portfolio</title>

	<meta property="og:type"               content="article" />
	<meta property="og:title"              content="Chomtana Chanjaraswichai - Resume and Portfolio" />
	<meta property="og:description"        content="Click to see work experience, competitions, projects, education and skills of Chomtana Chanjaraswichai. Let me know if you are intersted in me!" />
	<meta property="og:image"              content="https://chom.dev/images/myself.jpg" />
</svelte:head>

<Resume></Resume>
