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
  const [jogoFinalizado, setJogoFinalizado] = useState(false)

  function valor() {
    return Math.floor(Math.random() * 6) + 1
  }

  function jogarJ1() {
    const d1 = valor()
    const d2 = valor()

    setDadosJ1([d1, d2])
    setTurno(2)
    setMensagem("")
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
      setMensagem("Jogador 1 venceu a rodada")
      setVitoriasJ1(vitoriasJ1 + 1)
    } else if (somaJ2 > somaJ1) {
      setMensagem("Jogador 2 venceu a rodada")
      setVitoriasJ2(vitoriasJ2 + 1)
    } else {
      setMensagem("Rodada empatada")
      setEmpates(empates + 1)
    }

    if (rodada == 5) {
      setJogoFinalizado(true)
    } else {
      setRodada(rodada + 1)
    }
  }

  function finalizarJogo() {
    if (vitoriasJ1 > vitoriasJ2) {
      return "Jogador 1 venceu o jogo"
    } else if (vitoriasJ2 > vitoriasJ1) {
      return "Jogador 2 venceu o jogo"
    } else {
      return "Empate geral"
    }
  }

  function jogarNovamente() {
    setRodada(1)
    setDadosJ1([1, 1])
    setDadosJ2([1, 1])
    setTurno(1)
    setMensagem("")
    setVitoriasJ1(0)
    setVitoriasJ2(0)
    setEmpates(0)
    setJogoFinalizado(false)
  }

  return (
    <div className="container">
      <h1>Jogo de dados</h1>
      <h2>Rodada {rodada} / 5</h2>
      <p>Vitorias do Jogador 1: {vitoriasJ1} | Vitorias do Jogador 2: {vitoriasJ2} | Empates: {empates}</p>

      <div className="jogadores">
        <div className="jogador">
          <h3>Jogador 1</h3>
          <div>
            <Dado valor={dadosJ1[0]} />
            <Dado valor={dadosJ1[1]} />
          </div>
          <button onClick={jogarJ1} disabled={turno == 2 || jogoFinalizado}>Jogar</button>
        </div>

        <div className="jogador">
          <h3>Jogador 2</h3>
          <div>
            <Dado valor={dadosJ2[0]} />
            <Dado valor={dadosJ2[1]} />
          </div>
          <button onClick={jogarJ2} disabled={turno == 1 || jogoFinalizado}>Jogar</button>
        </div>
      </div>
      <h3>{mensagem}</h3>

      {jogoFinalizado && (
        <div className="resultadoFinal">
          <h1>{finalizarJogo()}</h1>
          <button onClick={jogarNovamente}>Jogar Novamente</button>
        </div>
      )}
    </div>
  )
}