<script>
	import LeftPane from '../components/LeftPane.svelte';
	import Nav from '../components/Nav.svelte';
import RightPane from '../components/RightPane.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.left-right-pane-sizer {
		width: 280px;
		flex-basis: 280px;
		flex-shrink: 0;
	}

	.left-right-pane-container {
		position: fixed; 
		top: 0;
		border-left: 1px solid grey;
		border-right: 1px solid grey;
		height: 100%;
		z-index: 100;
	}
</style>

<div class="w-100 h-100" style="display: flex;">
	<div class="left-right-pane-sizer">
		<div class="left-right-pane-container" style="left: 0;">
			<LeftPane></LeftPane>
		</div>
	</div>

	<main style="flex-grow: 1;">
		<slot></slot>
	</main>

	<div class="left-right-pane-sizer">
		<div class="left-right-pane-container" style="right: 0;">
			<RightPane></RightPane>
		</div>
	</div>
</div>

