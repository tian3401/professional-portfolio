<template>
  <div>
    <h1>The Mining Game</h1>
    <h2> Overview of the Game</h2>
    <p>The game is very simplistic in nature; the program selects a random cryptocurrency and ask you to predict whether the price will go up or down in a given time frame. After you your prediction, the program will access whether your prediction is correct or incorrect. If you are able to predict correctly, you are given a miner. The miner then tries to solve a similar cryptographic puzzle that is used in mining crpytocurrency in order to mine fictious coins.</p>
    <h2>Key Insights</h2>
    <p>This project has helped me understand what exactly is a cryptographic puzzle and how it is implemented in blockchains.</p>
    <h2>The Challenges</h2>
    <ul>Some key challenges when working on this project include: 
      <li>Handling multiple asychronous calls to obtain crypto prices from CryptoCompare's application programming interface</li> 
      <li>Understanding and implementing nonces and hashes when implementing the cryptographic puzzle</li>
      <li>Modularizing the codebase</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>