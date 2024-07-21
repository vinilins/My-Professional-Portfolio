<template>
  <button :style="{ color: textColor, font: font }" class="btn-secondary">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonSecondary",
  props: {
    text: String,
    textColor: {
      type: String,
      default: "#A9A9A9",
    },
    font: {
      type: String,
      default: "400 12px Inter, sans-serif",
    },
  },
}
</script>

<style scoped>
.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 35px;
  border: 1px solid #484e53;
  font:
    400 12px "Inter",
    sans-serif;
  border-radius: 30px;
  background-color: transparent;
}

.btn-secondary:hover {
  cursor: pointer;
  background-color: #484e53;
  color: #fff;
}
</style>
