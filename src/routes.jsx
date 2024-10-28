import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Inicio from "./components/Inicio"
import Criar from "./components/Criar"
import Atualizar from "./components/Atualizar"
import Deletar from "./components/Deletar"
import Ler from "./components/Ler"
import Footer from "./components/Footer"

function AppRoutes() {

    return (
        <>

          <BrowserRouter>
            <Header></Header>

            <Routes>
              <Route path="/" element={<Inicio />} />

              <Route path="/criar" element={<Criar />} />
              <Route path='/atualizar' element={<Atualizar />} />
              <Route path='/deletar/' element={<Deletar />} />
              <Route path="/ler/:id" element={<Ler />} />
              <Route path='*' element={<h1>Página não encontrada</h1>}></Route>
            </Routes>      

            <Footer></Footer>   
          </BrowserRouter>

        </>
  )
}

export default AppRoutes