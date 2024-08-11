<template>
  <div class="project-centralization">
    <div class="project-card">
      <div class="project-image">
        <img :src="image" alt="Ícone de serviço"/>
      </div>

      <h3>{{ title }}</h3>

      <div class="btn-open-project">
        <p>{{ text }}</p>

        <a
          href="https://github.com/vinilins/vl-investimentos"
          class="open-project-image"
          target="_blank"
          rel="noopener"
        >
          <img src="../assets/arrow-icon.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    image: String,
    title: String,
    text: String,
  },
}
</script>

<style scoped>
.project-centralization {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.project-image {
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: start;
}

.project-image img {
  max-width: 100%;
}

h3 {
  font:
    600 16px "Inter",
    sans-serif;
  color: #ffffff;
  margin-top: 18px;
  text-align: left;
}

p {
  font:
    400 13px "Inter",
    sans-serif;
  text-align: left;
  line-height: 1.5;
  letter-spacing: 0.5px;
}

.btn-open-project {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.open-project-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: #4fc3f7;
}
</style>
