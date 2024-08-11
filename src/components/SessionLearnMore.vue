<template>
  <div class="centralization">
    <div class="session-learn-more">
      <img alt="My Photo" src="../assets/perfil-photo.png" />
      <h1>Vinícius Lins</h1>
      <h3>Software Engineer</h3>
      <p>
        As a passionate software engineer with experience in web development,
        backend, frontend, I thrive on the challenges of architecting project
        structures and patterns to solve everyday problems in the development
        environment.
      </p>
      <button @click="scrollToSessionAboutMe" class="btn-learn-more">
        Learn More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionLearnMore",
  methods: {
    scrollToSessionAboutMe() {
      const bottomSection = document.getElementById("session-about-me")
      window.scrollTo({
        top: bottomSection.offsetTop,
        behavior: "smooth",
      })
    },
  },
}
</script>

<style scoped>
.centralization {
  display: flex;
  justify-content: center;
  align-items: center;
}

.session-learn-more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background-about-me-full-screen.png");
  width: 60%;
  background-size: cover;
}

img {
  margin-top: 10%;
  width: 207px;
  height: 207px;
}

h1 {
  font:
    700 63px "Poppins",
    sans-serif;
  letter-spacing: -3px;
}

h3 {
  font:
    600 26px "Poppins",
    sans-serif;
  background: linear-gradient(to right, #4fc3f7, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font:
    500 16px "Poppins",
    sans-serif;
  text-align: center;
  width: 65%;

  @media only screen and (min-width: 2100px) {
    width: 50%;
  }

}

.btn-learn-more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 40px;
  border: 1px solid #4fc3f7;
  font:
    500 12px "Montserrat",
    sans-serif;
  border-radius: 30px;
  color: #ffffff;
  background: linear-gradient(to left, transparent 50%, #4fc3f7 50%) right;
  margin-top: 3%;
  background-size: 250%;
  transition: all 0.5s ease-out;
}

.btn-learn-more:hover {
  cursor: pointer;
  background-position: left;
  -webkit-transition: all 0.85s ease;
  -o-transition: all 0.85s ease;
  transition: all 0.85s ease;
}

@media only screen and (max-width: 620px) {
  h1 {
    font-size: 40px;
    margin-top: 20px;
  }
  
  h3 {
    font-size: 20px;
  }
  
  p {
    font-size: 14px;
    width: 80%;
  }
}
</style>
