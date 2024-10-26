import React, { useEffect, useState,} from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, useNavigate } from "react-router-dom";

function Inicio() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://671998e47fc4c5ff8f4ddc73.mockapi.io/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRowClick = (id) => {
    navigate(`/ler/${id}`);};



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      <h1 className=" mt-10 text-4xl font-semibold text-stone-300">
        Lista de Filmes
      </h1>
      <div className=" bg-transparent   border-collapse shadow-xl p-5 w-full max-w-3xl mx-auto mt-10">
        <Table  className="w-[500px] mx-auto mt-2">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-slate-200 font-bold px-6 w-[100px]">
                Id
              </TableHead>
              <TableHead className=" text-slate-200 font-bold px-10 py-2">
                Nome
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d, i) => (
              <TableRow
                key={i}
                className="hover:bg-zinc-800 cursor-pointer"
                onClick={() => handleRowClick(d.id)}
              >
                <TableCell className="px-6 font-medium">{d.id}</TableCell>
                <TableCell className="px-10 py-2">{d.nome}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Inicio;

// <Link to={`/ler/${d.id}`}>
// </Link>
