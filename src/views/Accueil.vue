<script setup lang="ts">
</script>

<template>
  <main>
    <div class="presentation">
      <h1>Ashless Network</h1>
      <p>C'est un serveur minecraft network orienté RPG. Nous sommes actuellement en phase de développement.</p>
      <p>Rejoins le discord pour être tenu au courent.</p>
    </div>
    <br><br>
    <div class="presentation">
      <h1>Actualités</h1>
      <div class="news">
        <h1>...</h1>
        <p>...</p>
      </div>
      <br><br>
      <div class="news">
        <h1>...</h1>
        <p>...</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
}

.presentation {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #001e3f;
  color: white;
  padding: 38px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

p {
  transform: translateX(15px);
  font-size: 1.2rem;
}

.news {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #0b2a52;
  border-radius: 20px;
  padding: 38px;
}

</style>
