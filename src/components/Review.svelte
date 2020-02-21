<script>
  export let review;
  export let seriesLength;
  export let type;
  let { content, date, helpful_count, reviewer } = review;
  content = content.replace(/\\n/g, '');
</script>

<div class="review">
  <div class="header">
    <img src={reviewer.image_url} alt="{reviewer.image_url} profile image">
    <div class="left">
      <p class="username">{reviewer.username}</p>
      <p>{helpful_count} people found this review helpful</p>
    </div>
    <div class="right">
      <p>{new Date(date).toLocaleDateString('en-US')}</p>
      <p>{type === 'anime' ? reviewer.episodes_seen : reviewer.chapters_read} of {seriesLength || '?'} {type === 'anime'
        ?
        'episodes seen' : 'chapters read'}</p>
      <p>Overal rating: {reviewer.scores.overall}</p>
    </div>
  </div>
  <div class="content">
    {@html content.split('\r').join('<br>')}
  </div>
</div>

<style>
  .review {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--blue);
  }

  .review:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .username {
    font-weight: bold;
  }

  img {
    border: 1px solid var(--red);
    width: 75px;
    margin-right: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  .right {
    text-align: right;
    margin-left: auto;
  }

  .content {
    white-space: pre-wrap;
  }

  @media (max-width: 480px) {
    .header {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .left {
      width: 100%;
    }

    .right {
      width: 100%;
      text-align: left;
    }
  }
</style>