<template>
  <div class="centralization">
    <div id="session-what-i-do" class="session-what-i-do">
      <h1>What I do</h1>
      <h3>My Hard Skills</h3>

      <div class="buttons-choice">
        <ButtonSecondary text="All Skills" @click="selectCategory('All Skills', $event)"/>
        <ButtonSecondary text="Python" @click="selectCategory('Python', $event)"/>
        <ButtonSecondary text="Backend" @click="selectCategory('Backend', $event)"/>
        <ButtonSecondary text="Frontend" @click="selectCategory('Frontend', $event)"/>
        <ButtonSecondary text="Cloud" @click="selectCategory('Cloud', $event)"/>
        <ButtonSecondary text="Database" @click="selectCategory('Database', $event)"/>
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
      selectedCategory: "Python",
      allCards: [
        { 
          title: "Python", 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/python-icon.png"),
          text: "With proficiency in Python, I develop robust and efficient solutions for various applications, focusing on web and automation, always using industry best practices."
        },
        { 
          title: "FastAPI", 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/fastapi-icon.png"),
          text: "With expertise in FastAPI, I create fast and efficient APIs, utilizing data typing for automatic validations and interactive documentation. Ideal for modern web applications, ensuring scalability, security, and easy maintenance."
        },
        { 
          title: "Flask", 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/flask-icon.png"),
          text: "Mastering Flask, I develop lightweight and flexible web applications. Flask allows for rapid iteration, with modularity for customizations and extension integration, ensuring robust and efficient back-ends."
        },
        { 
          title: "Django", 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/django-icon.png"),
          text: "With extensive experience in Django, I develop comprehensive web applications with integrated tools for authentication, administration, and ORM. I ensure secure, scalable, and efficient solutions, following industry best practices."
        },
        { 
          title: "PostgreSQL", 
          categories: ["Database", "Backend"],
          icon: require("../assets/technologies-icon/postgres-icon.png"),
          text: "Proficient in PostgreSQL, I manage reliable relational databases, ensuring integrity and performance. I use advanced SQL support and extensibility to optimize complex queries and efficiently store data securely."
        },
        { 
          title: "MongoDB", 
          categories: ["Database", "Backend"],
          icon: require("../assets/technologies-icon/mongo-icon.png"),
          text: "Skilled in MongoDB, I design scalable, high-performance NoSQL databases. Ideal for unstructured data, ensuring flexibility and efficiency in dynamic applications, following industry best practices."
        },
        { 
          title: "GCP - Google Cloud Platform", 
          categories: ["Cloud", "Backend"],
          icon: require("../assets/technologies-icon/gcp-icon.png"),
          text: "With experience in Google Cloud Platform (GCP), I implement scalable and secure cloud solutions, leveraging services like Compute Engine, BigQuery, and Kubernetes to optimize performance and cost."

        },
        { 
          title: "Redis", 
          categories: ["Backend", "Database"],
          icon: require("../assets/technologies-icon/redis-icon.png"),
          text: "As a Redis specialist, I configure efficient cache systems, reducing latency and increasing application speed. Redis ensures fast and reliable storage, ideal for temporary data and sessions."
        },
        { 
          title: "Celery", 
          categories: ["Python", "Backend"],
          icon: require("../assets/technologies-icon/celery-icon.png"),
          text: "Using Celery, I orchestrate asynchronous tasks and scheduling in distributed applications. Celery allows for scalability and high availability, optimizing parallel processing and execution of long-running tasks."
        },
        { 
          title: "RabbitMQ", 
          categories: ["Backend"],
          icon: require("../assets/technologies-icon/rabbitmq-icon.png"),
          text: "Proficient in RabbitMQ, I implement robust messaging systems for asynchronous communication between services. RabbitMQ ensures efficient queues, scalability, and high availability, essential for distributed architectures."
        },
        { 
          title: "Docker", 
          categories: ["Cloud"],
          icon: require("../assets/technologies-icon/docker-icon.png"),
          text: "With expertise in Docker, I create consistent and portable development environments. Docker facilitates the creation of isolated containers, ensuring environment replication and simplifying application deployment."
        },
        { 
          title: "Docker Compose", 
          categories: ["Cloud"],
          icon: require("../assets/technologies-icon/docker-compose-icon.png"),
          text: "Using Docker Compose, I orchestrate multiple containers for development and production environments. Compose simplifies the definition and execution of multi-container applications, ensuring continuous integration and easy management."
        },
        { 
          title: "DDD Architecture - Domain-Driven Design", 
          categories: ["Backend"],
          icon: require("../assets/technologies-icon/ddd-icon.png"),
          text: "Implementing Domain-Driven Design (DDD) architecture, I create complex systems focused on the business domain, promoting clarity and alignment between technology and business objectives."
        },
        { 
          title: "TDD Architecture - Test-Driven Development", 
          categories: ["Backend"],
          icon: require("../assets/technologies-icon/tdd-icon.png"),
          text: "Adopting Test-Driven Development (TDD) architecture, I develop high-quality software with automated tests. TDD ensures reliable and maintainable code, promoting early error detection and continuous improvement."
        },
        { 
          title: "HTML", 
          categories: ["Frontend"],
          icon: require("../assets/technologies-icon/html-icon.png"),
          text: "Proficient in HTML, I create semantic and accessible structures for websites, ensuring a solid foundation for web content and optimizing the user experience."
        },
        { 
          title: "CSS", 
          categories: ["Frontend"],
          icon: require("../assets/technologies-icon/css-icon.png"),
          text: "Mastering CSS, I style websites in a responsive and attractive manner, using modern techniques like Flexbox and Grid to create dynamic layouts adaptable to different devices."
        },
        { 
          title: "JavaScript", 
          categories: ["Frontend"],
          icon: require("../assets/technologies-icon/javascript-icon.png"),
          text: "With expertise in JavaScript, I develop interactive and dynamic functionalities for websites, using frameworks and libraries like React and Node.js to enhance the user experience."
        },
        { 
          title: "CI/CD - Continuous Integration and Continuous Delivery", 
          categories: ["Frontend", "Backend"],
          icon: require("../assets/technologies-icon/ci-cd-icon.png"),
          text: "Implementing CI/CD (Continuous Integration and Continuous Delivery), I automate tests and deployments, ensuring rapid and frequent code delivery with quality and security."
        },
      ],
    }
  },
  components: {
    ServiceCard,
    ButtonSecondary,
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
