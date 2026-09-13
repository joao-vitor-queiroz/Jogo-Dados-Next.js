"use client";
import {useState} from "react";
import Dado from "./Dado.js"

export default function JogoDados() {
  const [rodada, setRodada] = useState(1)
  const [dadosJ1, setDadosJ1] = useState([1, 1])
  const [dadosJ2, setDadosJ2] = useState([1, 1])
  const [turno, setTurno] = useState(1)
  const [mensagem, setMensagem] = useState("")
  const [vitoriasJ1, setVitoriasJ1] = useState(0)
  const [vitoriasJ2, setVitoriasJ2] = useState(0)
  const [empates, setEmpates] = useState(0)

  function valor() {
    return Math.floor(Math.random() * 6) + 1
  }

  function jogarJ1() {
    const d1 = valor()
    const d2 = valor()

    setDadosJ1([d1, d2])
    setTurno(2)
   }

  function jogarJ2() {
    const d1 = valor()
    const d2 = valor()

    setDadosJ2([d1, d2])
    setTurno(1)
    finalizarRodada(d1, d2)
  }

  function finalizarRodada(d1, d2) {
    const somaJ1 = dadosJ1[0] + dadosJ1[1]
    const somaJ2 = d1 + d2

    if (somaJ1 > somaJ2) {
      setMensagem("Vitoria do Jogador 1")
      setVitoriasJ1(vitoriasJ1 + 1)
    } else if (somaJ2 > somaJ1) {
      setMensagem("Vitoria do Jogador 2")
      setVitoriasJ2(vitoriasJ2 + 1)
    } else {
      setMensagem("Empate")
      setEmpates(empates + 1)
    }

    setRodada(rodada + 1)
  }

  return (
    <div className="container">
      <h1>Jogo de dados</h1>
      <h2>Rodada {rodada} / 5</h2>
      <h2>{mensagem}</h2>

      <div className="jogador">
        <h3>Jogador 1</h3>
        <Dado valor={dadosJ1[0]} />
        <Dado valor={dadosJ1[1]} />
        <button onClick={jogarJ1} disabled={turno == 2}>Jogar</button>
      </div>

      <div className="jogador">
        <h3>Jogador 2</h3>
        <Dado valor={dadosJ2[0]} />
        <Dado valor={dadosJ2[1]} />
        <button onClick={jogarJ2} disabled={turno == 1}>Jogar</button>
      </div>
      <p>Vitorias do Jogador 1: {vitoriasJ1} | Vitorias do Jogador 2: {vitoriasJ2} | Empates: {empates}</p>
    </div>
  )
}