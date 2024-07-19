<template>
  <div class="centralization">
    <div class="session-what-i-do">
      <h1>What I do</h1>
      <h3>My Services</h3>

      <div class="services-cards">
        <ServiceCard
          :icon="darkModeSVG"
          title="Data Analytics & Visualization"
          text="From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward."
        />

        <ServiceCard
          :icon="darkModeSVG"
          title="Predictive Analytics and Forecasting"
          text="From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success"
        />

        <ServiceCard
          :icon="darkModeSVG"
          title="Natural Language Processing"
          text="From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age"
        />

        <ServiceCard
          :icon="darkModeSVG"
          title="Machine Learning"
          text="From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age"
        />

        <ServiceCard
          :icon="darkModeSVG"
          title="Python"
          text="From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age"
        />

        <ServiceCard
          :icon="darkModeSVG"
          title="PostgreSQL"
          text="From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue"

export default {
  name: "SessionAboutMe",
  data() {
    return {
      darkModeSVG: require("../assets/dark-mode-copy.svg"),
    }
  },
  components: {
    ServiceCard,
  },
}
</script>

<style scoped>
.centralization {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.session-what-i-do {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-size: cover;
}

.services-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px 60px;
  margin-top: 5%;
}

h1 {
  font:
    700 63px "Poppins",
    sans-serif;
  letter-spacing: -3px;
}

h3 {
  font:
    600 16px "Poppins",
    sans-serif;
  background: linear-gradient(to right, #4fc3f7, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: -15px 0 30px 0;
}
</style>
