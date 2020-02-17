<script>
  import { onMount } from 'svelte';
  import { getTopData } from '../helpers/getData';
  import Preloader from './Preloader.svelte';
  import Card from './Card.svelte';
  import { animes } from '../stores/animes.js';
  import { mangas } from '../stores/mangas.js';

  export let type;

  const storesMap = {
    anime: animes,
    manga: mangas,
  };

  function getData(type, page) {
    buttonIsDisabled = true;
    getTopData(type, page)
      .then(result => {
        topData.update(state => ({
          ...state,
          list: state.list.concat(result)
        }));
        isLoading = false;
        reachedLastPage = result.length !== 50;
        buttonIsDisabled = false;
      });
  }

  const topData = storesMap[type];
  $: topDataList = $topData.list;

  let isLoading = true;
  $: nextPage = Math.floor(topDataList.length / 50) + 1;
  let reachedLastPage = false;
  let buttonIsDisabled = false;

  onMount(() => {
    if (!topDataList.length) {
      getData(type);
    } else {
      isLoading = false;
    }
  });
</script>

<svelte:head>
  <title>Anime Explorer - {type.toUpperCase()}</title>
</svelte:head>

<h1>Top {type}</h1>

{#if isLoading && !topDataList.length}
  <Preloader />
{:else}
  <ul>
    {#each topDataList as item (`${item.mal_id}${item.rank}`)}
      <Card card={item} {type} />
    {/each}
  </ul>
{/if}
<div class="button-container">
  {#if !isLoading && !reachedLastPage}
    <button type="button" on:click={() => getData(type, nextPage)} disabled={buttonIsDisabled}>Load more!</button>
  {/if}
</div>

<style>
  h1 {
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
  ul {
    list-style-type: none;
    margin: 0 0 2rem;
    padding: 0;
  }
  .button-container {
    text-align: center;
  }
  button {
    color: var(--bg);
    background-color: var(--blue);
    border: none;
    cursor: pointer;
    padding: 1rem 2.5rem;
    transition: 100ms linear;
  }
  button:hover {
    color: var(--yellow);
    opacity: 0.9;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>