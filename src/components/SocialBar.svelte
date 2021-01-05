<script>
  export let size = 30;

  let sizeStyle = `width: ${size}px; height: ${size}px;`
</script>

<style>
  .social-container {
    display: flex;
    justify-content: space-around;
  }

  .social-button :global(*) {
    width: inherit; 
    height: inherit;
  }
</style>

<div class="social-container">
  <a href="https://github.com/Chomtana" target="_blank" class="social-button" style={`${sizeStyle}`}>
    <img src="/g/images/social_logo/github-64.png" alt="Github" width={size} height={size} />
  </a>

  <a href="https://www.kaggle.com/chomtana" target="_blank" class="social-button" style={`${sizeStyle}`}>
    <img src="/g/images/social_logo/kaggle-64.png" alt="Kaggle" width={size} height={size} />
  </a>

  <a href="https://www.facebook.com/chomtana.chanjaratvichai" target="_blank" class="social-button" style={`${sizeStyle}`}>
    <img src="/g/images/social_logo/facebook-64.png" alt="Facebook" width={size} height={size} />
  </a>

  <a href="https://line.me/ti/p/b3c6Qx0H1K" target="_blank" class="social-button" style={`${sizeStyle}`}>
    <img src="/g/images/social_logo/line-64.png" alt="Line" width={size} height={size} />
  </a>

  <a href="mailto:chomtana@chom.dev" target="_blank" class="social-button" style={`${sizeStyle}`}>
    <img src="/g/images/social_logo/gmail-64.png" alt="Gmail" width={size} height={size} />
  </a>

  <a href="https://www.facebook.com/chomtana.chanjaratvichai" target="_blank" class="social-button" style={`${sizeStyle}`}>
    <img src="/g/images/social_logo/linkedin-64.png" alt="LinkedIn" width={size} height={size} />
  </a>
</div>