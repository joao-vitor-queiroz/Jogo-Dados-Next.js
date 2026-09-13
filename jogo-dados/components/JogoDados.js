"use client";
import {useState} from "react";
import Dado from "./Dado.js"

export default function JogoDados() {
  const [rodada, setRodada] = useState(1)
  const [dadosJ1, setDadosJ1] = useState([1, 1])
  const [dadosJ2, setDadosJ2] = useState([1, 1])

  function valor() {
    return Math.floor(Math.random() * 6) + 1
  }

  function jogarJ1() {
    const d1 = valor()
    const d2 = valor()

    setDadosJ1([d1, d2])
  }

  function jogarJ2() {
    const d1 = valor()
    const d2 = valor()

    setDadosJ2([d1, d2])
    setRodada(rodada + 1)
  }

  return (
    <div className="container">
      <h1>Jogo de dados</h1>
      <h2>Rodada {rodada} / 5</h2>

      <div className="jogador">
        <h3>Jogador 1</h3>
        <Dado valor={dadosJ1[0]} />
        <Dado valor={dadosJ1[1]} />
        <button onClick={jogarJ1}>Jogar</button>
      </div>

      <div className="jogador">
        <h3>Jogador 2</h3>
        <Dado valor={dadosJ2[0]} />
        <Dado valor={dadosJ2[1]} />
        <button onClick={jogarJ2}>Jogar</button>
      </div>
    </div>
  )
}