<template>
  <div id="main-nav">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/full-portfolio">
        Full Portfolio
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/resume">Resume</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/contact-me">Contact me</router-link>
      </li>      -->
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

#main-nav {
  color: #05386b;
  padding: 2%;
  font-size: 18px;
}

a {
  color: #05386b
}

.router-link-exact-active {
  background-color: #08AEEA;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
}



</style>