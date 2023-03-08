<script setup>
</script>

<template>
  <div class="bar">
    <img alt="logo" src="https://cdn.ashless.net/logo/logo_transparent.png"/>
    <a href="/">
      <animated_text>Accueil</animated_text>
    </a>
    <a href="https://boutique.ashless.net" target="_blank">
      <animated_text>Boutique</animated_text>
    </a>
    <a href="https://reglement.ashless.net" target="_blank">
      <animated_text>Règlement</animated_text>
    </a>
    <a href="/nous-rejoindre">
      <animated_text>Nous rejoindre</animated_text>
    </a>
    <a href="https://wiki.ashless.net" target="_blank">
      <animated_text>Wiki</animated_text>
    </a>
    <a href="https://discord.ashless.net" target="_blank">
      <animated_text>Discord</animated_text>
    </a>
    <a href="https://statut.ashless.net" target="_blank">
      <animated_text>Statut</animated_text>
    </a>
  </div>
</template>

<style scoped>
.bar {
  position: static;
  display: flex;
  width: 100%;
  top: 0;
  margin: 0;
  overflow: hidden;
  max-height: 200px;
  background-color: #001e3f;
  z-index: 1;
  text-decoration: none;
  font-size: 1.5rem;
  height: inherit;
  vertical-align: middle;
  opacity: 0.99;
}

.bar img {
  margin-left: 20px;
  float: left;
  height: 100%;
}

.bar a {
  float: left;
  margin: auto;
  color: white;
}

.bar a:hover {
  text-shadow: 0 0 10px #fff;
  color: white;
  border-radius: 10px;
  background-color: transparent;
}

animated_text {
  width: auto;
  position: relative;
  border-radius: 50px;
  text-decoration: none;
  color: inherit;
}

animated_text:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #0076ff;
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}

animated_text:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media screen and (max-width: 800px) {
  .bar {
    height: 80px;
    font-size: 0.7rem;
  }
}
</style>
