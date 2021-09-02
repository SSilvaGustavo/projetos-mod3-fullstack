import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      nome: "Capitão América: O primeiro vingador",
      imagemUrl:
        "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
    },
    {
      id: 2,
      nome: "Capitã Marvel",
      imagemUrl:
        "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
    },
    {
      id: 3,
      nome: "O incrivel Hulk",
      imagemUrl:
        "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
    },
    {
      id: 4,
      nome: "Homem de Ferro",
      imagemUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
    },
    {
      id: 5,
      nome: "Homem de Ferro 2",
      imagemUrl:
        "https://media.fstatic.com/SFp4c8GT3GTGYok7_526qDSHTns=/290x478/smart/media/movies/covers/2018/09/66432b37ed80464274a58239b695007f95c79155.jpg",
    },
  ]);

  const [nomeFilme, setNomeFilme] = useState(null);
  const [urlFilme, setUrlFilme] = useState(null);
  const [editando, setEditando] = useState(false);
  const [indexEditando, setIndexEditando] = useState(null);

  useEffect(() => {
    if (indexEditando !== null && editando) {
      setNomeFilme(filmes[indexEditando].nome);
      setUrlFilme(filmes[indexEditando].imagemUrl);
    }
  }, [indexEditando]);

  const handleFilmeChange = (evento) => {
    setNomeFilme(evento.target.value);
  };

  const handleUrlChange = (evento) => {
    setUrlFilme(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (editando) {
      const filmesAtualizados = filmes.map((filme, index) => {
        if (indexEditando === index) {
          filme.nome = nomeFilme;
          filme.imagemUrl = urlFilme;
        }
        return filme;
      });
      setFilmes(filmesAtualizados);
      setEditando(false);
      setIndexEditando(null);
    }
    const idAdd = filmes.length + 1;
    if (!nomeFilme || !urlFilme) {
      if (!nomeFilme && !urlFilme) {
        alert("Digite o nome e url do filme");
      } else if (!nomeFilme) {
        alert("Digite o nome do filme");
      } else {
        alert("Digite o url do filme");
      }
    } else {
      setFilmes([
        ...filmes,
        {
          id: idAdd,
          nome: nomeFilme,
          imagemUrl: urlFilme,
        },
      ]);
      console.log(handleSubmit);
      setNomeFilme("");
      setUrlFilme("");
    }
  };

  const handleDelete = (index) => {
    setFilmes(filmes.filter((filme, indexfilme) => index !== indexfilme));
  };

  return (
    <div className="Container">
      <h2>Cadastre meu filme</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          placeholder="Digite o Nome do Filme"
          type="text"
          value={nomeFilme}
          onChange={handleFilmeChange}
        ></input>
        <br />
        <label>URL da Imagem</label>
        <input
          placeholder="Digite o URL da Imagem"
          type="text"
          value={urlFilme}
          onChange={handleUrlChange}
        ></input>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <h1>Meus Filmes</h1>
      <ul>
        {filmes.map((f, index) => (
          <li key={index}>
            <h3>{f.nome}</h3>
            <img src={f.imagemUrl} alt={f.nome} />
            <br />
            <button type="button" onClick={() => handleDelete(index)}>
              Deletar
            </button>
            <button
              type="button"
              onClick={() => {
                setEditando(true);
                setIndexEditando(index);
              }}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
