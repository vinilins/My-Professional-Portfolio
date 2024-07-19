<template>
    <div class="session-footer">
        <div class="line">
            <h1>Let's<br/>Work Together -</h1>

            <a href="https://router.vuejs.org" class="btn-send-email" target="_blank" rel="noopener">
                <img src="../assets/gmail-icon.svg" alt="Gmail"/>
                viniciusaclins@gmail.com
            </a>
        </div>

        <div class="division"></div>

        <div class="line line-down">
            <p class="footer-text">
                © 2024 all rights reserved.
            </p>

            <ul class="footer-links">
                <li><a class="social-links" href="https://router.vuejs.org" target="_blank" rel="noopener">
                    <img src="../assets/linkedin-icon.svg" alt="LinkedIn"/>
                    </a>
                </li>
                <li><a class="social-links" href="https://vuex.vuejs.org" target="_blank" rel="noopener">
                    <img src="../assets/github-icon.svg" alt="GitHub"/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  </template>
  
  <script>
    export default {
      name: 'SessionFooter'
    }
  </script>
  
  <style scoped>
    .session-footer {
      display: flex;
      flex-direction: column;
      margin-top: 200px;
    }

    .line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 5% 0% 5%;
    }
    
    .line-down {
        margin-bottom: 50px;
    }
  
    h1 {
      font: 500 63px 'Inter', sans-serif;
      color: #DEDEDE;
      text-align: justify;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .division {
        width: 100%;
        height: 1px;
        background-color: #484E53;
        margin: 40px 0 40px 0;
    }

    .btn-send-email {
        border: #484E53 2px solid;
        border-radius: 15px;
        width: 310px;
        height: 75px;
        font: 400 20px 'Inter', sans-serif;
        color: #C9C9C9;
    }
    
    .btn-send-email img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
  
    .footer-text {
      font: 400 16px 'Inter', sans-serif;
      color: #A9A9A9;
      margin: 0;
    }

    .footer-links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 310px;
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .social-links {
        border-radius: 50%;
        border: 2px solid #484E53;
        width: 32px;
        height: 32px;
        margin: 0 10px 0 10px;
    }
  
  </style>
  