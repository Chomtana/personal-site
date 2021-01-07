<script>
	import LeftPane from '../components/LeftPane.svelte';
	import Nav from '../components/Nav.svelte';
	import RightPane from '../components/RightPane.svelte';

	import Modal from '../components/Modal.svelte'

	export let segment;
</script>

<style>
	main {
		position: relative;
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
		border-left: 1px solid var(--primary-dark);
		border-right: 1px solid var(--primary-dark);
		height: 100%;
		z-index: 100;
	}
</style>

<Modal>
	<div class="w-100 h-100" style="display: flex;">
		<div class="left-right-pane-sizer d-tablet">
			<div class="left-right-pane-container" style="left: 0;">
				<LeftPane></LeftPane>
			</div>
		</div>
	
		<main style="flex-grow: 1;">
			<slot></slot>
		</main>
	
		<div class="left-right-pane-sizer d-com">
			<div class="left-right-pane-container" style="right: 0;">
				<RightPane></RightPane>
			</div>
		</div>
	</div>
</Modal>
