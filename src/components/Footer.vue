<script setup lang="js">

let commitHash
try {
  commitHash = process.env.VUE_APP_COMMIT_HASH;
} catch (e) {
  commitHash = "Unknown";
}

window.addEventListener("click", () => {
  const footer = document.getElementById("h2");
  footer.innerHTML = commitHash;
});

export default {
  name: 'Footer',
  components: {
  }
}
</script>

<template>
  <footer>
    <p>Ashless Network &copy; 2023 - Tous droits réservés. <a href="https://github.com/Ashless-Network/Site-Internet" target="_blank">OpenSource</a></p>
    <div id="h2"></div>
  </footer>
</template>

<style scoped>
footer {
  color: white;
  position: sticky;
  display: flex;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  max-height: 100px;
  background-color: #001e3f;
  z-index: 1;
  text-decoration: none;
  font-size: 1.1rem;
  height: inherit;
}
footer p {
  margin: auto;
}
</style>