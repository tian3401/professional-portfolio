<template>
  <div class="container">
    <h1>Full Portfolio</h1>
    <br>
    <div class="card">
      <h5 class="card-header">moyo</h5>
      <div class="card-body">
        <h5 class="card-title">A financial education app centered around stories and mini-games</h5>
        <p class="card-text">An app reimagining the finance experience</p>
        <button type="button" class="btn" id="special-button">
        <router-link to="/moyo_details">Learn More ➜</router-link>
        </button>
      </div>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">The mining game</h5>
      <div class="card-body">
        <h5 class="card-title">A simplified game that uses cryptocurrency prices and cryptographic puzzles to mine fictious coins</h5>
        <p class="card-text">A node program that runs in your terminal.</p>
        <button type="button" class="btn" id="special-button">
        <router-link to="/mining-game">Learn More ➜</router-link>
        </button>
      </div>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">Featured</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <router-link class="btn btn-primary" to="/moyo_details">Learn more</router-link>
      </div>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">Featured</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">See Project</a>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h1 {
  border-bottom: 2px solid #08AEEA;
  display: block;
  width: 100%;
}
#special-button {
  background-color: #8ee4af;
  color: #05386b;
  display: block;
  margin: auto;
}

</style>