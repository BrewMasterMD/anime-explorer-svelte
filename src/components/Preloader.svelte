<div class="wrapper">
  <div class="load">
    <hr />
    <hr />
    <hr />
    <hr />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    height: 400px;
    width: 400px;
    margin: 0 auto;
  }
  .load {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }
  .load hr {
    border: 0;
    margin: 0;
    width: 40%;
    height: 40%;
    position: absolute;
    border-radius: 50%;
    animation: spin 2s ease infinite;
  }

  .load :first-child {
    background: var(--blue);
    animation-delay: -1.5s;
  }
  .load :nth-child(2) {
    background: var(--red);
    animation-delay: -1s;
  }
  .load :nth-child(3) {
    background: var(--yellow);
    animation-delay: -0.5s;
  }
  .load :last-child {
    background: var(--text);
  }

  @keyframes spin {
    0%,
    100% {
      transform: translate(0);
    }
    25% {
      transform: translate(160%);
    }
    50% {
      transform: translate(160%, 160%);
    }
    75% {
      transform: translate(0, 160%);
    }
  }
</style>
