<template>
    <div class="project-card">
        <div class="project-image">
            <img :src="image" alt="Ícone de serviço" width="355px" height="199px">
        </div>

        <h3>{{ title }}</h3>
        
        <div class="btn-open-project">
          <p>{{ text }}</p>
          
          <a href="https://github.com/vinilins/vl-investimentos" class="open-project-image" target="_blank" rel="noopener">
            <img src="../assets/arrow-icon.svg" alt="">
          </a>
        </div>

    </div>
  </template>
  
  <script>
    export default {
      name: 'ProjectCard',
        props: {
            image: String,
            title: String,
            text: String
        }
    }
  </script>
  
  <style scoped>  
    .project-card {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
    }

    .project-image {
        display: flex;
        justify-content: start;
        align-items: start;
    }
  
    h3 {
      font: 600 16px "Inter", sans-serif;
      color: #FFFFFF;
      margin-top: 18px;
      text-align: left;
    }

    p {
        font: 400 13px "Inter", sans-serif;
        text-align: left;
        line-height: 1.5;
        letter-spacing: 0.5px;
    }

    .btn-open-project {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }

    .open-project-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 37px;
      height: 37px;
      border-radius: 50%;
      background-color: #4FC3F7;
    }
  
  </style>
  