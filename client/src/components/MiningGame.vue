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
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/minerInquirer.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'top' }"
      ></div>
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p class="px-5 d-flex align-self-center">
          This underlying goal of the game is to accurately predict the direction of a given cryptocurrency asset. With every successful prediction, the player is given an additional miner, who mines coins the same way miners mine a blockchain. Currently the game is very basic, but I am constantly working to update features and improve the user experience. I eventually want to bring this onto a mobile platform with a nice graphic user interface. 
        </p>
      </div>
    </div>
    <h1>Key Insights</h1>
    <br>
    <div class="row bg-white mb-4">
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p
        class="px-5 d-flex align-self-center"
        >Working on this game has helped me to solidify my understanding of the cryptographic puzzle that is used in blockchain technology. I realized that the cryptographic puzzle is a game of chance, where having more processing power helps your odds, but does not guaranteed you will be choosen to add to the blockchain. 
        <br>
        <br>
        Additionally, blockchain heavily uses hashes throughout its implementation, because of its attractive features of immutability and deterministic nature. Overall, I've enjoyed using the same technologies that blockchain uses and have come away with appreciation of the future applications of such a technology.</p>
      </div>
      <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/hashCalculations.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'top' }"
      ></div>
    </div>
    <h1>The Challenges</h1>
    <div class="row mt-5 bg-white mb-4">
      <div
        class="col-sm-6"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/miningCoins.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'bottom' }"
      ></div>
      <div class="col-12 col-lg-6 p-5 d-flex">
        
        <p class="px-5 d-flex align-self-center"> 
          <ul>
          <p>Some key challenges:</p><br>
          <li>Handling multiple asychronous calls triggered at different times to obtain crypto prices from CryptoCompare's application programming interface</li><br>
          <li>Understanding and implementing nonces and hashes when implementing the cryptographic puzzle</li><br>
          <li>Modularizing the codebase in a meaningful way</li><br>
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