import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Atualizar() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");

  const nav = useNavigate();

  const handleSubmitSearchID = async (e) => {
    e.preventDefault();
    setError(false);
    if (!id) {
      setError(true);
      return;
    }
    axios
      .get(`https://671998e47fc4c5ff8f4ddc73.mockapi.io/users/${id}`)
      .then((res) => {
        setData(res.data);
        setNome(res.data.nome);
        setGenero(res.data.genero);
        setAno(res.data.ano);
        setError(false);
      })
      .catch((err) => {
        setData(null);
        setError(true);
      });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!nome || !genero || !ano) {
      setError(true);
      return;
    }
    axios
      .put(`https://671998e47fc4c5ff8f4ddc73.mockapi.io/users/${id}`, {
        nome,
        genero,
        ano,
      })
      .then((res) => {
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-transparent border-collapse shadow-xl p-5 w-full max-w-3xl mx-auto mt-10">
        <h1 className=" flex justify-center text-4xl font-semibold text-stone-300">
          Buscar Id
        </h1>
        <form onSubmit={handleSubmitSearchID} className="mt-6 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <label
              htmlFor="id"
              className="flex justify-center text-lg font-semibold"
            >
              Id:
            </label>
            <input
              type="number"
              id="id"
              name="id"
              className="form-input border border-zinc-900 rounded-md w-auto mt-2 px-3 py-2 focus:outline-none focus:ring-0"
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
              variant="destructive"
              className="bg-zinc-800 border-transparent"
            >
              <Link to="/">Voltar</Link>
            </Button>
          </div>
        </form>

        {error ? (
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Alert variant="destructive" className="mt-10 max-w-sm max-h-sm">
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
          <div className=" flex flex-col items-center justify-center bg-transparent border-collapse p-5 w-full max-w-3xl mx-auto mt-10">
            <h1 className=" flex justify-center text-4xl font-semibold text-stone-300">
              Atualizar Filme
            </h1>
            <form onSubmit={handleUpdate} className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <label htmlFor="nome" className="block font-semibold">
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  className="form-input border border-zinc-900 rounded-md w-11/12 ml-2  px-3 py-2 focus:outline-none focus:ring-0"
                  placeholder="Digite o nome do filme"
                  onChange={(e) => setNome(e.target.value) } autoComplete="off"
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="genero" className="block font-semibold">
                  Gênero:
                </label>
                <input
                  type="text"
                  id="genero"
                  name="genero"
                  value={genero}
                  className="form-input border border-zinc-900 rounded-md w-auto px-3 py-2 focus:outline-none focus:ring-0"
                  placeholder="Digite o gênero do filme"
                  onChange={(e) => setGenero(e.target.value)} autoComplete="off"
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="ano" className="block font-semibold">
                  Ano:
                </label>
                <input
                  type="number"
                  id="ano"
                  name="ano"
                  value={ano}
                  className="form-input border border-zinc-900 rounded-md ml-6 w-auto px-3 py-2 focus:outline-none focus:ring-0"
                  placeholder="Digite o ano do filme"
                  onChange={(e) => setAno(e.target.value)}
                />
              </div>
              <div className="flex justify-center space-x-20">
                <Button
                  variant="outline"
                  className="bg-zinc-800 border-transparent"
                >
                  Enviar
                </Button>
                <Button
                  asChild
                  variant="destructive"
                  className="bg-zinc-800 border-transparent"
                >
                  <Link to={"/"}>Voltar</Link>
                </Button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Atualizar;
