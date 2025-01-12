<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/airplane.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Little plane book" />
    </div>
  </header>

  <main>
    <nav>
      <ul>
        <li>
          <a href="./">About planes</a>
        </li>
        <li>
          <a href> Aircraft types</a>
        </li>
        <li>
          <a href>Planes you travel with</a>
        </li>
      </ul>
    </nav>
    <section>
      <div></div>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    height: 80vh;
    padding-right: calc(var(--section-gap) / 2);
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 25px;
    padding: 25px;
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  main {
    border: 1px red solid;
    border-radius: 25px;
  }

  /* navbar */
  a {
    color: black;
  }
  ul {
   padding: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    background-color: aqua;
  }
}
</style>
