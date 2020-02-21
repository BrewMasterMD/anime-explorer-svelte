<script>
  import DetailsRow from './DetailsRow.svelte';

  export let manga;
</script>


<DetailsRow label="Type" text={manga.type} />
<DetailsRow label="Volumes" text={manga.volumes || 'Unknown' } />
<DetailsRow label="Chapters" text={manga.chapters || 'Unknown' } />
<DetailsRow label="Status" text={manga.status} />
<DetailsRow label="Published" text={manga.published.string} />
<DetailsRow label="Genres">
  {manga.genres.map(item => item.name).join(', ')}
</DetailsRow>
<DetailsRow label="Authors">
  {manga.authors.map(item => item.name).join(', ')}
</DetailsRow>
<DetailsRow label="Serialization">
  {manga.serializations.map(item => item.name).join(', ')}
</DetailsRow>


<style>

</style>