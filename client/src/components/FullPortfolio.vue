<template>
  <div class="container">
    <h1>Full Portfolio</h1>
    <br>
    <div class="card">
      <h5 class="card-header">moyo</h5>
      <div class="row">
        <div class="col-sm-6">
          <img src="@/assets/SVG/neos-moyo-website.svg" class="card-img-top">
        </div>
        <div class="col-sm-6">
          <div class="card-body">
          </div>
          <h5 class="card-title">A financial education app centered around stories and mini-games</h5>
          <p class="card-text">An app reimagining the finance experience</p>
          <button type="button" class="btn" id="special-button">
          <router-link to="/moyo_details">Learn More ➜</router-link>
          </button>
        </div>
      </div>
      <br>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">The Mining Game</h5>
      <div class="row">
        <div class="col-sm-6">
          <img src="..//assets/img/miningGame.png" class="card-img-top">
        </div>
        <div class="col-sm-6">
          <div class="card-body">
          </div>
          <h5 class="card-title">A simplified game that uses cryptocurrency prices and cryptographic puzzles to mine fictious coins</h5>
          <p class="card-text">A node program that runs in your terminal.</p>
          <button type="button" class="btn" id="special-button">
          <router-link to="/mining-game">Learn More ➜</router-link>
          </button>
        </div>
      </div>
      <br>
    </div>
    <br>
        <div class="card">
      <h5 class="card-header">Time Value of Money Calculator</h5>
      <div class="row">
        <div class="col-sm-6">
          <img src="..//assets/img/tvmCalculator.png" class="card-img-top">
        </div>
        <div class="col-sm-6">
          <div class="card-body">
          </div>
          <h5 class="card-title">A calculator that helps you calculate how much money will be worth at a certain point in time.</h5>
          <p class="card-text">This is done in Vue.js</p>
          <button type="button" class="btn" id="special-button">
          <router-link to="/tvm-calculator">Learn More ➜</router-link>
          </button>
        </div>
      </div>
      <br>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">Developer Flash Cards</h5>
      <div class="row">
        <!-- <div class="col-sm-6">
          <img src="..//assets/SVG/profile_image.jpg" class="card-img-top">
        </div> -->
        <div class="col-sm-6">
          <div class="card-body">
          </div>
          <h5 class="card-title">This was a project I did in collaboration with some fellow developers during my time at UC Berkeley's fullstack course.</h5>
          <p class="card-text">This project uses EJS templating and a mySQL database.</p>
          <button type="button" class="btn" id="special-button">
            <a href="https://github.com/lawrenceslng/Web-Dev-Cards" target="_blank">Review Github Code ➜</a>
          </button>
        </div>
      </div>
      <br>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">Matty Blockchain</h5>
      <div class="row">
        <!-- <div class="col-sm-6">
          <img src="..//assets/SVG/profile_image.jpg" class="card-img-top">
        </div> -->
        <div class="col-sm-6">
          <div class="card-body">
          </div>
          <h5 class="card-title">An implementation of a simple blockchain</h5>
          <p class="card-text">Implemented using only Python</p>
          <button type="button" class="btn" id="special-button">
            <a href="https://github.com/tian3401/matty-blockchain" target="_blank">Review Github Code ➜</a>
          </button>
        </div>
      </div>
      <br>
    </div>
    <br>
    <div class="card">
      <h5 class="card-header">A fun Spy Game</h5>
      <div class="row">
        <!-- <div class="col-sm-6">
          <img src="..//assets/SVG/profile_image.jpg" class="card-img-top">
        </div> -->
        <div class="col-sm-6">
          <div class="card-body">
          </div>
          <h5 class="card-title">This is a terminal console game where the user has to break the code to advance levels.</h5>
          <p class="card-text">Implemented in C++</p>
          <button type="button" class="btn" id="special-button">
            <a href="https://github.com/tian3401/mySpy_Game" target="_blank">Review Github Code ➜</a>
          </button>
        </div>
      </div>
      <br>
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

.card-img-top {
  width: 40%;
  height: auto;
  margin: auto;
  margin-top: 3%;
}

.col-sm-6 {
  margin: auto;
}

</style>