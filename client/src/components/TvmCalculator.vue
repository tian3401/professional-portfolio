<template>
  <div class="container">
    <h1 class="title">Time Value of Money Calculator</h1>
    <br>
      <button type="button" class="btn" id="special-button">
        <a href="https://github.com/tian3401/time-value-of-money-calculator" target="_blank">Review Github Code ➜</a>
      </button>
    <br>
  <h1>What's a TVM Calculator?</h1>
    <div class="row mt-5 bg-white mb-4">
      <div
        class="col-sm-6"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/tvmCalculator.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'top' }"
      ></div>
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p class="px-5 d-flex align-self-center">
          The Time Value of Money Calculator is a tool that helps the user calculate how much a certain amount of money will grow given a rate of growth, the number of compounding periods, and time. The calculator can also help the user determine how much a future amount of money is worth right now. 
        <br>
        <br>
          When I programmed this simple calculator, it felt quite empty and bland, so I had some fun playing with Adobe After Effects and inserted a motion graphic coffee cup. Being a coffee lover, I thought the user would appreciate a cup of joe with their finance.
        </p>
      </div>
    </div>
    <h1>Key Insights</h1>
    <br>
    <div class="row bg-white mb-4">
      <div class="col-12 mx-auto p-5 d-flex">
        <p
        class="px-5 d-flex align-self-center emphasis-text"
        >Looking back on this calculator, the biggest benefit I received was getting experience playing with the data flow of different components in Vue and passing data via props from parent to children components and emit from children to parent components.
        <br>
        </p>
      </div>
    </div>
    <h1>The Challenges</h1>
    <div class="row mt-5 bg-white mb-4">
      <div
        class="col-sm-6"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/tvmIntro.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'top' }"
      ></div>
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p class="px-5 d-flex align-self-center"> 
          The biggest challenge was passing data around in Vue, but after the first few components the process seemed quite natural. When you insert data in the calculator, the preceeding component will pass it onto the next component. 
          <br>
          <br>
          Another challenge was getting the motion graphics to render correctly as well as illustrating the coffee mug and coins. This project allowed me to tap into my creative side albeit the drawings are nothing to brag about. Nevertheless, I had a great time practicing these skills. 
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