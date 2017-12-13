<template>
  <footer>
    <div>
      <p class="contato-endereco">Contato</p>
      <ul class="endereco">
        <li class="endereco-item">Rua Gomes Lopes, 12 fundos</li>
        <li class="endereco-item">Morro dos Prazeres - Santa Teresa, RJ</li>
      </ul>
      <ul class="contato-info">
        <li class="contato-tel"><img class="img-contato" src="../assets/telefone.svg">+55 21 99227-6574</li>
        <li class="contato-social"><img class="img-contato" src= "../assets/facebook.svg"> facebook.com/Reciclacao</li>        
      </ul>      
    </div>
    <div>
      <p class="projetos-desen">Projetos Relacionados</p>
      <ul class="projetos">
        <li class="projetos-item">Jovens Construtores - Morro do Prazeres</li>
        <li class="projetos-item">Núcleo de Desenvolvimento Econômico Sustentável</li>
        <li class="projetos-item">Rede Potencializa Lucas do Rio Verde</li>
        <li class="projetos-item">Centrais de Triagem de Material Reciclável</li>
        <li class="projetos-item">Rede Potencializa Querência</li>
      </ul>
    </div>
  <div class="footer">
    <div class="parceiro">
      <p class="parceiro-info">Parceiros</p>
    </div>
    <div class="footer-parceiro">
      <ul>
        <li>BrasilPet</li>
        <li>COMLURB</li>
        <li>Instituto BRF</li>  
        <li>ENACTUS/CEFET-RJ</li>
        <li>US Environmental Protection Agency - EPa</li>
      </ul>
    </div>
    <div class="footer-parceiro2">
      <ul>
        <li>CEDAPS</li>
        <li>SMAC</li>
        <li>Recicoleta</li>  
        <li>Grupo PROA</li>
      </ul>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'hello',
  data () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  
}

footer{
  background: #303030;
  text-align: left;
}
  /*@media (max-width: 1024px){
footer{
    width: 100%;
    display: flex;*/
  

.contato-endereco{
  color: #85C226;
  font-size: 1.45em;
  margin-left: 15px;
  font-family: 'Roboto Slab', bold;;
}

.endereco-item{
  color: #85C226;
  font-size: 1.25em;
  font-family: 'Roboto Slab';
}
.contato-tel{
  color: #85C226;
  font-size: 1.45em;
  font-family: 'Roboto Slab', lighter;
}
.img-contato{
  width: 4%;
  margin-left: 10px;
  margin-right: 15px;
}

.contato-social{
  color:#E67816;
  font-size: 1.45em;
  font-family: 'Roboto Slab', lighter;
}

.projetos-desen{
  color: #85C226;
  font-size: 1.45em;
  margin-left: 15px;
  font-family: 'Roboto Slab',bold;
}

.projetos-item{
  color: #85C226;
  font-size: 1.05em;
  margin-left: 15px;
  font-family: 'Roboto', thin;
}

.parceiro{
  display: flex;
  width: 80%;
  font-size:11px;
  line-height: 1,5em;

}
ul{
  margin-left: 0;
  list-style: none;
  color: #85C226;
  font-size: 11px; 
}
.projetos{
  color:#85C226;
  line-height: 2em; 
}
.parceiro-info{
  color: #85C226;
  font-size: 1.45em;
  margin-left: 15px;
  font-family: 'Roboto Slab', bold;;
}

.footer{
  display: flex;
  flex-direction: column;
}

.footer-parceiro{
  width: 80%;
  color: #E67816;
  font-size: 11px;
  line-height: 1,5em;
  display: flex;
  flex-direction: column;

}
.footer-parceiro2{
  color: #E67816;
  font-size: 11px;
  display: flex;
}
</style>
