<template>
  <MenuPage/>
  <SessionLearnMore/>
  <SessionAboutMe/>
  <SessionWhatIDo/>
  <SessionProjects/>
  <SessionForm/>
  <SessionFooter/>
</template>

<script>
import MenuPage from './components/MenuPage.vue'
import SessionLearnMore from './components/SessionLearnMore.vue'
import SessionAboutMe from './components/SessionAboutMe.vue'
import SessionWhatIDo from './components/SessionWhatIDo.vue'
import SessionProjects from './components/SessionProjects.vue'
import SessionForm from './components/SessionForm.vue'
import SessionFooter from './components/SessionFooter.vue'

export default {
  name: 'App',
  components: {
    MenuPage,
    SessionLearnMore,
    SessionAboutMe,
    SessionWhatIDo,
    SessionProjects,
    SessionForm,
    SessionFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

html, body {
  background-color: #1A1A1A;
  padding: 0;
  margin: 0;
}


h1, h2, h3 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
}
</style>
