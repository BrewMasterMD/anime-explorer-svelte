<script>
  import { Link } from "svelte-routing";
  import ContentWrapper from "./ContentWrapper.svelte";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<header>
  <nav>
    <ContentWrapper>
      <ul>
        <li><Link to="/" getProps={getProps}>anime</Link></li>
        <li><Link to="manga" getProps={getProps}>manga</Link></li>
      </ul>
    </ContentWrapper>
  </nav>
</header>

<style>
  nav {
    font-weight: 300;
    background-color: var(--blue);
    color: var(--bg);
    height: var(--navHeight);
  }

  ul {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  li {
    position: relative;
    display: block;
    height: 100%;
    float: left;
  }

  nav :global(.active::after) {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--red);
    display: block;
    bottom: 0;
  }

  nav :global(a) {
    text-decoration: none;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
  }
</style>
