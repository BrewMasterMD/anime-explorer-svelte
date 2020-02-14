<script>
  import { Router, Link, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
  import ContentWrapper from "./components/ContentWrapper.svelte";
  import Anime from "./components/Anime.svelte";
  import Manga from "./components/Manga.svelte";

  export let url = '';
</script>

<Router url={url} basePath="/">
  <Nav />
  <main>
    <ContentWrapper>
      <Route path="/manga" component={Manga} />
      <Route path="/" component={Anime} />
    </ContentWrapper>
  </main>
  <Footer />
</Router>

<style>
  main {
    position: relative;
    padding: 2rem 0;
    min-height: calc(100vh - var(--footerHeight) - var(--navHeight));
  }
</style>
