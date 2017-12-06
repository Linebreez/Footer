<template>
  <footer>
    <div>
    <p class="contato-edereco">Contato</p>
      <ul>
        <li>Rua Gomes Lopes, 12 fundos</li>
        <li>Morro dos Prazeres - Santa Teresa, RJ</li>
      </ul>
      <ul class="contato-info">
        <li>+55 21 99227-6574</li>
        <li>facebook.com/Reciclacao</li>        
      </ul>      
    </div>
    <div>
    <p class="contato-info">Projetos Relacionados</p>
      <ul class="projetos">
        <li>Jovens Construtores - Morro do Prazeres</li>
        <li>Núcleo de Desenvolvimento Econômico Sustentável</li>
        <li>Rede Potencializa Lucas do Rio Verde</li>
        <li>Centrais de Triagem de Material Reciclável</li>
        <li>Rede Potencializa Querência</li>
      </ul>
    </div>
    <div>
    <p class="contato-info">Parceiros</p>
      <ul class="footer-parceiro">
        <li>BrasilPet</li>
        <li>COMLURB</li>
        <li>Instituto BRF</li>  
        <li>ENACTUS/CEFET-RJ</li>
        <li>US Environmental Protection Agency - EPa</li>
      </ul><ul class="footer-parceiro">
        <li>CEDAPS</li>
        <li>SMAC</li>
        <li>Recicoleta</li>  
        <li>Grupo PROA</li>
      </ul>
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
.contato-endereco{
  color: #85C226;
  font-size: 18px;
  margin-left: 15px;
}

.conato-info{

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

.footer-parceiro{
color: #E67816;
font-size: 11px;
line-height: 1,5em;
display: flex;
flex-direction: column;
text-align: left;
}
</style>
