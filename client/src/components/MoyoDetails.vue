<template>
  <div class="container">
    <h1 class="title">moyo</h1>
    <br>
    <button type="button" class="btn" id="special-button">
    <a href="https://themoyoproject.com" target="_blank">Visit Official Website ➜</a>
    </button>
    <div class="row mt-5 bg-white mb-4">
      <div
        class="col-sm-6"
        :style="{'min-height': '500px','background-image': 'url(\'' + require('@/assets/img/moyoAvatarsImg.png') + '\')', 'background-size': 'initial', 'background-repeat': 'no-repeat', 'background-position': 'center'}"
      ></div>
      <div class="col-12 col-sm-6 p-5 d-flex">
        <p class="px-5 d-flex align-self-center">
          My involvement with moyo is what lead me to programming. It's been at the center of my life and career for the past few years now and I am so grateful that I've been able to work on such a ambitious and fun project with other great people. I've grown a lot as a developer on this project.
          <br>
          <br>
          The motivation behind moyo is to reimagine the financial experience for the vast majority of us. Using stories and gameplay, moyo presents finance in a simplified and relatable way. This approach leverages the intrigue of a story in explaining financial and money concepts such as time value of money and compound interest and the challenge of games to help the normal person gain exposure to investing, budgetting, and other healthy financial habits. 
        </p>
      </div>
    </div>
    <div class="row bg-white mb-4">
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p
          class="px-5 d-flex align-self-center"
        >To help with the stories and games, moyo utilizes avatars. These characters are meant to help to recharacterize finance as a whole, making the subject matter more approachable and less intimidating for the user. Each avatar has his or her own story, allowing a deeper connection with users.</p>
      </div>
      <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/having_coffee.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat' }"
      ></div>
    </div>
    <div class="row bg-white mb-4">
      <div class="col-12 mx-auto p-5 d-flex">
        <p
          class="px-5 d-flex align-self-center emphasis-text"
        > In my opinion, finance is a part of everyone's life and impact the decisions we make. I wanted to create and design moyo in a very specific way that helps introduce finance and money to the average person.</p>
      </div>
    </div>
    <div class="row bg-white mb-4">
      <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/technology.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center' }"
      ></div>
      <div class="col-12 col-sm-6 p-5 d-flex">
        <h1 class="p-5 d-flex align-self-center">
          Web Development and System Architecture
        </h1>
      </div>
    </div>

    <div class="row bg-white mb-4">
      <div class="col-12 col-lg-6 p-5 d-flex">
        <p class="px-5 d-flex align-self-center">
          While working on such a big project, exposure to both frontend and backend development was inevitable. Because I started this project on my own, I've had to do a lot of the initial programming myself. This included setting up the website as well as designing and implementing the system architecture on my own. Scalability is still an aspect of developement I am still working to improve, but I'm improving everyday. 
          <br>
          <br>
          To give a little more detail on the the system architecture, the website is hosted on dedicated web servers and uses AWS to service its backend, where a cluster of instances are deployed for redundancy. An elastic load balancer is used for load management. The data layer encorporates a noSQL database and third party APIs.
        </p>
      </div>
      <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/systemArchitecture.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'right' }"
      ></div>
    </div>
    <div class="row bg-white mb-4 pt-5 p-lg-0">
        <h1 class="p-5 d-flex align-self-center">Designing the App</h1>
    </div>
    <div class="row bg-white mb-4">
      <div class="col-12 col-lg-6 p-5 d-flex">
          <p class="px-5 d-flex align-self-center">
            The mobile platform seemed to be the most intuitive for what the projected sought to accomplish, an insight that contributing members have helped me realize. You can deduce that this revelation meant I needed to understand the basics of UI and UX. Luckily, I haven't had to tackle this on my own. 
          <br>
          <br>
            The user interface is inspired by Twitter in regards to the social aspects of the app, but the app navigation is similar to that of Headspace's.The app enables users to explore the world of finance together through interesting stories on their feed and co-op gameplay of the mini-games in the sandbox section. 
        </p>
      </div>
      <div class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0">
      <img src="@/assets/img/loginScreenApp.png" alt="">
      </div>
    </div>
    <div class="row bg-white mb-4">
      <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0"
        :style="{ 'min-height': '400px', 'background-image': 'url(\'' + require('@/assets/img/appUserScreen.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'bottom center' }"
      ></div>
      <h1 class="p-5 d-flex align-self-center">App Development</h1>
    </div>
      <br>
      <div class="row bg-white mb-4">
      <div class="col-12 col-lg-6 p-5 d-flex">
          <p class="px-5 d-flex align-self-center">
            The team and I have selected React Native as the language of choice. The benefits of being able to deploy on both Android and iOS outweigh the potential benefits of programming for a specific operating system. 
          <br>
          <br>
            The app is geared towards a Millennial audience, but can be used by anyone. There is still quite a bit of work still to be done before the app is released, but it will be worth it. 
        </p>
      </div>
        <div
        class="col-9 mx-auto mb-5 mb-lg-0 col-lg-6 p-0 py-5"
        :style="{ 'min-height': '600px', 'background-image': 'url(\'' + require('@/assets/img/millennials.png') + '\')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'bottom' }"
      ></div>
    </div>

   <!-- <div class="row bg-white mb-4">
      <div class="col-12 mx-auto p-5 d-flex">
          <p class="px-5 d-flex align-self-center">
          
        </p>
          <p class="p-5 d-flex align-self-center">
          
        </p>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.row,
.page-inner > h1 {
  box-shadow: 0 2px 2px #1e1e1e9c;
  border: 1px solid rgb(233, 233, 233);
}
.page-inner .row {
  min-height: 60vh;
}

h1 {
  display: block;
  margin: auto;
}

.title {
  color: #08AEEA; 
  border-bottom: 2px solid #08AEEA;
}

.emphasis-text {
  font-size: 24px;
}

#special-button {
  background-color: #8ee4af;
  color: #05386b;
  display: block;
  margin: auto;
}

img {
  width: 60%;
  height: auto;
  margin: auto;
}
</style>