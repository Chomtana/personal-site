<script>
  import { getContext } from "svelte"
  import EBusinessCard from "../components/EBusinessCard.svelte"
  import Chat from "../components/Chat.svelte"

  let {openModal, closeModal} = getContext('$MODAL');
</script>

<div class="d-mobile">
  <div class="floating-btn" style="bottom: 136px;" on:click={() => openModal('E-Business Card', EBusinessCard)}>
		<img src="/g/images/icons/name-64.png" width={36} height={36}>
	</div>

	<div class="floating-btn" style="bottom: 64px;" on:click={() => openModal('Chomtana Assistant', Chat)}>
		<img src="/g/images/icons/chat-64.png" width={36} height={36}>
	</div>
</div>