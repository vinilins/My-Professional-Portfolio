<template>
    <div class="service-card">
        <div class="icon">
            <img :src="icon" alt="Ícone de serviço" width="100px" height="100px">
        </div>

        <h3>{{ title }}</h3>

        <p>{{ text }}</p>

    </div>
  </template>
  
  <script>
    export default {
      name: 'ServiceCard',
        props: {
            icon: String,
            title: String,
            text: String
        }
    }
  </script>
  
  <style scoped>  
    .service-card {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      background: linear-gradient(145deg, #1C1C1C 60%, #050505 180%);
      border: 1px solid #2B2B2B;
      border-radius: 20px;
      padding: 20px;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F8FF;
        width: 44px;
        height: 44px;
        border-radius: 9px;
        margin-top: 18px;
    }

    img {
        width: 20px;
        height: 20px;
        fill: #1A1A1A;
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
  