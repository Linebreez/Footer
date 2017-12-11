<template>
 <section>
	<div class="ciclo">
	<h2>Ciclo 
	Sustentável</h2>
	</div>
	<div class="pai">
	<div class="mae">
	<div class="texto">
		<p>Pontos de coleta
	seletiva espalhados
	pela comunidade</p><img src="../assets/seta_direita.svg">
	</div>
	<div class="texto">
		<p>Conscientização,
	Educação ambiental e
	Mobilização comunitária</p><img src="../assets/seta_cima.svg">
	</div>
	<div class="texto">
		<p>Realização de ações
	e projetos
	socioambientais
	na comunidade</p><img src="../assets/seta_cima.svg">
	</div>
	</div>
	<div class="mae2">
	<div class="texto">
		<p>Separação, organização
	e transporte dos materiais
	para recicladoras</p><img src="../assets/seta_baixo.svg">
	</div>
	<div class="texto">
		<p>Venda dos materiais para
	recicladoras parceiras
	com custo mínimo</p><img src="../assets/seta_baixo.svg">
	</div>
	<div class="texto">
		<p>Fundo financeiro
	gerado pela
	venda dos materiais</p><img src="../assets/seta_esquerda.svg">
	</div>
	</div>
	</div>
 </section>
</template>

<script>
export default {
  name: 'ciclo',
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

 section{
 	background-color: #0E9347;
 	display: block;
 	
}

 .ciclo{
 	box-sizing: border-box;
  	margin: 0 auto;
  	padding: 0 auto;
  	width:  236px;
  	height: 110px;
  	size: 42px;
 	color: #FFFFFF;

 }
.pai{
	display: flex;
	flex-direction: column;
}
/*.mae{
margin: 0 auto;
padding: 0 auto;
display: flex;
flex-direction: column;
}	

.mae2{
	margin: 0 auto;
padding: 0 auto;
display: flex;
flex-direction: column;
}*/
 .texto{
 	color:#FFF974;
 	width: 114.98px;
 	height: 60.27px;
 	size:11px;
 	
 }

 .img{
 	width: 22.13px;
 	height:48.29px; 
 	color: #78C7A1;
 	opacity: 100%;

}
</style>
