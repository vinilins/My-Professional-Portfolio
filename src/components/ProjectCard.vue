<template>
    <div class="project-card">
        <div class="project-image">
            <img :src="image" alt="Ícone de serviço" width="355px" height="199px">
        </div>

        <h3>{{ title }}</h3>

        <p>{{ text }}</p>

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
  
  </style>
  