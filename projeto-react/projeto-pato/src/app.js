import React, { useState, useEffect } from "react";
import "./app.css";

export default function App(props) {
  const [pato, setPato] = useState([
    {
      id: 1,
      nome: "Pato",
      imagemUrl:
        "https://t1.uc.ltmcdn.com/pt/images/3/7/6/img_o_que_significa_pagar_o_pato_23673_orig.jpg",
      descrip: "Pato clássico, primogênito de todas as linhas de patos do universo, sua fala é um presente, sua decisão é a verdade absoluta, suas ações são exemplos, seu aniversário é feriado mundial, suas penas são tesouro nacional, seu bico é mais valioso que diamante, ele é o rei de todos."
      
    },
    {
      id: 2,
      nome: "Pato Maromba",
      imagemUrl:
        "https://pbs.twimg.com/media/EbESYZDXQAg8fLx.jpg",
      descrip: "Pato maromba, após anos de treino e treino na lagoa onde nasceu, o pato maromba é o pato mais forte de todo o Pato-Verso, seu soco é capaz de abrir um buraco no espaço-tempo, existe teorias que a tatuagem que ele tem em seu braço é de um tubarão que tentou caça-lo, isso mesmo, tentou...",
    },
    {
      id: 3,
      nome: "Pato Joinha",
      imagemUrl:
        "https://i.pinimg.com/474x/61/0f/66/610f66af829153952f1335e7dbd2d128.jpg",
      descrip: "Pato Joinha, o pato amigo de tudo e todos, sua energia e bom otimismo exala no ambiente que ele estiver, fazendo seus adversários virarem seu amigos, dizem que o Pato Joinha foi capaz de acabar com uma guerra apenas mostrando um Joinha para um exercito de 30 mil tigres",
    },
    {
      id: 4,
      nome: "Pato Descolado",
      imagemUrl:
        "https://pbs.twimg.com/profile_images/1191700661534113792/L-0AAKXP_400x400.jpg",
      descrip: "Pato Descolado, o pato mais descolado de todo o Pato-Verso, criador de todos os trajes que os Pato-Herois usam em suas batalhas, seus óculos escuros tecnológico é capaz de dar a incrível habilidade de olhar para uma lâmpada fosforescente por 30 segundos, sua jaqueta de couro de mamute é capaz de aguentar temperaturas igual a de um freezer de geladeira.",
    },
    {
      id: 5,
      nome: "Pato HangLoose",
      imagemUrl: "https://pbs.twimg.com/media/EhffO7rXsAIlnZa.jpg",
      descrip: "Pato HangLoose,  criado nas lagoas do Havai o pato hangloose é o pato mais jovens dentre todos os patos no pato-verso, suas habilidades com as mãos faz dele o guerreiro mais ágil de todo o Pato-Verso, os oponentes se sentem pressionados ao ver a sua técnica secreta, 'O HangLoose'.",
    },
    {
      id: 6,
      nome: "Pato Agiota",
      imagemUrl:
        "https://pbs.twimg.com/profile_images/1317511782244679691/DMjJL-S7_400x400.jpg",
      descrip: "Pato Agiota, não queira dever nada para este pato, o mais cruel e perspicaz pato de todo o Pato-Verso, capaz de fazer o caos cair sobre sua vida se você dever para ele e seus clientes qualquer valor, seja em dinheiro, legumes, sementes ou cereais. O pato agiota é tão temido por outros patos que o mesmo virou lenda para os patos da região, 'Não deverás, senão o Pato Agiota ti cobrarás'.",
    },
    {
      id: 7,
      nome: "Pato Armado",
      imagemUrl:
        "http://images7.memedroid.com/images/UPLOADED915/5f280a4a19531.jpeg",
      descrip: "Pato Armado, o portador do maior arsenal armamenticio de todo o Pato-Verso, o pato armado é capaz de manusear todas as armas de fogo com perfeição, também conhecido como pato tiro certo, reza a lenda que o pato armado matou um gavião localizado no monte Evereste com apenas um tiro vindo de sua lagoa localizado Texas.",
    },
    {
      id: 8,
      nome: "Pato Pe de Pato",
      imagemUrl:
      "https://pbs.twimg.com/ext_tw_video_thumb/1235604385952133120/pu/img/Kc0kGQVeoChJ4YAQ.jpg",
      descrip: "O Pato Pé de Pato, é o pato mais veloz de todo o Pato-Verso, seu Pé de pato faz o Pato pé de pato, corre 4 vezes mais rapido do que um pato comum, dizem Pato Pé de Pato herdou seu pé de pato das unhas encravadas do incrivei Rei Pato Pé de Pato, se você acha que usar um pé de pato vai fazer você ser tão veloz como o Pato pé de pato, você está enganado pois o pé de pato do Pato Pé de Pato é o unico pé de pato capaz de dar ao Pato Pé de Pato sua velocidede incrivel."
    }
  ]);

  return (
    <main id="container">
      <div id="patos">
        <ul>
          {pato.map((pato, index) => (
            <li id="list" key={index}>
              <h2 id="namePato">{pato.nome}</h2>
              <img id="imgPato" src={pato.imagemUrl} alt={pato.nome} />
              <div id="description">
              <p id="descripPato">{pato.descrip}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export function Pato() {
  return (
    <div id="bemvindo">
      <p id="bemvindo">Bem vindo ao Pato -</p><p id="verso">Verso</p>
    </div>
  );
}

export function Button(props) {
    const [button, setButton] = useState(0);

    useEffect(() =>{

    })
    if(button === 10){
      document.getElementById("video").style.display = "flex"
      document.getElementById("videobtn").style.display = "block"
    }else if(button === 20){
      document.getElementById("video1").style.display = "flex"
    }else if(button === 50){
      document.getElementById("video1").style.display = "none"
      document.getElementById("video2").style.display = "flex"
    }else if(button === 100){
      document.getElementById("video2").style.display = "none"
      document.getElementById("video3").style.display = "flex"
      setTimeout(() => {
        window.location.reload();
      }, 1500)
    }

  return (
    <main className="mainButton" id="buttonMain">
        <div id="button">
        <p>Contagem de </p><p id="quack">Quacks</p><p>: {button}</p>
        </div>
      <button id="button" onClick={() => setButton(button + 1)}>Quack</button>
      <p id="video">Voce desbloqueou o video proibido!</p>
      <p id="video1">Nao tem mais nada aqui, pode ir embora!</p>
      <p id="video2">TA CLICANDO AINDA CARA, VAI EMBORA!</p>
      <p id="video3">EU AVISEI!</p>
      <button className="btnVideo" id="videobtn" onClick={() => {document.getElementById("videoframe").style.display="flex";
      alert("AVISO!\nEste video contem cenas que podem afetar os niveis de sanidade mental. \nCaso queira prosseguir, os riscos serão totalmente atribuidos ao usuario vigente.");
      document.getElementById("video").style.display = "none";
      document.getElementById("videobtn").style.display = "none";
      document.getElementById("buttonMain").style.marginBottom = "-20rem"}}>Desbloquear</button>
      <iframe id="videoframe" src="https://www.youtube.com/embed/qlkExqMecco?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </main>   
  );
}