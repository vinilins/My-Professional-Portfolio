<template>
  <div class="centralization">
    <div id="session-about-me" class="session-about-me">
      <h1>About Me</h1>
      <h3>Get to know me</h3>
      <p>
        Hi there! I'm [Your Name], a data scientist specializing in data
        analytics, predictive modeling, natural language processing, machine
        learning, and AI chatbots. With a passion for unraveling insights from
        complex datasets, I'm dedicated to helping businesses make informed
        decisions and stay ahead in today's data-driven world.
      </p>
      <p>
        I bring a blend of technical expertise, hands-on experience, and a
        commitment to clear communication to every project. Whether it's
        uncovering hidden patterns, predicting future trends, or automating
        processes with AI, I'm here to help you harness the full potential of
        your data.
      </p>
      <p>
        Let's work together to transform your data into actionable insights that
        drive real results. Get in touch, and let's start unlocking the power of
        your data today!
      </p>

      <a
        class="btn-download-resume"
        target="_blank"
        rel="noopener"
        href="https://drive.google.com/file/d/1dWMkpoB3EAK2q2FpCX9O0bkOe77M6yJz/view?usp=sharing"
      >
        Download Resume
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionAboutMe",
}
</script>

<style scoped>
.centralization {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.session-about-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-size: cover;
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

p {
  font:
    500 16px "Poppins",
    sans-serif;
  text-align: center;
  width: 80%;
}

.btn-download-resume {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 45px;
  border: 1px solid #4fc3f7;
  font:
    500 12px "Montserrat",
    sans-serif;
  border-radius: 30px;
  color: #ffffff;
  background-color: transparent;
  margin-top: 3%;
  text-decoration: none;
}
</style>
