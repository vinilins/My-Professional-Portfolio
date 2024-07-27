<template>
  <div class="menu">
    <h1>Vinícius Lins</h1>

    <ul>
      <li>
        <a class="btn-links-page"> Home </a>
      </li>
      <li>
        <a class="btn-links-page" @click="scrollToSessionAboutMe">About</a>
      </li>
      <li>
        <a class="btn-links-page" @click="scrollToSessionServices">Services</a>
      </li>
      <li>
        <a class="btn-links-page" @click="scrollToSessionProjects">Projects</a>
      </li>
      <li>
        <a
          class="btn-links-page"
          target="_blank"
          rel="noopener"
          href="https://drive.google.com/file/d/1dWMkpoB3EAK2q2FpCX9O0bkOe77M6yJz/view?usp=sharing"
          >Resume</a
        >
      </li>
    </ul>

    <div class="btns">
      <button class="btn-contact-me" @click="scrollToSessionForm">
        Contact Me
      </button>
      <img
        class="dark-mode"
        src="../assets/dark-mode.svg"
        alt="Dark Mode"
        width="30"
        height="30"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuPage",
  methods: {
    scrollToSessionAboutMe() {
      const bottomSection = document.getElementById("session-about-me")
      window.scrollTo({
        top: bottomSection.offsetTop,
        behavior: "smooth",
      })
    },
    scrollToSessionProjects() {
      const bottomSection = document.getElementById("session-projects")
      window.scrollTo({
        top: bottomSection.offsetTop,
        behavior: "smooth",
      })
    },
    scrollToSessionServices() {
      const bottomSection = document.getElementById("session-what-i-do")
      window.scrollTo({
        top: bottomSection.offsetTop,
        behavior: "smooth",
      })
    },
    scrollToSessionForm() {
      const bottomSection = document.getElementById("session-form")
      window.scrollTo({
        top: bottomSection.offsetTop,
        behavior: "smooth",
      })
    },
  },
}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  flex-direction: row;
}

h1 {
  width: 30%;
  font:
    400 30px "Oleo Script",
    cursive;
}

ul {
  font:
    500 15px "Montserrat",
    sans-serif;
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  list-style-type: none;
}

li {
  margin: 0 4%;
}

a {
  color: #c1c1c1;
  text-decoration: none;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 100%;
}

.btn-contact-me {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30%;
  border: 1px solid #4fc3f7;
  font:
    500 12px "Montserrat",
    sans-serif;
  border-radius: 5px;
  color: #ffffff;
  background: linear-gradient(to left, transparent 50%, #4fc3f7 50%) right;
  background-position: 100% 0;
  background-size: 250%;
  transition: all 0.5s ease-out;
}

.btn-contact-me:hover {
  cursor: pointer;
  background-position: left;
  -webkit-transition: all 0.85s ease;
  -o-transition: all 0.85s ease;
  transition: all 0.85s ease;
}

.btn-links-page:hover {
  color: #4fc3f7;
}

.dark-mode {
  color: #e1e1e1;
}
</style>
