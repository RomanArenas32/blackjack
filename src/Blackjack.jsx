import { useEffect, useState } from "react";
import { listarNaipes, tomarNaipe, valorNaipe } from "./helpers/";
import { Boton } from "./components/Boton";
import { Participantes } from "./components/Participantes";
import { ShowCard } from "./components/ShowCard";

export const Blackjack = () => {
  const [cards, setCards] = useState([]);
  const [cardsRestantes, setCardsRestantes] = useState(listarNaipes()); // Inicializar con la baraja completa
  const [puntosJugador, setPuntosJugador] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  const [cartasComputadora, setCartasComputadora] = useState([]);

  const takeYouCard = async () => {
    if (cardsRestantes.length <= 0) return;
    const naipe = await tomarNaipe(cardsRestantes); // Tomar una carta de las restantes
    setCards([...cards, naipe]);
    setCardsRestantes(cardsRestantes.filter((carta) => carta !== naipe)); // Eliminar la carta tomada
    setPuntosJugador(parseInt(puntosJugador) + parseInt(valorNaipe(naipe)));
  };
  const computerTourn = async () => {
    setCardsRestantes(listarNaipes());
    const naipe = await tomarNaipe(cardsRestantes); // Tomar una carta de las restantes
    setCartasComputadora([...cartasComputadora, naipe]);
    setCardsRestantes(cardsRestantes.filter((carta) => carta !== naipe)); // Eliminar la carta tomada
    setPuntosComputadora(
      parseInt(puntosComputadora) + parseInt(valorNaipe(naipe))
    );
  };

  const resetGame = () => {
    setCards([]);
    setPuntosJugador(0);
    setPuntosComputadora(0);
    setCartasComputadora([]);
  };

  useEffect(() => {
    if (puntosComputadora == puntosJugador || puntosComputadora == 21) {
      alert("Perdiste! la computadora igualo tus puntos o llego a 21");
    } else if (puntosComputadora > puntosJugador && puntosComputadora < 21) {
      alert("perdiste! la PC supero tus puntos sin pasarse");
    } else if (puntosComputadora > 21) {
      alert("Has Ganado! la PC se paso de puntos");
    }
  }, [puntosComputadora]);

  useEffect(() => {
    if (puntosJugador == 21) {
      setTimeout(() => {
        alert("FELICITACIONES HAS GANADO EL JUEGO");
      }, 550);
    } else if (puntosJugador > 21) {
      setTimeout(() => {
        alert("Lo siento perdiste te pasaste de 21 puntos");
        setCards([]);
        setPuntosJugador(0);
      }, 550);
    }
  }, [puntosJugador]);

  return (
    <>
      <div className="buttons">
        <Boton title={"NUEVO JUEGO"} handleclick={resetGame} />
        <Boton title={"PEDIR CARTA"} handleclick={takeYouCard} />
        <Boton title={"TURNO PC"} handleclick={computerTourn} />
      </div>
      <div className="gridCard">
        <h2>CARTAS DEL JUGADOR</h2>

        {cards.map((carta) => (
          <ShowCard key={carta} carta={carta} />
        ))}
      </div>
      <Participantes
        puntosJugador={puntosJugador}
        puntosComputadora={puntosComputadora}
      />

      <div className="gridCard">
        <h2>CARTAS DE LA COMPUTADORA</h2>

        {cartasComputadora.map((carta) => (
          <ShowCard key={carta} carta={carta} />
        ))}
      </div>
    </>
  );
};
