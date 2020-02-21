<script>
  import { Link } from "svelte-routing";
  export let card;
  export let type;
</script>

<li>
  <div class="rank">
    <span>{card.rank}</span>
  </div>
  <div class="image-container">
    <Link to="/{type}/{card.mal_id}">
    <img src="{card.image_url}" alt="{card.title} cover" />
    </Link>
  </div>
  <div class="card-content">
    <h3>
      <Link to="/{type}/{card.mal_id}">{card.title}</Link>
    </h3>
    <div class="stats">
      <p>
        {card.type} ({type === 'anime' ? `${card.episodes || '?'} eps` :
        `${card.volumes || '?'} vols`})
      </p>
      <p>{card.start_date} - {card.end_date || ''}</p>
      <p>{card.members.toLocaleString('en-US')} members</p>
    </div>
  </div>
  <div class="score">
    <img src="/images/star.png" alt="star" />
    <span>{card.score}</span>
  </div>
</li>

<style>
  li {
    border: 1px solid var(--blue);
    padding: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .rank {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: bold;
    width: 100px;
    color: var(--blue);
    padding: 0.5rem;
  }

  .image-container img {
    width: 100px;
    height: 140px;
    display: block;
    border: 1px solid var(--red);
  }

  .card-content {
    padding: 0 1.5rem;
    width: calc(100% - 100px - 100px - 75px);
  }

  h3 {
    margin-bottom: 1rem;
  }

  h3 :global(a:hover) {
    text-decoration: underline;
  }

  li :global(a) {
    text-decoration: none;
    color: var(--blue);
    font-weight: bold;
  }

  .stats {
    line-height: 1;
    opacity: 0.5;
    font-size: 1.2rem;
  }

  .stats p {
    margin-top: 0.5rem;
  }

  .score {
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }

  .score img {
    width: 15px;
    margin-right: 0.5rem;
  }

  .score span {
    display: block;
  }

  @media (max-width: 640px) {
    li {
      justify-content: center;
    }

    .rank {
      font-size: 2.5rem;
      width: 70px;
    }

    .card-content {
      order: 4;
      width: 100%;
      padding: 0;
      margin-top: 1.5rem;
      text-align: center;
    }

    .score {
      order: 3;
      width: 70px;
    }
  }
</style>