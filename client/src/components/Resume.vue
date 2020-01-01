<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="title">Resume</h1>
        <p> <i class="material-icons">email</i> matt.chen3401@yahoo.com</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Work Experience</h2>
        <br>
        <h3 class="work-experience-header">Cofounder & Developer </h3>
        <h4 class="work-experience-sub"> | The moyo Project</h4>
        <h4 class="date">2017 – PRESENT</h4>
        <br>
        <br>
        <ul>
          <li>
              Currently, designing and developing the project’s flagship product called the Sandbox—a socially integrated, gamified virtual assets trading platform. The purpose of the Sandbox is to provide a safe environment for users to get experience and exposure to the financial markets. 
          </li>
          <br>
          <li>
              Designed and implemented the company’s system architecture, which utilizes an elastic load balancer to distribute traffic to AWS ec2 instances in the business logic layer while utilizing NoSQL MongoDB Atlas cloud-based databases and financial APIs in its data access layer.
          </li>
          <br>
          <li>
            The project uses a MongoDB, Express, Vue, Node technology stack for the web platform. 
          </li>
          <br>
        </ul>
        <h3 class="work-experience-header">Delivery Manager </h3>
        <h4 class="work-experience-sub"> | Organic Inc.</h4>
        <h4 class="date">2015 - 2016</h4>
        <br>
        <br>
        <ul>
          <li>
              Managed $10MM+ of Digital Advertising budget for Fortune 500 companies including Wells Fargo’s Digital Re-architecture, Foster Farms’ Social Media Branding, and Quaker Oats Company Branding Campaigns. All campaigns incorporated the SCRUM methodology. 
          </li>
          <br>
          <li>
              Worked with Wells Fargo’s management team in leading the execution and delivery of Wells Fargo’s “Small is Huge” campaign, an initiative of Wells Fargo to highlight small businesses impact on their respective communities.
          </li>
          <br>
        </ul>
          <h3 class="work-experience-header">Lead Project Manager </h3>
        <h4 class="work-experience-sub"> | Samsung Telecommunication America</h4>
        <h4 class="date">2012 – 2014</h4>
        <br>
        <br>
        <ul>
          <li>
              Led the Minnesota based team that deployed over 800 cellular sites for Sprint’s 4G network upgrade. Our team provided engineering network design, deployment and testing services.
          </li>
          <br>
          <li>
              Worked hand in hand with both Seoul and US based high level management teams to manage a $100MM budget, and directly managed $20MM in project services budget.
          </li>
          <br>
          <li>
              Saved Sprint, $2.34MM in tower contracts through operation efficiency and management.
          </li>
          <br>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Education</h2>
        <br>
        <h3 class="work-experience-header">Full Stack Coding Bootcamp </h3>
        <h4 class="work-experience-sub"> | UC Berkeley</h4>
        <h4 class="date">2018</h4>
        <br>
        <br>
         <h3 class="work-experience-header">B.S. Business Administration  </h3>
        <h4 class="work-experience-sub"> | USC Marshall</h4>
        <h4 class="date">2009 – 2011</h4>
        <br>
      </div>
    </div>
    <br>
    <h2>Skills, Credentials, and Awards</h2>
    <div class="row">
      <div class="col sca">
        <br>
        <h3 class="work-experience-header">Skills </h3>
        <br>
        <br>
        <ul>
          <li>
            <b> Front End: </b> JavaScript, Vue.js
          </li>
          <li>
            <b> Back End: </b> Node.js, C++, Amazon Web Services</li>
          <li>
            <b> Database: </b> MongoDB, MySQL</li>
          <br>
        </ul>
        </div>
        <div class="col sca">
          <br>
          <h3 class="work-experience-header">Credentials </h3>
        <br>
        <br>
        <ul>
          <li>
            <b> CFA Level 1: </b> Passed
          </li>
          <li>
            <b> CFA Level 2: </b> Candidate 2020</li>
          <li>
            <b> CFI FMVA Certification: </b>  In Progress</li>
          <br>
        </ul>
        </div>
         <div class="col sca">
           <br>
          <h3 class="work-experience-header">Awards </h3>
        <br>
        <br>
        <ul>
          <li>
            <b> Samsung: </b> 2013 Samsung Excellency Award
          </li>
          <br>
        </ul>
         </div>
    
      </div>
    </div>
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

h2 {
  font-weight: bold;
}

.work-experience-sub {
  display: inline;
  font-size: 25px;
  float: left;
}

.work-experience-header {
  color: #08AEEA;
  display: inline;
  float: left;
  margin-right: 1%;
}

li {
  text-align: left;
  font-size: 18px;
}

.date {
  text-align: right;
  font-size: 22px;
  float: right;
}

.col {
  padding-left: 55px;
  padding-right: 55px;
}

.sca {
  padding-right: 5px;
}

.title {
  color: #08AEEA; 
}

div i {
  margin-top: 1%;
}

</style>