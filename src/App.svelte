<script>
  import { Router, Link, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
  import ContentWrapper from "./components/ContentWrapper.svelte";
  import Top from "./components/Top.svelte";

  export let url = '';
</script>

<Router url={url}>
  <Nav />
  <main>
    <ContentWrapper>
      <Route path="/manga"><Top type="manga" /></Route>
      <Route path="/"><Top type="anime" /></Route>
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
