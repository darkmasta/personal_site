<template>
<div>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>


<div class="wrapper">
<nav class="sidebar">
<div class="flex">
    <ul class="list-unstyled menu-elements">
        <li id="home-tab" @click="home=true; about=false; resume= false;"> 
            <a class="scroll-link" href="#top-content">HOME</a>
        </li>
        <li id="about-tab" @click="about = true; home = false; resume = false;">
            <a class="scroll-link" href="#section-1">ABOUT</a>
        </li>
        <li id="resume-tab" @click="resume= true; home = false; about=false;">
            <a class="scroll-link" href="#section-2">RESUME</a>
        </li>
        <li id="portfolio-tab">
            <a class="scroll-link" href="#section-5">PORTFOLIO</a>
        </li>
        <li id="contact-tab">
            <a class="scroll-link" href="#section-6">CONTACT</a>
        </li>
        
    </ul>
</div>
</nav>
</div>


<div id='title' v-if="home">
  <span>
      EREN BAGCI
  </span>
  <br>
  <span>
      JS DEVELOPER
  </span>
</div>

<section v-if="about">
   <div class="box">
       <div class="about-me-text">
        I am a JS developer who currently lives in Denizli. I have worked for several start-ups as game developer, web developer.
        </div>
        <div class="about-me-text">
        Currently working in a US based startup as NodeJS developer.

        <div class="mi-skills">
            <div class="row mt-30-reverse">
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">HTML5</h6>
                        <div class="mi-progress-inner">

                        <div class="mi-progress-percentage">95%</div>
                        <div class="mi-progress-container">
                            <span class="mi-progress-active" style="width: 95%;"></span>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">CSS3</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">90%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 90%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">Javascript</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">90%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 90%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">NodeJS</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">95%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 95%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">ReactJS</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">80%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 80%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">VueJS</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">95%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 95%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">PHP</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">55%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 55%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30">
                    <div class="mi-progress">
                        <h6 class="mi-progress-title">Ruby/RoR</h6>
                        <div class="mi-progress-inner">
                            <div class="mi-progress-percentage">65%</div>
                            <div class="mi-progress-container">
                                <span class="mi-progress-active" style="width: 65%;"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30 github-link">
                  <a class="mi-button" href="/files/empty.pdf">More On Github</a>
                </div>
            </div>
        </div>

       </div>
   </div> 
</section>

<section v-if="resume">
<div class="box">
  <div class="title-wrapper">
  <div class="mi-smalltitle">
    <span class="mi-smalltitle-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
    <h4>Working Experience</h4>
  </div>
  </div>
  <div class="mi-resume-wrapper">
    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2018 - Present</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Frontend Web Developer</h5>
        <h6 class="mi-resume-company">Abc Company</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
      </div>
    </div>
        
    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2016 - 2018</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Frontend Web Developer</h5>
        <h6 class="mi-resume-company">CBA Company</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
      </div>
    </div>
          
    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2014 - 1016</h6>
      </div>
      <div class="mi-resume-details">
        <h5>UI/UX Designer</h5>
        <h6 class="mi-resume-company">Example Company</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
      </div>
    </div>

  </div>

</div> 
</section>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      home: true,
      about: false,
      resume: false,
      portfolio: false,
      contact: false,
    }
  }
}
</script>

<style>
 @import './assets/style.css'
</style>
