let jogarNovamente = true;
let tentativas = 6;
let listaDinamica =[];
let palavraSecretaCategoria;
let palavraSecretaSorteada;



const palavras = [
    palavra001={
        nome :"IRLANDA",
        categoria : "LUGARES"
    },
    palavra002={
        nome : "EQUADOR",
        categoria : "LUGARES"
    },
    palavra003={
        nome : "BRASILIA",
        categoria : "LUGARES"
    },
    palavra004={
        nome : "BRASIL",
        categoria : "LUGARES"
    },
    palavra005={
        nome : "RUSSIA",
        categoria : "LUGARES"
    },
    palavra006={
        nome : "ITALIA",
        categoria : "LUGARES"
    },
    palavra007={
        nome : "VENEZUELA",
        categoria : "LUGARES"
    },
    palavra008={
        nome : "PORTUGAL",
        categoria : "LUGARES"
    },
    palavra009={
        nome : "CASA",
        categoria : "LUGARES"
    },
    palavra010={
        nome : "ESCOLA",
        categoria : "LUGARES"
    },
    palavra011={
        nome : "AVIAO",
        categoria : "TRANSPORTE"
    },
    palavra012={
        nome : "LANCHA",
        categoria : "TRANSPORTE"
    },
    palavra013={
        nome : "BARCO",
        categoria : "TRANSPORTE"
    },
    palavra014={
        nome : "BICICLETA",
        categoria : "TRANSPORTE"
    },
    palavra015={
        nome : "CARRO",
        categoria : "TRANSPORTE"
    },
    palavra016={
        nome : "MOTOCICLETA",
        categoria : "TRANSPORTE"
    },
    palavra017={
        nome : "TREM",
        categoria : "TRANSPORTE"
    },
    palavra018={
        nome : "MOBILETE",
        categoria : "TRANSPORTE"
    },
    palavra019={
        nome : "TELEFERICO",
        categoria : "TRANSPORTE"
    },
    palavra020={
        nome : "CAIAQUE",
        categoria : "TRANSPORTE"
    },
    palavra021={
        nome : "MACARRONADA",
        categoria : "COMIDA"
    },
    palavra022={
        nome : "PAO",
        categoria : "COMIDA"
    },
    palavra023={
        nome : "LULA",
        categoria : "COMIDA"
    },
    palavra024={
        nome : "CARANGUEIJO",
        categoria : "COMIDA"
    },
    palavra025={
        nome : "ARROZ",
        categoria : "COMIDA"
    },
    palavra026={
        nome : "OSTRA",
        categoria : "COMIDA"
    },
    palavra027={
        nome : "TOMATE",
        categoria : "COMIDA"
    },
    palavra028={
        nome : "BOLO",
        categoria : "COMIDA"
    },
    palavra029={
        nome : "FRUTA",
        categoria : "COMIDA"
    },
    palavra030={
        nome : "CARNE",
        categoria : "COMIDA"
    },
    palavra031={
        nome : "CACHORRO",
        categoria : "ANIMAIS"
    },
    palavra032={
        nome : "CALANGO",
        categoria : "ANIMAIS"
    },
    palavra033={
        nome : "ZEBRA",
        categoria : "ANIMAIS"
    },
    palavra034={
        nome : "LARGATIXA",
        categoria : "ANIMAIS"
    },
    palavra035={
        nome : "HIPOPOTAMO",
        categoria : "ANIMAIS"
    },
    palavra036={
        nome : "PERIQUITO",
        categoria : "ANIMAIS"
    },
    palavra037={
        nome : "AVESTRUZ",
        categoria : "ANIMAIS"
    },
    palavra038={
        nome : "DROMEDARIO",
        categoria : "ANIMAIS"
    },
    palavra039={
        nome : "CAMELO",
        categoria : "ANIMAIS"
    },
    palavra040={
        nome : "SAPO",
        categoria : "ANIMAIS"
    },
    palavra041={
        nome : "ALUNO",
        categoria : "TEM NA ESCOLA"
    },
    palavra042={
        nome : "CADERNO",
        categoria : "TEM NA ESCOLA"
    },
    palavra043={
        nome : "SINO",
        categoria : "TEM NA ESCOLA"
    },
    palavra044={
        nome : "DIARIO",
        categoria : "TEM NA ESCOLA"
    },
    palavra045={
        nome : "NOTA",
        categoria : "TEM NA ESCOLA"
    },
    palavra046={
        nome : "LIVROS",
        categoria : "TEM NA ESCOLA"
    },
    palavra047={
        nome : "CANTINA",
        categoria : "TEM NA ESCOLA"
    },
    palavra048={
        nome : "QUADRO",
        categoria : "TEM NA ESCOLA"
    },
    palavra049={
        nome : "PROFESSORA",
        categoria : "TEM NA ESCOLA"
    },
    palavra050={
        nome : "GIZ",
        categoria : "TEM NA ESCOLA"
    },

    palavra051={
        nome : "LA CASA DE PAPEL",
        categoria : "TV E CINEMA"
    },

    palavra052={
        nome : "HOMEM ARANHA",
        categoria : "TV E CINEMA"
    },

    palavra053={
        nome : "O REI DO GADO",
        categoria : "TV E CINEMA"
    },

    palavra054={
        nome : "MULHER MARAVILHA",
        categoria : "TV E CINEMA"
    },

    palavra055={
        nome : "O INCRIVEL HULK",
        categoria : "TV E CINEMA"
    },

    palavra056={
        nome : "BOB ESPONJA",
        categoria : "TV E CINEMA"
    },

    palavra057={
        nome : "TROPA DE ELITE",
        categoria : "TV E CINEMA"
    },

    palavra058={
        nome : "MINHA MAE E UM PECA",
        categoria : "TV E CINEMA"
    },

    palavra059={
        nome : "TELA QUENTE",
        categoria : "TV E CINEMA"
    },

    palavra060={
        nome : "CASA MONSTRO",
        categoria : "TV E CINEMA"
    },



];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras [indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)


}
montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0;i <palavraSecretaSorteada.length; i++){
        if (listaDinamica[i]== undefined){
            if(palavraSecretaSorteada[i]== " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+listaDinamica[i] + "</div>"

            }

            else{
                listaDinamica[i]="&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i] + "</div>"
            }
            
        }

        else{
            if(palavraSecretaSorteada[i]== " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+listaDinamica[i] + "</div>"
            }
            else
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i] + "</div>"
        }
    }

}

