<script lang="ts" setup>
</script>

<template>
  <div class="presentation">
    <h1>Ashless Network</h1>
    <p>C'est un serveur minecraft network orienté RPG. Nous sommes actuellement en phase de développement.</p>
    <p>Lis les actualités pour plus d'informations et connaitre le fil des évènement.</p>
    <p>Rejoins le <a href="https://discord.ashless.net" target="_blank">discord</a> pour être tenu au courant.</p>
  </div>
  <br><br>
  <div class="presentation">
    <h1>Actualités</h1>
    <div class="news">
      <date>05/03/2023 19:30</date>
      <h1>On recrute !</h1>
      <p>Nous recherchons actuellement des développeurs, buildeurs, modérateurs et/ou scripteurs !</p>
      <p>En tant que développeur, vous assurerez la résolution de bug, l'ajout de fonctionnalités avec l'api
        spigot/velocity ou encore en TS/JS pour des api. Il est important d'avoir
        un minimum d'expérience avec les particules/des bases de données/api.</p>
      <p>En tant que buildeur, vous construirez un environnement adapté au serveur.</p>
      <p>En tant que modérateur, vous devrez bannir/mute les personnes ne respectant pas le règlement.</p>
      <p>Vous pouvez cumuler maximum 2 postes, sauf si vous êtes de l'administration.</p>
    </div>
    <br><br>
    <div class="news">
      <date>28/02/2023 19:55</date>
      <h1>Ashless mais keskesé ?</h1>
      <p>Nous sommes actuellement en train de commencer le développement du serveur et son fonctionnement, on vous tient
        au courant !</p>
    </div>
  </div>
</template>

<style scoped>

* {
  margin: 0;
}

date {
  font-size: 0.9rem;
  align-self: flex-end;
  float: right;
  position: absolute;
  color: #e0e0e0;
}

.presentation {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #001e3f;
  color: white;
  padding: 40px;
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
  padding: 30px;
}

@media (max-width: 800px) {
  date {
    font-size: 0.7rem;
  }
}

</style>
