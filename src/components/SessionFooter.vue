<template>
  <div class="session-footer">
    <div class="line line-up">
      <h1>{{ $t("sessionFooter.actionCallPart1") }}<br />{{ $t("sessionFooter.actionCallPart2") }}</h1>

      <a
        href="mailto:viniciusaclins@gmail.com"
        class="btn-send-email"
        target="_blank"
        rel="noopener"
      >
        <img src="../assets/gmail-icon.svg" alt="Gmail" />
        viniciusaclins@gmail.com
      </a>
    </div>

    <div class="division"></div>

    <div class="line line-down">
      <p class="footer-text">{{ $t("sessionFooter.text") }}</p>

      <ul class="footer-links">
        <li>
          <a
            class="social-links"
            href="https://www.linkedin.com/in/vinilins/?locale=en_US"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/linkedin-icon.svg" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            class="social-links"
            href="https://github.com/vinilins"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/github-icon.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionFooter",
}
</script>

<style scoped>
.session-footer {
  display: flex;
  flex-direction: column;
  margin-top: 200px;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5% 0% 5%;
}

.line-down {
  margin-bottom: 50px;
}

h1 {
  font:
    500 63px "Inter",
    sans-serif;
  color: #dedede;
  text-align: justify;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.division {
  width: 100%;
  height: 1px;
  background-color: #484e53;
  margin: 40px 0 40px 0;
}

.btn-send-email {
  border: #484e53 2px solid;
  border-radius: 15px;
  width: 310px;
  height: 75px;
  font:
    400 20px "Inter",
    sans-serif;
  color: #c9c9c9;
}

.btn-send-email img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.footer-text {
  font:
    400 16px "Inter",
    sans-serif;
  color: #a9a9a9;
  margin: 0;
}

.footer-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 310px;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.social-links {
  border-radius: 50%;
  border: 2px solid #484e53;
  width: 32px;
  height: 32px;
  margin: 0 10px 0 10px;
}

@media only screen and (max-width: 1350px) {
  .line-up h1 {
    font-size: 50px;
  }

  .btn-send-email {
    width: 250px;
    height: 60px;
    font-size: 16px;
  }
}

@media only screen and (max-width: 850px) {
  .line-up h1 {
    font-size: 40px;
  }

  .btn-send-email {
    font-size: 13px;
    width: 220px;
    height: 50px;
  }

  .btn-send-email img {
    width: 20px;
    height: 20px;
  }
}

@media only screen and (max-width: 670px) {
  .line-up {
    flex-direction: column;
    align-items: center;
  }

  .line-up h1 {
    font-size: 50px;
    margin-bottom: 40px;
    text-align: center;
  }

  .btn-send-email {
    width: 250px;
    height: 60px;
    font-size: 16px;
  }
}
</style>
