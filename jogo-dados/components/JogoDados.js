"use client";
import {useState} from "react";
import Dado from "./Dado.js"

export default function JogoDados() {
  const [rodada, setRodada] = useState(1)
  const [dadosJ1, setDadosJ1] = useState([1, 1])
  const [dadosJ2, setDadosJ2] = useState([1, 1])

  return (
    <div className="container">
      <h1>Jogo de dados</h1>
      <h2>Rodada { rodada } / 5</h2>
      
      <div className="Jogador">
        <h3>Jogador 1</h3>
        <Dado valor={dadosJ1[0]} />
        <Dado valor={dadosJ1[1]} />

        <h3>Jogador 2</h3>
        <Dado valor={dadosJ2[0]} />
        <Dado valor={dadosJ2[1]} />
      </div>
    </div>
  )
}