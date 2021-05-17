<template>
<div>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>


<div class="wrapper">
<nav class="sidebar">
<div class="flex">
    <ul class="list-unstyled menu-elements">
        <li id="home-tab" @click="goToTab('home')"> 
            <a class="scroll-link" href="/#/">HOME</a>
        </li>
        <li id="about-tab" @click="goToTab('about')">
            <a class="scroll-link" href="/#/">ABOUT</a>
        </li>
        <li id="portfolio-tab" @click="goToTab('portfolio')">
            <a class="scroll-link" href="/#/">PORTFOLIO</a>
        </li>
        <li id="resume-tab" @click="goToTab('resume')">
            <a class="scroll-link" href="/#/">RESUME</a>
        </li>
        <li id="contact-tab" @click="goToTab('contact')">
            <a class="scroll-link" href="/#/">CONTACT</a>
        </li>
        
    </ul>
</div>
</nav>
</div>


<section id='title' v-if="currentTab == 'home'">
  <span>
      EREN BAGCI
  </span>
  <br>
  <span>
      JS DEVELOPER
  </span>
</section>

<section v-if="currentTab == 'contact'">
<div class="box">
<div class="container">
<div class="portfolio-title-wrapper">
  <div class="mi-smalltitle">
    <h4>Contact Me</h4>
  </div>
</div>
<div class="row">
  <div class="col-lg-5">
    <div class="mi-contact-formwrapper">
      <h4>Get In Touch</h4>
      <form action="#" class="mi-form mi-contact-form">
      <div class="mi-form-field">
        <label for="contact-form-name">Enter your name*</label>
        <input type="text" name="name" id="contact-form-name" value="">
      </div>
      <div class="mi-form-field">
        <label for="contact-form-email">Enter your email*</label>
        <input type="text" name="email" id="contact-form-email" value="">
      </div>
      <div class="mi-form-field">
        <label for="contact-form-subject">Enter your subject*</label>
        <input type="text" name="subject" id="contact-form-subject" value="">
      </div>
      <div class="mi-form-field">
        <label for="contact-form-message">Enter your Message*</label>
        <textarea name="message" id="contact-form-message" cols="30" rows="6"></textarea>
      </div>
      <div class="mi-form-field">
        <button class="mi-button" type="submit">Send Mail</button>
      </div>
      </form>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mi-contact-info">
      <div class="mi-contact-infoblock">
        <span class="mi-contact-infoblock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
            </path>
          </svg>
        </span>
        <div class="mi-contact-infoblock-content">
          <h6>Phone</h6>
          <p><a href="+90-505-722-3471">+90-505-722-3471</a></p>
        </div>
      </div>
      <div class="mi-contact-infoblock">
        <span class="mi-contact-infoblock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </span>
        <div class="mi-contact-infoblock-content">
          <h6>Email</h6>
          <p><a href="mailto:eren.bagci90@gmail.com">eren.bagci90@gmail.com</a></p>
        </div>
      </div>
      <div class="mi-contact-infoblock">
        <span class="mi-contact-infoblock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </span>
        <div class="mi-contact-infoblock-content">
          <h6>Address</h6>
          <p>Vatan Street, Denizli, Turkey</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>

