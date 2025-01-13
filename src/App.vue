<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// state (like data)
const dropdownVisible = ref(false);

/* // toggle
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
}

// computed class
const dropdownChoice = computed(() => {
  return dropdownVisible.value ? "dropdown-menu-visible" : 'dropdown-menu-hidden';
})   */
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
<!-- idea: make type of planes in a select. Wirte a json file abput different planes type and use it to display info -->
  <main>
    <nav>
      <ul>
        <li>
          <router-link to="/">About planes</router-link>
        </li>
        <li @click="toggleDropdown" class="dropdown">
          <span>Aircraft types</span>
          <ul class="dropdown-menu" :class="dropdownChoice">
            <li><router-link to="/jets">Jets</router-link></li>
            <li><router-link to="/helicopters">Helicopters</router-link></li>
            <li><router-link to="/gliders">Gliders</router-link></li>
          </ul>
          <router-link to="/aircrafts-types">Aircraft types</router-link>
        </li>
        <li>
          <router-link to="/planes-you-travel-with">Planes you travel with</router-link>
        </li>
      </ul>
    </nav>
    <section>
      <router-view />
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
