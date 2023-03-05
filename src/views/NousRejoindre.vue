<script>
export default {
  methods: {
    copy() {
      const el = document.createElement('textarea');
      el.value = 'mc.ashless.net';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Copié dans le presse-papier !');
    }
  }
};
</script>

<template>
  <div class="presentation-left">
    <h1>Rejoignez-nous !</h1>
    <ul>
      <li>Lancez votre minecraft en version crack ou premium 1.19.3, Fabric avec Sodium est recommandé.</li>
      <li>
        <button class="button" @click="copy">Copiez l'addresse du serveur</button>
      </li>
      <li>Ajoutez un serveur minecraft</li>
      <li>Collez l'adresse</li>
      <li>Validez</li>
      <li>Connectez-vous</li>
    </ul>
    <br>
    <h2>C'est votre première connexion ?</h2>
    <ul>
      <li>Enregistrez vous avez un mot de passe</li>
      <li>Changez de mode de connexion avec la commande /connexion si vous souhaitez passer en premium</li>
      <li>Reconnectez vous pour appliquer les changements</li>
      <li>Si un jour vous souhaitez changer de mot de passe, utilisez la commande /changepassword, de même pour le type
        de connexion avec /connexion
      </li>
    </ul>
  </div>
  <div class="presentation-right">
    <h1>Nos liens</h1>
    <ul>
      <li><a href=https://discord.ashless.net target="_blank">Discord</a></li>
      <li><a href=https://github.com/Ashless-Network target="_blank">Github</a></li>
    </ul>
  </div>
  <div class="presentation-right">
    <h1>Problème de connexion ?</h1>
    <ul>
      <li>Regardez le statut du serveur sur <a href="https://status.ashless.net" target="_blank">la page de statut et
        d'incidents</a></li>
      <li>Faites un ticket sur discord si votre problème persiste après plusieurs tentatives.</li>
    </ul>
  </div>
</template>

<style scoped>
.button {
  background-color: #0e01af;
  color: white;
  border-radius: 16px;
  padding: 12px;
  border: none;
  font-size: 1.4rem;
}

.button:hover {
  background-color: #018109;
  box-shadow: 0 0 10px #018109;
}

.presentation-left {
  float: left;
  width: 49%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #001e3f;
  color: white;
  padding: 40px;
}

.presentation-right {
  margin-top: 20px;
  margin-left: 2%;
  float: right;
  width: 49%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #001e3f;
  color: white;
  padding: 40px;
}

h1 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

p, li {
  transform: translateX(15px);
  font-size: 1.6rem;
}

@media (max-width: 800px) {
  .presentation-left {
    float: none;
    width: 100%;
  }

  .presentation-right {
    margin-top: 20px;
    margin-left: 0;
    float: none;
    width: 100%;
  }
}
</style>