<section v-if="currentTab == 'portfolio'">
<div class="box">
<div class="container">
  <div class="portfolio-title-wrapper">
    <div class="mi-smalltitle">
      <h4>Portfolios</h4>
    </div>
  </div>
  <div class="row mt-30-reverse portfolio-wrapper">
    <div class="col-lg-6 col-md-6 col-12 single-portfolio-box">
      <div class="mi-portfolio mi-portfolio-visible">
        <div class="mi-portfolio-image">
          <img src="./assets/mobapassion.jpg" alt="T-shirt Mockup">
          <ul>
            <li>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
              </a>
            </li>
          </ul>
        </div>
        <h5><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">Moba Passion</a></h5>
        <h6>This project was my first entrepreneurship venture. Fully functional betting website with crypto deposits.</h6>
        <h6 class="mt-2">Uses ForgingBlock API for crypto deposits and withdrawls.</h6>
        <h6 class="mt-2">Frontend architecture created with AngularJS.</h6>
        <h6 class="mt-2">Backend is powered with NodeJS. Omniauth via Steam. Uses Mongo as DB.</h6>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-12 single-portfolio-box">
      <div class="mi-portfolio mi-portfolio-visible">
        <div class="mi-portfolio-image">
          <img src="./assets/klinikadent.jpg" alt="T-shirt Mockup">
          <ul>
            <li>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
              </a>
            </li>
          </ul>
        </div>
        <h5><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">KlinikaDent Website</a></h5>
        <h6>An example of my freelance work.</h6>
        <h6 class="mt-2">Page is fully responsive. No CSS framework is used.</h6>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-12 single-portfolio-box">
      <div class="mi-portfolio mi-portfolio-visible">
        <div class="mi-portfolio-image">
          <img src="./assets/defensehere.png" alt="website">
          <ul>
            <li>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
              </a>
            </li>
          </ul>
        </div>
        <h5><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">Defensehere Admin Pages</a></h5>
        <h6>Defensehere is a military news website. Their entire news management system rebuilt by me.</h6>
        <h6 class="mt-2">VueJS used on frontend. NodeJS at the backend. Uses Mongo as database.</h6>
        <h6 class="mt-2"></h6>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-12 single-portfolio-box">
      <div class="mi-portfolio mi-portfolio-visible">
        <div class="mi-portfolio-image">
          <img src="./assets/vapecookbook.jpg" alt="website">
          <ul>
            <li>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
              </a>
            </li>
          </ul>
        </div>
        <h5><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">Vape CookBook</a></h5>
        <h6>A website for DIY e-cig liquid recipes. Users can like, comment, publish recipes.</h6>
        <h6 class="mt-2">Made with Ruby on Rails. Uses PostgreSql as DB.</h6>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-12 single-portfolio-box">
      <div class="mi-portfolio mi-portfolio-visible">
        <div class="mi-portfolio-image">
          <img src="./assets/spree.jpg" alt="website">
          <ul>
            <li>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
              </a>
            </li>
          </ul>
        </div>
        <h5><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com">ECommerce Website with Spree</a></h5>
        <h6>Fully functional Ecommerce website built with Ruby on Rails Spree gem.</h6>
        <h6 class="mt-2"></h6>
      </div>
    </div>

    </div>
  </div>
</div>
</section>

<section v-if="currentTab == 'about'">
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
                  <a class="mi-button" href="http://github.com/darkmasta" target="_blank">More On Github <span style="font-size: 21px;"><i class="fa fa-github"></i></span></a>
                </div>
            </div>
        </div>

       </div>
   </div> 
</section>

<section v-if="currentTab == 'resume'">
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
        <h6 class="mi-resume-year">2021 - Present</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Fullstack Developer</h5>
        <h6 class="mi-resume-company">Mobbin</h6>
        <p>Developed Defensehere front-end and back-end solo.</p>
      </div>
    </div>
    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2019 - 2021</h6>
      </div>
      <div class="mi-resume-details">
        <h5>NodeJS Developer</h5>
        <h6 class="mi-resume-company">ForgingBlock</h6>
        <p>ForgingBlock is a US based start-up. Main product of company is crypto currency payment processor. 
        In this job I created applications that promotes and showcases the usage of <a href="https://api.forgingblock.io/docs/#fbuni">fb-universal-api</a>.
        <p>I developed an app called "Crypto for Streamers". It gets integrated to StreamLabs OBS software and pushes notifications to stream 
        when crypto currency donations happens.
        </p>
        <p>Another project was "Musicoin Streaming Platform". It's a music streaming platform and music marketplace with crypto currencies. Copy rights gets stored on musicoin blockchain.
