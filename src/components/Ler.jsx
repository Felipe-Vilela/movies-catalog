import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Ler() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://671998e47fc4c5ff8f4ddc73.mockapi.io/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-transparent  border-collapse shadow-xl p-5 w-full max-w-3xl mx-auto mt-10">
        <h3 className="flex justify-center text-4xl mb-5 font-semibold text-stone-300">
          Detalhes do Filme
        </h3>

        <div className="flex items-center justify-evenly  mb-5">
          <div className="flex flex-col mr-10 text-slate-200 text-xl">
            <div className="mb-7">
              <strong>Nome:</strong> {data.nome}
            </div>
            <div className="mb-7">
              <strong>Gênero:</strong> {data.genero}
            </div>
            <div className="mb-7">
              <strong>Ano:</strong> {data.ano}
            </div>
          </div>
          <img
            src={`https://picsum.photos/id/${id + 1}/800/600?a=1`}
            alt="Descrição da imagem"
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            variant="outline"
            className="bg-zinc-800 border-transparent"
          >
            <Link to="/" className="text-white">
              Voltar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ler;
