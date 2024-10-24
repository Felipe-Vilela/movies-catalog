import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";


function Criar() {
  const [values, setValues] = useState({
    nome: "",
    genero: "",
    ano: ""
  });

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://671998e47fc4c5ff8f4ddc73.mockapi.io/users", values)
      .then((res) => {
        console.log(res);
        nav("/");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <div className=" bg-transparent border-collapse shadow-xl p-5 w-full max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-semibold text-stone-300 ">Criar Filme</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="nome" className="block mb-1 font-semibold">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="form-input border border-zinc-900 rounded-md w-full mt-2 px-3 py-2 focus:outline-none focus:ring-0"
              placeholder="Digite o nome do filme"
              onChange={(e) => setValues({ ...values, nome: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="genero" className="block mb-1 font-semibold">
              Gênero:
            </label>
            <input
              type="text"
              id="genero"
              name="genero"
              className="form-input border border-zinc-900 rounded-md w-full mt-2 px-3 py-2 focus:outline-none focus:ring-0"
              placeholder="Digite o gênero do filme"
              onChange={(e) => setValues({ ...values, genero: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="ano" className="block mb-1 font-semibold">
              Ano:
            </label>
            <input
              type="number"
              id="ano"
              name="ano"
              className="form-input  border border-zinc-900 rounded-md w-full mt-2 px-3 py-2 focus:outline-none focus:ring-0 "
              placeholder="Digite o ano do filme"
              onChange={(e) => setValues({ ...values, ano: e.target.value })}
            />
          </div>
          <div className="flex justify-center space-x-20">
            <Button variant="outline" className="bg-zinc-800 border-transparent"> Enviar </Button>
            <Button asChild variant="outline" className="bg-zinc-800 border-transparent">
              <Link to={"/"}>Voltar</Link>
            </Button>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Criar;
