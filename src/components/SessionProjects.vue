<template>
  <div class="centralization">
    <div class="session-projects">
      <h1>Projects</h1>
      <h3>Some of my Work</h3>

      <div class="buttons-choice">
        <ButtonSecondary text="Machine Learning" />
        <ButtonSecondary text="SQL" />
        <ButtonSecondary text="Power BI" />
        <ButtonSecondary text="AI/LLMs" />
        <ButtonSecondary text="Data Science" />
      </div>

      <div class="projects-cards">
        <ProjectCard
          :image="ProjectImage"
          title="SQL Project"
          text="Technology used"
        />
        <ProjectCard
          :image="ProjectImage"
          title="Project 2"
          text="Web Design / Usability Testing"
        />
        <ProjectCard
          :image="ProjectImage"
          title="Project 3"
          text="Python / Machine Learning"
        />
        <ProjectCard
          :image="ProjectImage"
          title="Project 3"
          text="Python / Machine Learning"
        />
      </div>

      <ButtonSecondary
        class="btn-view-all"
        text="View All"
        textColor="white"
        font="500 12px Inter, sans-serif"
      />
    </div>
  </div>
</template>

<script>
import ButtonSecondary from "./ButtonSecondary.vue"
import ProjectCard from "./ProjectCard.vue"

export default {
  name: "SessionProjects",
  data() {
    return {
      ProjectImage: require("../assets/image.png"),
    }
  },
  components: {
    ButtonSecondary,
    ProjectCard,
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

.session-projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-size: cover;
}

.projects-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px 120px;
  margin-top: 5%;
  width: 100%;
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
  margin: -5px 0 30px 0;
}

.buttons-choice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.btn-view-all {
  margin-top: 30px;
}
</style>