function verificarLetraEscolhida(letra){
    document.getElementById("teclas-" + letra).disabled = true;
    if (tentativas > 0)
{
    mudarStyleLetra("teclas-" + letra,false);
    comparalistas(letra);
    montarPalavraNaTela();
    }
}
function mudarStyleLetra(tecla,condicao){

    if(condicao==false)
    {
        document.getElementById(tecla).style.background = "#c71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
    document.getElementById(tecla).style.color = "#ffffff";
    }
}


async function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas==0){
            abreModal("OPS!", "Não foi dessa vez .... A palavra secreta era <br>" + palavraSecretaSorteada);
            piscarBotaoJogarNovamente()
        }
    } 
    else{
        mudarStyleLetra("teclas-" + letra,true);
     for(i= 0; i <palavraSecretaSorteada.length; i++){
if(palavraSecretaSorteada[i]== letra){
    listaDinamica[i]=letra;
            }
        }
    }

    let vitoria = true;
    for(i=0; i<palavraSecretaSorteada.length;i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria=false;

        }
    }
    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu!!!");
    tentativas=0;
    piscarBotaoJogarNovamente()
    }
}

async function piscarBotaoJogarNovamente(){
    while (jogarNovamente==true) {
        document.getElementById("btnReiniciar").style.backgroundColor='red';
        document.getElementById("btnReiniciar").style.scale=1.3;
        await atraso(500)
        document.getElementById("btnReiniciar").style.backgroundColor='yellow';
        document.getElementById("btnReiniciar").style.scale=1.3;
        await atraso(500)
    }
}

async function atraso(tempo){
    return new Promise (x =>setTimeout(x, tempo))
}

function carregaImagemForca(){
switch(tentativas){
case 5:
    document.getElementById("imagem").style.background="url('./img/forca01.png')";
    break;
    case 4:
        document.getElementById("imagem").style.background="url('./img/forca02.png')";
        break;
        case 3:
            document.getElementById("imagem").style.background="url('./img/forca03.png')";
            break;
            case 2:
    document.getElementById("imagem").style.background="url('./img/forca04.png')";
    break;
    case 1:
    document.getElementById("imagem").style.background="url('./img/forca05.png')";
    break;
    case 0:
    document.getElementById("imagem").style.background="url('./img/forca06.png')";
    break;
    default:
    document.getElementById("imagem").style.background="url('./img/forca.png')";
    break

}


}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText=titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML =  mensagem;
    $("#myModal").modal({
        show:true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
location.reload();
});
