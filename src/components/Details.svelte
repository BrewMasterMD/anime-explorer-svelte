<script>
  import { onMount, afterUpdate } from 'svelte';
  import { Link } from "svelte-routing";
  import { getDetails } from '../helpers/getData';
  import Preloader from './Preloader.svelte';
  import { animes } from '../stores/animes.js';
  import { mangas } from '../stores/mangas.js';
  import DetailsRow from './DetailsRow.svelte';
  import Review from './Review.svelte';
  import AnimeDetails from './AnimeDetails.svelte';
  import MangaDetails from './MangaDetails.svelte';

  export let type;
  export let id;

  const storesMap = {
    anime: animes,
    manga: mangas,
  };

  let isLoading = true;

  function getData(type, mal_id) {
    isLoading = true;
    getDetails(type, mal_id)
      .then(result => {
        topData.update(state => ({
          ...state,
          details: {
            ...state.details,
            [mal_id]: result,
          },
        }));
        isLoading = false;
      });
  }

  const topData = storesMap[type];
  $: currentData = $topData.details[id];

  afterUpdate(() => {
    if (!currentData) {
      getData(type, id);
    } else {
      isLoading = false;
    }
  });
</script>

<svelte:head>
  <title>{type.toUpperCase()} {currentData && currentData.title ? `- ${currentData.title}` : ''}</title>
</svelte:head>

{#if isLoading}
  <Preloader />
{:else if currentData}
  <h2>{currentData.title}</h2>
  <div class="details">
    <div class="left">
      <img src={currentData.image_url} alt="{currentData.title} poster" class="poster">

      <h5 class="heading">Alternative Titles</h5>
      <DetailsRow label="English" text={currentData.title_english} />
      <DetailsRow label="Japanese" text={currentData.title_japanese} />
      <DetailsRow label="Synonyms">
        {currentData.title_synonyms.join(', ')}
      </DetailsRow>

      <h5 class="heading">Information</h5>
      {#if type === 'anime'}
        <AnimeDetails anime={currentData} />
      {:else if type === 'manga'}
        <MangaDetails manga={currentData} />
      {/if}

      <h5 class="heading">Statistics</h5>
      <DetailsRow label="Score" text={currentData.score} />
      <DetailsRow label="Ranked" text="#{currentData.rank}" />
      <DetailsRow label="Popularity" text="#{currentData.popularity}" />
      <DetailsRow label="Members" text={currentData.members.toLocaleString('en-US')} />
      <DetailsRow label="Favorites" text={currentData.favorites.toLocaleString('en-US')} />
    </div>
    <div class="right">
      <h5 class="heading">Synopsis</h5>
      <DetailsRow>
        {@html (currentData.synopsis || '').replace(/\\n/g, '').split('\r').join('<br>') } 
      </DetailsRow>

      <h5 class="heading">Background</h5>
      <DetailsRow>
        {@html (currentData.background || '').replace(/\\n/g, '').split('\r').join('<br>') } 
      </DetailsRow>

      <h5 class="heading">Related Anime</h5>
      {#each Object.keys(currentData.related) as key}
        <DetailsRow label={key}>
          {#each currentData.related[key] as item, i}
            <Link to="/{item.type}/{item.mal_id}">{item.name}</Link>{i === currentData.related[key].length - 1 ? '': ', '}
          {/each}
        </DetailsRow>
      {/each}
      <h5 class="heading">Reviews</h5>
      <div>
        {#each currentData.reviews as review}
          <Review {review} seriesLength={type === 'anime' ? currentData.episodes : currentData.chapters} {type} />
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  h2 {
    margin-bottom: 2rem;
  }
  .details :global(h5) {
    font-weight: bold;
    margin-top: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--blue);
  }
  .details :global(h5:first-child) {
    margin-top: 0;
  }
  .details {
    border: 1px solid var(--blue);
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-wrap: wrap;
  }
  .left {
    width: 220px;
    position: relative;
  }
  .poster {
    width: 100%;
    border: 1px solid var(--red);
  }
  .right {
    margin-left: 1.5rem;
    width: calc(100% - 220px - 1.5rem);
  }
  @media (max-width: 640px) {
    .left, .right {
      width: 100%;
    }
    .right {
      margin-left: 0;
    }
    .poster {
      max-width: 100%;
      width: auto;
      display: block;
      margin: 0 auto;
    }
  }
</style>