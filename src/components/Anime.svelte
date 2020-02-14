<script>
  import { getData } from '../helpers/getData';
  import Preloader from './Preloader.svelte';

  getData()
    .then(result => {
      console.log('TCL: data');
      console.log(result);
      animeData = result;
      isLoading = false;
    })
  let animeData = [];
  let isLoading = true;
</script>

<svelte:head>
  <title>Anime Explorer - Anime</title>
</svelte:head>

<h1>Anime</h1>

{#if isLoading}
  <Preloader />
{:else}
  <ul>
    {#each animeData as anime (anime.mal_id)}
      <li>{anime.title}</li>
    {/each}
  </ul>
{/if}
