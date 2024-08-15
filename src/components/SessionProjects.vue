<template>
  <div class="centralization">
    <div id="session-projects" class="session-projects">
      <h1>{{ $t("sessionProjects.title") }}</h1>
      <h3>{{ $t("sessionProjects.caption") }}</h3>

      <div class="projects-cards">
        <ProjectCard
          :image="ProjectImage"
          :title='$t("sessionProjects.projects.project1.title")'
          :text='$t("sessionProjects.projects.project1.technologies")'
        />
        <ProjectCard
          :image="ProjectImage"
          :title='$t("sessionProjects.projects.project2.title")'
          :text='$t("sessionProjects.projects.project2.technologies")'
        />
        <ProjectCard
          :image="ProjectImage"
          :title='$t("sessionProjects.projects.project3.title")'
          :text='$t("sessionProjects.projects.project3.technologies")'
        />
        <ProjectCard
          :image="ProjectImage"
          :title='$t("sessionProjects.projects.project4.title")'
          :text='$t("sessionProjects.projects.project4.technologies")'
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue"

export default {
  name: "SessionProjects",
  data() {
    return {
      ProjectImage: require("../assets/image.png"),
    }
  },
  components: {
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
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
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

.btn-view-all {
  margin-top: 30px;
}

@media only screen and (min-width: 1100px) {
  .projects-cards {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }

}
</style>
