<template>
  <div class="centralization">
    <div class="session-form">
      <h1>Get in Touch</h1>
      <h3>Lets work together</h3>

      <form action="/caminho_para_o_servidor" method="post">
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
        <select placeholder="Select a service" id="service" name="service">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
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
</style>
