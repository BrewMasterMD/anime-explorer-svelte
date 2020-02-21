<script>
  export let label;
  export let text;
</script>

<div>
  {#if (label)}
    <span>{label}: </span>
  {/if}
  <slot>{text || ''}</slot>
</div>

<style>
  div {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    white-space: pre-wrap;
  }
  span {
    font-weight: bold;
    opacity: 0.5;
  }
  div :global(a:hover) {
    text-decoration: underline;
  }

  div :global(a) {
    text-decoration: none;
    color: var(--blue);
    font-weight: bold;
  }
</style>