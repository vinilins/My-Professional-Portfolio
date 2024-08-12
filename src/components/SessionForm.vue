<template>
  <div class="centralization">
    <div id="session-form" class="session-form">
      <h1>Get in Touch</h1>
      <h3>Lets work together</h3>

      <form action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" :value="accessKey">
        <input type="hidden" name="redirectTo" value="https://www.linkedin.com/in/vinilins/?locale=en_US">

        <label for="name">Name</label>
        <input placeholder="Full Name" type="text" id="name" name="name" />

        <label for="email">Email</label>
        <input
          placeholder="example@email.com"
          type="email"
          id="email"
          name="email"
        />

        <label for="service">Service</label>
        <select placeholder="Select a service" id="subject" name="subject">
          <option value="job_opportunity">Job Opportunity</option>
          <option value="freelance_work">Freelance Work </option>
        </select>

        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>

        <button class="btn-form" type="submit">Get in Touch</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionForm",
  computed: {
    accessKey() {
      return process.env.VUE_APP_STATIC_FORM_ACESS_KEY
    },
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

.session-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: start;
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
  margin: -15px 0 30px 0;
}

label {
  font:
    700 16px "Inter",
    sans-serif;
  margin: 12px 0 12px 0;
}

input,
select,
textarea,
option {
  padding: 0;
  text-indent: 15px;
  width: 100%;
  height: 50px;
  border: 1px solid #d6dded;
  background-color: transparent;
  border-radius: 5px;
  color: #ffffff;
  font:
    400 15px "Inter",
    sans-serif;
  transition: all 0.55s ease;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../assets/chevron-down.svg") no-repeat right center;
  background-position-x: calc(100% - 15px);
}

select:focus {
  color: #989da1;
  -webkit-transition: all 0.85s ease;
  -o-transition: all 0.85s ease;
  transition: all 0.85s ease;
}

option {
  background-color: #1a1a1a;
  padding: 10px;
}

textarea {
  height: 120px;
}

.btn-form {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  color: black;
  font:
    700 15px "Montserrat",
    sans-serif;
  margin-top: 10px;
}

.btn-form:hover {
  cursor: pointer;
  background-color: #bbbbbb;
  -webkit-transition: all 0.85s ease;
  -o-transition: all 0.85s ease;
  transition: all 0.85s ease;
}

@media only screen and (max-width: 730px) {
  h1 {
    line-height: 70px;
    margin-bottom: 30px;
  }
  .session-form {
    width: 70%;
  }
}
</style>
