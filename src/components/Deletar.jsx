import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Deletar() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const nav = useNavigate();

  const handleSubmitSearchID = (e) => {
    e.preventDefault();
    setError(false);
    setData(null); 
    setImageSrc(""); 

    if (!id) {
      setError(true);
      return;
    }

    axios
      .get(`https://671998e47fc4c5ff8f4ddc73.mockapi.io/users/${id}`)
      .then((res) => {
        setData(res.data);
        setImageSrc(`https://picsum.photos/id/${id + 1}/800/600?a=1`); 
        setError(false);
      })
      .catch((err) => {
        setData(null);
        setImageSrc(""); 
        setError(true);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-transparent border-collapse shadow-xl p-5 w-full max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-semibold text-stone-300">Buscar Id</h1>
        <form onSubmit={handleSubmitSearchID} className="mt-6 space-y-4">
          <div>
            <label htmlFor="id" className="block mb-1 font-semibold">
              Digite o id:
            </label>
            <input
              type="number"
              id="id"
              name="id"
              className="form-input border border-zinc-900 rounded-md w-full mt-2 px-3 py-2 focus:outline-none focus:ring-0"
              placeholder="Digite o id do usuário"
              onChange={(e) => setId(e.target.value)} 
            />
          </div>
          <div className="flex justify-center space-x-20">
            <Button
              variant="outline"
              className="bg-zinc-800 border-transparent"
              type="submit"
            >
              Procurar
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-zinc-800 border-transparent"
            >
              <Link to="/">Voltar</Link>
            </Button>
          </div>
        </form>

        {error ? (
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Alert
                variant="destructive"
                className="mt-10 max-w-sm max-h-sm"
              >
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>O Id não foi encontrado!</AlertDescription>
              </Alert>
            </div>
            <div className="mt-5 flex justify-center">
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
        ) : data ? (
          <div className="flex flex-col items-center justify-center bg-zinc-900 p-5 mt-5">
            <div className="bg-transparent w-full max-w-3xl mx-auto">
              <h3 className="flex justify-center text-4xl mb-5 font-semibold text-stone-300">
                Detalhes do Filme
              </h3>

              <div className="flex items-center justify-evenly mb-5">
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
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Descrição da imagem"
                    className="w-1/2 h-auto rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Deletar;
