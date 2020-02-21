<script>
  import DetailsRow from './DetailsRow.svelte';

  export let anime;
</script>


<DetailsRow label="Type" text={anime.type} />
<DetailsRow label="Episodes" text={anime.episodes} />
<DetailsRow label="Status" text={anime.status} />
<DetailsRow label="Aired" text={anime.aired.string} />
<DetailsRow label="Producers">
  {anime.producers.map(item => item.name).join(', ')}
</DetailsRow>
<DetailsRow label="Licensors">
  {anime.licensors.map(item => item.name).join(', ')}
</DetailsRow>
<DetailsRow label="Studios">
  {anime.studios.map(item => item.name).join(', ')}
</DetailsRow>
<DetailsRow label="Source" text={anime.source} />
<DetailsRow label="Genres">
  {anime.genres.map(item => item.name).join(', ')}
</DetailsRow>
<DetailsRow label="Duration" text={anime.duration} />
<DetailsRow label="Rating" text={anime.rating} />


<style>

</style>