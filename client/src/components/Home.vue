<template>
  <div class="container-fluid">
    <h1>Home of Matt S. Chen</h1>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8" id="description">        
        <p id="description-text">"Unlike most developers and software engineers, I found my passion for programming at a later stage in life. Although my career path as a developer has not been a direct one, the journey that I have travelled isn't one I would trade with anyone else. This journey has shaped my approach to programming - a simple but creative style and perspective. Simply put, creating and innovating is what I love to do."</p>
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div class="row">  
      <div class="center">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <img id="profile-image" src="..//assets/SVG/profile_image.jpg" alt="profile-image">
        </div>
        <div class="col-sm-4" id="social-networks">
          <p>More About Me Here</p>
          <br>
          <a href="https://www.linkedin.com/in/matt-chen-4166802b?trk=profile-badge" ><img id="linkedin-logo" src="..//assets/SVG/LI-In-Bug.png" alt="linkedin-logo"></a>
          <a href="https://www.github.com/tian3401"><img id="github-logo" src="..//assets/SVG/GitHub_Logo.png" alt="linkedin-logo"></a>
          <a href="https://medium.com/@tian3401"><img id="medium-logo" src="..//assets/SVG/Monogram.png" alt="medium-logo"></a>
        </div>
         
      </div>    
    </div>
    <div class="home-works">
      <h2 id="featured-works">Featured Works</h2>
      <div class="row current-works">
        <div class="col-sm-9 card">
          <h1 class="card-title" style="color: black">moyo - in progress</h1>
          <div class="card-body">
            <img id="moyo-website" src="@/assets/SVG/neos-moyo-website.svg" alt="moyo website">
          </div>
        </div>
        <div class="col-sm-3">
            <button class="hashtag" type="button" disabled>#FinTech</button>
            <button class="hashtag" type="button" disabled>#Gaming</button>
            <button class="hashtag" type="button" disabled>#Coding</button>
            <button class="hashtag" type="button" disabled>#Investing</button>
            <button class="hashtag" type="button" disabled>#Amazon EC2</button>
            <button class="hashtag" type="button" disabled>#Vue</button>
            <button type="button" class="btn" id="special-button">
            <router-link to="/moyo_details">Learn More ➜</router-link>
            </button>
        </div>
      </div>
    </div>
        <div class="home-works">
      <div class="row current-works">
        <div class="col-sm-9 card">
          <h1 class="card-title" style="color: black">Mining Game - in progress</h1>
          <div class="card-body">
            <img id="mining-game" src="@/assets/img/miningGame.png" alt="miningGame-code">
          </div>
        </div>
        <div class="col-sm-3">
            <button class="hashtag" type="button" disabled>#Cryptocurrency</button>
            <button class="hashtag" type="button" disabled>#Blockchain</button>
            <button class="hashtag" type="button" disabled>#Node</button>
            <button type="button" class="btn" id="special-button">
            <router-link to="/mining-game">Learn More ➜</router-link>
            </button>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-sm-2">col-1</div>
      <div class="col-sm-8 card">
        <div class="card-body">
          <h1 class="card-title" style="color: black">Logo Design</h1>
          <img id="logo-artboards" src="@/assets/SVG/moyo-logo-variation-artboards.svg" alt="svg logo design">
        </div>
        
      </div>
      <div class="col-sm-2">col-3</div>
    </div>
    <div class="row">
      <div class="col-sm-2">col-1</div>
      <div class="col-sm-8">col-2</div>
      <div class="col-sm-2">col-3</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: bolder;
  color: rgb(3, 137, 185);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.card {
  border: none; 
}

.row { 
  height: auto;
  /* border: 3px black solid;  */
}

.col-sm-8,.col-sm-2 {
  /* border: 3px black solid;  */
  margin: 25px, 0px;
}

button {
  background-color: #379683;
  color: #edf5e1;
  padding: none;
}

img {
  width: 100%;
  height: 100%;
}

.container-fluid {
  height: 100%;
  padding: 0;
  background-image: url("..//assets/SVG/matt-home-bg-2.png");
  background-repeat: no-repeat;
  background-size: 30%;
}

#logo-artboards {
  height:75%;
  width: 75%;
}

#moyo-website {
  height:75%;
  width: 75%;
}

#special-button {
  background-color: #8ee4af;
  color: #05386b;
  display: block;
  margin: auto;
  margin-top: 10%;
}

#description {
  text-align: center;
  margin: 3% auto;
  font-size: 20px;
  
}
.home-works {
  background-color: white;
  padding: 5% 5% 0 5%;
  width: 100%;
  height: 100%;
}

.current-works {
  background-color:white; 
  padding: 5%;
  border: 2px solid rgb(231, 229, 229);
  border-radius: 20px;
}

.material-icons {
  font-size: 20px;
}

.center {
  width: 100%;
}

#profile-image {
  width: 45%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 3%;
}

#featured-works{
  background-color: white;
  color: black;
  border: 2px solid #08AEEA;
  display: inline;
  margin: auto;
  padding: 3%;
  border-radius: 10px;
}

.hashtag {
  border-radius: 10px;
  background-color: #08AEEA;
  font-weight: bold;
  margin: 1%;
}

.col-sm-4 {
  margin: 0;
  float: left;
}

#social-networks {
  text-align: left;
  padding-top: 3%;
  
}

#social-networks p {
  font-size: 14px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #8ee4af;
  display: inline;
}

#linkedin-logo {
  width: 8%;
  height: auto;
}

#github-logo {
  width: 15%;
  height: auto;
}

#medium-logo {
  width: 7%;
  height: auto;
}

#description-text {
  width: 65%;
  margin: auto;
}

#mining-game {
  width: 75%;
  height: auto;
}

.col-sm-3 {
  margin: auto;
}

button a {
  display: block;
  padding: 6px 6px;
}
</style>
