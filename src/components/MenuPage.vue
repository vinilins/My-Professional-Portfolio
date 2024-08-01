<template>
  <div class="menu">
    <h1>Vinícius Lins</h1>

    <ul class="buttons-list">
      <li class="menu-btn">
        <a class="btn-links-page"> Home </a>
      </li>
      <li class="menu-btn">
        <a class="btn-links-page" @click="scrollToSessionAboutMe">About</a>
      </li>
      <li class="menu-btn">
        <a class="btn-links-page" @click="scrollToSessionServices">Services</a>
      </li>
      <li class="menu-btn">
        <a class="btn-links-page" @click="scrollToSessionProjects">Projects</a>
      </li>
      <li class="menu-btn">
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

    <img
        class="menu-icon"
        src="../assets/menu-icon.svg"
        alt=""
        width="30"
        height="30"
        @click="toggleMenu('.menu-icon')"
      />

      <div class="hamburguer-div">
        <img
          class="menu-icon-div"
          src="../assets/menu-icon.svg"
          alt=""
          width="30"
          height="30"
          @click="toggleMenu('.hamburguer-div')"
        />

        <ul class="hamburguer-menu">
          <li class="hamburguer-btn">
            <a class="btn-links-page" @click="toggleMenu('.hamburguer-div')"> Home </a>
          </li>
          <li class="hamburguer-btn">
            <a class="btn-links-page" @click="scrollToSessionAboutMe(); toggleMenu('.hamburguer-div');">About</a>
          </li>
          <li class="hamburguer-btn">
            <a class="btn-links-page" @click="scrollToSessionAboutMe(); toggleMenu('.hamburguer-div');">Services</a>
          </li>
          <li class="hamburguer-btn">
            <a class="btn-links-page" @click="scrollToSessionAboutMe(); toggleMenu('.hamburguer-div');">Projects</a>
          </li>
          <li class="hamburguer-btn">
            <a
              class="btn-links-page"
              target="_blank"
              rel="noopener"
              href="https://drive.google.com/file/d/1dWMkpoB3EAK2q2FpCX9O0bkOe77M6yJz/view?usp=sharing"
              >Resume</a
            >
          </li>
          <img
            class="dark-mode"
            src="../assets/dark-mode.svg"
            alt="Dark Mode"
            width="30"
            height="30"
            @click="toggleMenu('.hamburguer-div')"
          />
        </ul>
      </div>

  </div>
</template>

<script>
export default {
  name: "MenuPage",
  mounted() {
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {
      const hamburguerDiv = document.querySelector(".hamburguer-div")
      const menuIcon = document.querySelector(".menu-icon")

      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 1000) {

        hamburguerDiv.style.display = "none"

        menuIcon.style.display = "none"
        menuIcon.style.position = "relative"
        menuIcon.style.left = "0"
      } else if (hamburguerDiv.style.display === "none") {
          menuIcon.style.display = "flex"
        }
    },
    toggleMenu(hiddenElement) {
      const hamburguerClassDivToShow  = ".hamburguer-div" === hiddenElement ? ".menu-icon" : ".hamburguer-div"
      const hamburguerDivToShow = document.querySelector(hamburguerClassDivToShow)
      const hamburguerDivToHidden = document.querySelector(hiddenElement)

      const menuIcon = document.querySelector(".menu-icon")

      if (hamburguerClassDivToShow === ".hamburguer-div") {
        console.log("entrou", hiddenElement, hamburguerClassDivToShow)
        hamburguerDivToShow.style.display = "flex"
        hamburguerDivToHidden.style.display = "none"

        menuIcon.style.position = "absolute"
        menuIcon.style.left = "65%"
        menuIcon.style.zIndex = "2"

      } else {
        console.log("entrou 2", hiddenElement, hamburguerClassDivToShow)
        hamburguerDivToShow.style.display = "flex"
        hamburguerDivToHidden.style.display = "none"

        menuIcon.style.position = "relative"
        menuIcon.style.left = "0"
      }
    },
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

li {
  list-style-type: none;
  font:
    500 15px "Montserrat",
    sans-serif;
}

.buttons-list {
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: center;
  padding: 0;
}

.menu-btn {
  margin: 0 4%;
  cursor: pointer;
}

.hamburguer-div {
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40%;
  z-index: 1;
}

.hamburguer-menu {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 13% 0 0 25%;;
  align-items: center;
}

.hamburguer-btn {
  margin: 0 0 50% 0;
  cursor: pointer;
  font:
    500 20px "Montserrat",
    sans-serif;
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

.menu-icon {
  display: none;
}

.menu-icon-div {
  display: flex;
  cursor: pointer;
  margin: 13% 0 0 10%;
}


@media only screen and (max-width: 1000px) {
  .buttons-list, .btns {
    display: none;
  }

  .menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
    cursor: pointer;
  }
}

@media only screen and (max-width: 680px) {
  .hamburguer-menu {
    margin: 13% 0 0 13%;
  }

  h1 {
    margin-left: 3%;
  }
}

@media only screen and (max-width: 560px) {
  .hamburguer-btn {
    font:
      500 17px "Montserrat",
      sans-serif;
  }

  .hamburguer-div img {
    width: 25px;
    height: 25px;
  }

  h1 {
    margin-left: 5%;
  }
}

</style>
