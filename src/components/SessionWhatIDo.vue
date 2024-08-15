<template>
  <div class="centralization">
    <div id="session-what-i-do" class="session-what-i-do">
      <h1>{{ $t("sessionWhatIDo.title") }}</h1>
      <h3>{{ $t("sessionWhatIDo.caption") }}</h3>

      <div class="buttons-choice">
        <ButtonSecondary :text='$t("sessionWhatIDo.selectButtons.allSkills")' @click="selectCategory('All Skills', $event)"/>
        <ButtonSecondary :text='$t("sessionWhatIDo.selectButtons.python")' @click="selectCategory('Python', $event)"/>
        <ButtonSecondary :text='$t("sessionWhatIDo.selectButtons.backend")' @click="selectCategory('Backend', $event)"/>
        <ButtonSecondary :text='$t("sessionWhatIDo.selectButtons.frontend")' @click="selectCategory('Frontend', $event)"/>
        <ButtonSecondary :text='$t("sessionWhatIDo.selectButtons.cloud")' @click="selectCategory('Cloud', $event)"/>
        <ButtonSecondary :text='$t("sessionWhatIDo.selectButtons.database")' @click="selectCategory('Database', $event)"/>
      </div>

      <div class="services-cards">
        <ServiceCard
          v-for="card in filteredCards()"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
          :text="card.text"
        />
      </div>

    </div>
  </div>
</template>

<script>
import ButtonSecondary from "./ButtonSecondary.vue"
import ServiceCard from "./ServiceCard.vue"

export default {
  name: "SessionAboutMe",
  data() {
    return {
      selectedCategory: "Python"
    }
  },
  components: {
    ServiceCard,
    ButtonSecondary,
  },
  computed: {
    allCards () {
      return [
        { 
          title: this.$t("sessionWhatIDo.services.python.title"), 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/python-icon.png"),
          text: this.$t("sessionWhatIDo.services.python.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.fastapi.title"), 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/fastapi-icon.png"),
          text: this.$t("sessionWhatIDo.services.fastapi.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.flask.title"), 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/flask-icon.png"),
          text: this.$t("sessionWhatIDo.services.flask.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.django.title"),  
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/django-icon.png"),
          text: this.$t("sessionWhatIDo.services.django.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.postgresql.title"),
          categories: ["Database", "Backend"],
          icon: require("../assets/technologies-icon/postgres-icon.png"),
          text: this.$t("sessionWhatIDo.services.postgresql.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.mongodb.title"),
          categories: ["Database", "Backend"],
          icon: require("../assets/technologies-icon/mongo-icon.png"),
          text: this.$t("sessionWhatIDo.services.mongodb.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.gcp.title"),
          categories: ["Cloud", "Backend"],
          icon: require("../assets/technologies-icon/gcp-icon.png"),
          text: this.$t("sessionWhatIDo.services.gcp.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.redis.title"),
          categories: ["Backend", "Database"],
          icon: require("../assets/technologies-icon/redis-icon.png"),
          text: this.$t("sessionWhatIDo.services.redis.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.celery.title"),
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/celery-icon.png"),
          text: this.$t("sessionWhatIDo.services.celery.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.rabbitmq.title"),
          categories: ["Backend"],
          icon: require("../assets/technologies-icon/rabbitmq-icon.png"),
          text: this.$t("sessionWhatIDo.services.rabbitmq.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.docker.title"),
          categories: ["Cloud"],
          icon: require("../assets/technologies-icon/docker-icon.png"),
          text: this.$t("sessionWhatIDo.services.docker.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.dockerCompose.title"),
          categories: ["Cloud"],
          icon: require("../assets/technologies-icon/docker-compose-icon.png"),
          text: this.$t("sessionWhatIDo.services.dockerCompose.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.ddd.title"),
          categories: ["Backend"],
          icon: require("../assets/technologies-icon/ddd-icon.png"),
          text: this.$t("sessionWhatIDo.services.ddd.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.tdd.title"),
          categories: ["Backend"],
          icon: require("../assets/technologies-icon/tdd-icon.png"),
          text: this.$t("sessionWhatIDo.services.tdd.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.html.title"),
          categories: ["Frontend"],
          icon: require("../assets/technologies-icon/html-icon.png"),
          text: this.$t("sessionWhatIDo.services.html.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.css.title"),
          categories: ["Frontend"],
          icon: require("../assets/technologies-icon/css-icon.png"),
          text: this.$t("sessionWhatIDo.services.css.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.javascript.title"),
          categories: ["Frontend"],
          icon: require("../assets/technologies-icon/javascript-icon.png"),
          text: this.$t("sessionWhatIDo.services.javascript.text")
        },
        { 
          title: this.$t("sessionWhatIDo.services.cicd.title"),
          categories: ["Frontend", "Backend"],
          icon: require("../assets/technologies-icon/ci-cd-icon.png"),
          text: this.$t("sessionWhatIDo.services.cicd.text")
        },
      ]
    }
  },
  methods: {
    selectCategory(category, event) {
      this.selectedCategory = category;

      const buttons = document.querySelectorAll('.buttons-choice button');
      buttons.forEach(button => {
        button.classList.remove('btn-clicked');
      });

      event.currentTarget.classList.add('btn-clicked');
    },
    filteredCards() {
      if (this.selectedCategory == "All Skills") {
        return this.allCards;
      }
      return this.allCards.filter(card => card.categories.includes(this.selectedCategory));
    },
  },
  mounted() {
    // Ensure the 'Python' button is marked as clicked on load
    const pythonButton = document.querySelector('.buttons-choice button:nth-child(2)');
    if (pythonButton) {
      pythonButton.classList.add('btn-clicked');
    }
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
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  margin-top: 5%;

  @media only screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
}

h1 {
  font:
    700 63px "Poppins",
    sans-serif;
  letter-spacing: -3px;

  @media only screen and (max-width: 400px) {
    line-height: 70px;
    margin-bottom: 20px;
  }
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

.btn-view-all {
  margin-top: 30px;
}

.buttons-choice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media only screen and (min-width: 2100px) {
    width: 50%;
  }

  @media only screen and (max-width: 2100px) and (min-width: 1830px) {
    width: 60%;
  }

  @media only screen and (max-width: 1829px) and (min-width: 1530px) {
    width: 80%;
  }

  @media only screen and (max-width: 1030px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px 20px;
    margin-bottom: 20px;
  }
  
}

.btn-clicked {
  background-color: #484e53;
  color: #fff;
}
</style>
