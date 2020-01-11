<template>
  <div class="container">
    <h1 class="title">The Mining Game</h1>
    <br>
      <button type="button" class="btn" id="special-button">
        <a href="https://github.com/tian3401/miningGame" target="_blank">Review Github Code ➜</a>
      </button>
    <br>
  <h1>Overview of the Game</h1>
    <div class="row mt-5 bg-white mb-4">
      <div
        class="col-sm-6"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/barista_creative_notes.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'left' }"
      ></div>
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p class="px-5 d-flex align-self-center">
          The game is very simplistic in nature; the program selects a random cryptocurrency and ask you to predict whether the price will go up or down in a given time frame. After you your prediction, the program will access whether your prediction is correct or incorrect. If you are able to predict correctly, you are given a miner. The miner then tries to solve a similar cryptographic puzzle that is used in mining crpytocurrency in order to mine fictious coins.
        </p>
      </div>
    </div>
    <h1>Key Insights</h1>
    <br>
    <div class="row bg-white mb-4">
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p
        class="px-5 d-flex align-self-center"
        >This project has helped me understand what exactly is a cryptographic puzzle and how it is implemented in blockchains.</p>
      </div>
      <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/SVG/neos-moyo-website.svg') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat' }"
      ></div>
    </div>
    <h1>The Challenges</h1>
    <div class="row mt-5 bg-white mb-4">
      <div
        class="col-sm-6"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/barista_creative_notes.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'left' }"
      ></div>
      <div class="col-12 col-lg-6 p-5 d-flex">
        
        <p class="px-5 d-flex align-self-center"> 
          <ul>
          <p>Some key challenges when working on this project include:</p><br>
          <li>Handling multiple asychronous calls to obtain crypto prices from CryptoCompare's application programming interface</li><br>
          <li>Understanding and implementing nonces and hashes when implementing the cryptographic puzzle</li><br>
          <li>Modularizing the codebase</li><br>
          </ul>
        </p>
      </div>
    </div>
  </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>

.row,
.page-inner > h1 {
  box-shadow: 0 2px 2px #1e1e1e9c;
  border: 1px solid rgb(233, 233, 233);
}

h1 {
  display: block;
}

.title {
  color: #08AEEA; 
  border-bottom: 2px solid #08AEEA;
}

.emphasis-text {
  font-size: 24px;
}

li {
  text-align: left;
}

p {
  margin: auto;
}

#special-button {
  background-color: #8ee4af;
  color: #05386b;
  display: block;
  margin: auto;
}
</style>