</p>
        <p>Improved the email microservice.</p>
      </div>
    </div>

    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2018 - 2019</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Freelance Works</h5>
        <h6 class="mi-resume-company">Mobapassion</h6>
        <p>I spent my time on MobaPassion and other freelance works.</p>
      </div>
    </div>
        
    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2017 - 2018</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Senior JS Developer</h5>
        <h6 class="mi-resume-company">FIMM</h6>
        <p>I took lead Javascript developer role in Facebook Clone project. I desinged the architecture of a social network website. After finishing prototype they understood they needed a JS framework and a JS developer. Prototype was written PHP and JQuery. Here I made Ember, Backbone and Angular projects. We compared, tested and bencmarked results.
</p>
        <p>We agreed Angular is the way to go. In this project I made Facebook components with Angular like InfiniteScroll, Ajax Pagination, Auto-Complete Search with Ajax, Instagram style random image change, HTTP intercepter modules, Loading Screen directives etc. I edited API's of Laravel server too.
</p>
        <p>I contributed to some open source <a href="https://github.com/jeff-collins/ment.io/issues/58">Angular modules</a></p> 
      </div>
    </div>
          
    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2016 - 2017</h6>
      </div>
      <div class="mi-resume-details">
        <h5>JS Developer</h5>
        <h6 class="mi-resume-company">Ekseriya Studious</h6>
        <p>Ekseriya was mobile based game technologies start-up. Technology stack that we used here to develop our games was NodeJs, Backbone, 
        React, Angular, Redis, PostgreSql.</p>
        <p>We tried, compared, benchmarked every new Javascript technologies here. (Grunt, Jquery, Underscore, Promise Libraries etc.)</p>
        <p>I developed a multiplayer backgammon game.</p>
        <p>One of the company insight was: "We believe that the browser rendering engine is the single most important medium since papyrus."</p>
      </div>
    </div>

    <div class="mi-resume mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2016 - 2016</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Junior Ruby on Rails Developer</h5>
        <h6 class="mi-resume-company">Netlioo</h6>
        <p>Netlioo was biggest Ruby on Rails app was in Turkey at that time.</p>
        <p>I built most of the admin page with Rails ORM. And added new Javascript features to site.</p>
      </div>
    </div>

  </div>

   <div class="title-wrapper">
  <div class="mi-smalltitle">
    <span class="mi-smalltitle-icon"><i class="fa fa-book" aria-hidden="true"></i></span>
    <h4>Educational Qualifications</h4>
  </div>
  </div>
  <div class="mi-resume-wrapper">
    <div class="mi-resume ml-10 mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2011 - 2016</h6>
      </div>
      <div class="mi-resume-details">
        <h5>Computer Engineering</h5>
        <h6 class="mi-resume-company">Koceli University</h6>
      </div>
    </div>
        
          
    <div class="mi-resume ml-10 mt-30">
      <div class="mi-resume-summary">
        <h6 class="mi-resume-year">2005 - 2010</h6>
      </div>
      <div class="mi-resume-details">
        <h5>High School Graduation</h5>
        <h6 class="mi-resume-company">Uftade Collage</h6>
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
      currentTab: 'home',
    }
  },
  methods: {
    goToTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style>
@import './assets/style.css';

.portfolio-title-wrapper {
  margin: 20px;
  padding: 5px;
}

.mi-portfolio {
  transition: all .4s ease-out;
  visibility: hidden;
  opacity: 0;
}

.mi-portfolio-image {
  display: block;
  position: relative;
}

.mi-portfolio-image:before {
  content: "";
  position: absolute;
  left: 15px;
  top: 15px;
  height: calc(100% - 30px);
  width: calc(100% - 30px);
  background: hsla(0,0%,100%,.9);
  transition: all .4s ease-out;
  transform: scaleX(0);
  transform-origin: 0;
}

.mi-portfolio:hover .mi-portfolio-image:before {
  transform: scaleX(1);
}

.mi-portfolio:hover .mi-portfolio-image ul {
  visibility: visible;
  opacity: 1;
  margin-top: 0;
}

.mi-portfolio-image img {
  width: 100%;
}

.mi-portfolio-image ul {
  margin-bottom: 0;
  padding-left: 0;
  position: absolute;
  left: 0;
  top: 50%;
  text-align: center;
  width: 100%;
  transform: translateY(-50%);
  visibility: hidden;
  opacity: 0;
  margin-top: 30px;
  transition: all .4s ease-in-out .2s;
}

.mi-portfolio-image ul li {
  list-style: none;
  display: inline-block;
  margin: 0 7px;
}

.mi-portfolio-image ul li a, .mi-portfolio-image ul li button {
  display: inline-block;
  height: 45px;
  width: 45px;
  padding: 5px 0;
  vertical-align: middle;
  text-align: center;
  line-height: 1;
  background: #a4acc4;
  color: #fff;
  border: 1px solid #a4acc4;
  border-radius: 100px;
  outline: none;
  font-size: 1.25rem;
  transition: all .4s ease-out;
}

.mi-portfolio-image ul li a svg, .mi-portfolio-image ul li button svg {
  height: 100%;
}

audio, canvas, iframe, img, svg, video {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.portfolio-wrapper div {
  margin-bottom: 1em;
}


.single-portfolio-box {
}



.mi-portfolio.mi-portfolio-visible {
  visibility: visible;
  opacity: 1;
}

.mi-portfolio h5 {
  color: #fff;
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 700;
}

.mi-portfolio h6 {
  color: #a4acc4;
  margin-bottom: 0;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.mi-form-field {
  margin-top: 30px;
  position: relative;
}

.mi-form-field label {
  position: absolute;
  left: 15px;
  top: -13px;
  background: #10121b;
  color: rgb(164, 172, 196);
  border-bottom: none;
  transition: all .4s ease-out;
  pointer-events: none;
  background: transparent;
  padding: 0 10px;
  font-size: .94rem;
}

.mi-form-field input, .mi-form-field textarea {
  border: 1px solid #2f3e84;
  font-size: 1rem;
}

.mi-form-field textarea {
  padding-top: 5px;
  padding-left: 10px;
}

.github-link a:hover {
  text-decoration: none;
}

button, input, select {
  height: 50px;
  padding: 0 15px;
}

.mi-button {
  position: relative;
  padding: 0 30px;
  background: #037fff;
  color: #fff;
  border: 0;
  display: inline-block;
  z-index: 1;
  text-transform: uppercase;
  font-size: .9rem;
  letter-spacing: 2px;
  height: 50px;
  line-height: 50px;
  transition: all .4s ease-out;
}

.mi-contact-info {
  margin-top: -30px;
}

input[type="text"], input[type="text"]:focus {
  background: transparent;
  color: #165de4;
  outline-width: 0;    
}

textarea, textarea:focus {
  background: transparent;
  color: #165de4;
  outline-width: 0;    
}

.mi-contact-infoblock {
  margin-top: 30px;
  background: #191d2b;
  color: rgb(164, 172, 196);
  padding: 30px;
  display: flex;
}

.mi-contact-infoblock-icon {
  display: inline-block;
  height: 70px;
  width: 70px;
  flex: 0 0 70px;
  max-width: 70px;
  border: 1px solid #2e344e;
  text-align: center;
  line-height: 66px;
  margin-right: 20px;
}

.mi-contact-infoblock-icon svg {
  height: 30px;
  width: 30px;
}

.mi-contact-infoblock-content h6 {
  margin-top: -5px;
}

.mi-contact-infoblock-content p {
  margin-bottom: 0;
}

.mi-contact-infoblock-content p a {
  color: #a4acc4;
  transition: all .4s ease-out;
}

.mi-contact-formwrapper {
  margin-left: 1.5em;
}

.mi-contact-formwrapper h4 {
  color: #fff;
}

.mi-button:before {
  content: "";
  position: absolute;
  left: 0;
  top: auto;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #fff;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all .4s ease-out;
}

.mi-button:hover:before {
  transform: scaleX(1);
  z-index: 5;
}

.mi-contact-infoblock-content {
  margin-top: 3px;
}

</style>
