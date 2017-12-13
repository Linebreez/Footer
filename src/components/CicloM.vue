<template>
<section id="cicloM">
	<h2 class="cicloM-title">Ciclo<br>Sustentável</h2>
	<div class="cicloM-div">
		<div class="cicloMDiv-item">
			<p class="cicloMDivItem-topico">
				Pontos de coleta seletiva espalhados pela comunidade
			</p>
			<img class="cicloMDivItem-seta" src="../assets/seta_cima.svg">
			<p class="cicloMDivItem-topico">
				Conscientização, Educação ambiental e Mobilização comunitária
			</p>
			<img class="cicloMDivItem-seta" src="../assets/seta_cima.svg">
			<p class="cicloMDivItem-topico">
				Realização de ações e projetos socioambientais na comunidade
			</p>
			<img class="cicloMDivItem-setaEsq"  src="../assets/seta_esquerda.svg">
		</div>
		<div class="cicloMDiv-item">
			<img class="cicloMDivItem-setaDir"  src="../assets/seta_direita.svg">
			<p class="cicloMDivItem-topico">Separação, organização e transporte dos materiais para recicladoras</p>
			<img  class="cicloMDivItem-seta" src="../assets/seta_baixo.svg">
			<p class="cicloMDivItem-topico">Venda dos materiais para	recicladoras parceiras com custo mínimo</p>
			<img class="cicloMDivItem-seta" src="../assets/seta_baixo.svg">
			<p class="cicloMDivItem-topico">Fundo financeiro	gerado pela venda dos materiais</p>
			<!-- <img src="../assets/seta_esquerda.svg"> -->
		</div>
	</div>
 </section>
</template>

<script>
export default {
  	name: 'ciclo',
  	data() {
  		return{

  		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*body{
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #0E9347;
  width: 100%;
  height: 100%; 	
 }*/
 	
#cicloM{
 	width: 100%;
 	height: 100%; 	
 	background-color: #0E9347;
 	padding: 15% 10%;
}

.cicloM-title{
	width: 100%;
	height: 20vh;
	padding: 10%;
 	margin-bottom: 65px;
  	font-family: "Times New Roman", Times, serif;
  	font-size: 42px;
 	color: #FFFFFF;
 	text-align: center;
 	display: flex;
 	align-items: center;
 	justify-content: center;
}
@media (max-width: 1024px){
  .cicloM-title{
  		color: #FFF;
  }
}
.cicloM-div{
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
		
	/*background-color: red;*/
}
.cicloMDiv-item{
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 0.65em;
}
.cicloMDivItem-setaDir{
	position: absolute;
	top: 20px;
	left: 40%;
	width: 48px;
}
.addSetaDir::after{
	content: url(../assets/seta_direita.svg);
	position: relative;
	max-width: 10px;
}

.cicloMDivItem-setaEsq{
	position: absolute;
    left: 38%;
    width: 48px;
    bottom: 23px;
}

.cicloMDivItem-topico{
 	width: 100%;
 	margin: 13px 0;
 	font-family: "adobe-clean", sans-serif;
 	font-weight: bold;
 	color:#FFF974;
 	text-align: left;
 	line-height: 1.25em;
}
.cicloMDivItem-seta{
	width: 22.13px;
 	height:48.29px; 
}
</style>
