<script setup lang="js">
export default {
  computed: {
    commitHash() {
      try {
        let commitHash = process.env.VUE_APP_COMMIT_HASH;
        if (commitHash === undefined) return "Unknown";
        return commitHash;
      } catch (e) {
        return "Commit hash not found";
      }
    },
  }
};
</script>

<template>
  <div class="footer">
    <p>Ashless Network &copy; 2023 - Tous droits réservés.</p>
    <p><a href="https://github.com/Ashless-Network/Site-Internet" target="_blank">OpenSource</a>
    @
    <a :href="'https://github.com/Ashless-Network/Site-Internet/commit/' + commitHash" target="_blank">{{ commitHash }}</a>
    </p>
  </div>
</template>

<style scoped>
.footer {
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
.footer p {
  margin: auto;
}
</style>