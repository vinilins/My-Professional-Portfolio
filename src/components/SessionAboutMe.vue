<template>
  <div class="centralization">
    <div id="session-about-me" class="session-about-me">
      <h1>About Me</h1>
      <h3>Get to know me</h3>
      <p>
        Hi there! I'm Vinícius, a Software Engineer specializing in web
        development, backend, frontend and websites. With a passion for using
        design patterns for development, I am dedicated to helping customers
        through software solutions to become more independent and automated
        through systems or websites, giving them productive time to focus their
        efforts on other areas or topics.
      </p>
      <p>
        I bring a mix of technical knowledge, practical experience and a
        commitment to clear communication for each project, whether simple web
        systems, or developing complex systems that involve multiple business
        rules useful for each context
      </p>
      <p>
        Let's work together to turn ideas into actionable insights that generate
        real results. Get in touch and let's start unlocking the advancement of
        technology!
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
  margin-top: 14%;
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
  background: linear-gradient(to left, transparent 50%, #4fc3f7 50%) right;
  background-size: 250%;
  margin-top: 3%;
  text-decoration: none;
}

.btn-download-resume:hover {
  background-position: left;
  -webkit-transition: all 0.85s ease;
  -o-transition: all 0.85s ease;
  transition: all 0.85s ease;
}
</style>
