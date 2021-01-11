<script>
  export let data = {
    fullName: "",
    email: "",
    mobileNumber: "",
    purpose: "",
    message: "",
  }

  async function doSubmit() {
    if (!data.fullName || !data.purpose) {
      alert("You must enter your full name and purpose.");
      return;
    }

    if (!confirm("Confirm sending your E-Business Card?")) return;

    console.log(data)

    try {
      await window.db.collection("e-business-card").add(data);
      alert("Send your E-Business Card successfully.")
    } catch (err) {
      console.error(err)
      alert("E-Business Card sending failed! Please contact chomtana@chom.dev for more information.")
    }
  }
</script>

<style>
  .e-business-send-btn {
    width: 100%;
  }

  .send-or-view {
    margin-bottom: 8px;
  }
</style>

<div>
  <h2>E-Business Card</h2>

  <!-- <div class="send-or-view">SEND or <a href="javascript:;">VIEW MY CARD</a></div> -->

  <div class="form-group">
    <input class="form-control" placeholder="Full name" bind:value={data.fullName}>
  </div>

  <div class="form-group">
    <input class="form-control" placeholder="Email (Optional)" bind:value={data.email}>
  </div>

  <div class="form-group">
    <input class="form-control" placeholder="Mobile number (Optional)" bind:value={data.mobileNumber}>
  </div>

  <div class="form-group">
    <select class="form-control" bind:value={data.purpose}>
      <option selected disabled hidden>* Choose your purpose...</option>
      <option value="hire">Want to hire me</option>
      <option value="find-job">Looking for job</option>
      <option value="partner">Want to become a partner</option>
      <option value="advertise">Advertise your company</option>
      <option value="sell">Want to sell your product</option>
      <option value="hello">Just want to say hello</option>
    </select>
  </div>

  <div class="form-group">
    <div class="label">Your message</div>

    <textarea class="textarea-control" placeholder="Type your message..." bind:value={data.message}></textarea>

    <div>* You may also leave more contacts in message box.</div>
  </div>

  <button class="btn btn-primary e-business-send-btn" on:click={() => doSubmit()}>Send</button>
</div>