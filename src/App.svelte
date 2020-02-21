<script>
  import { Router, Link, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
  import ContentWrapper from "./components/ContentWrapper.svelte";
  import Top from "./components/Top.svelte";
  import Details from "./components/Details.svelte";

  export let url = '';
</script>

<Router url={url}>
  <Nav />
  <main>
    <ContentWrapper>
      <Route path="/manga/:id" let:params>
        <Details type="manga" id={params.id} />
      </Route>
      <Route path="/anime/:id" let:params>
        <Details type="anime" id={params.id} />
      </Route>
      <Route path="/manga">
        <Top type="manga" />
      </Route>
      <Route path="/anime">
        <Top type="anime" />
      </Route>
      <Route path="/">
        <Top type="anime" />
      </Route>
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