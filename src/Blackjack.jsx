import { useState } from "react";
import { listarNaipes, tomarNaipe, valorNaipe } from "./helpers/";
import { Boton } from "./components/Boton";
import { Participantes } from "./components/Participantes";
import { ShowCard } from "./components/ShowCard";

export const Blackjack = () => {
  const [cards, setCards] = useState([]);
  const [cardsRestantes, setCardsRestantes] = useState(listarNaipes()); // Inicializar con la baraja completa
  const [puntosJugador, setPuntosJugador] = useState(0);

  const takeYouCard = () => {
    if (cardsRestantes.length <= 0) return;
    const naipe = tomarNaipe(cardsRestantes); // Tomar una carta de las restantes
    setCards([...cards, naipe]);
    setCardsRestantes(cardsRestantes.filter((carta) => carta !== naipe)); // Eliminar la carta tomada
    setPuntosJugador(parseInt(puntosJugador) + parseInt(valorNaipe(naipe)));
  };

  const resetGame = () => {
    setCards([]);
    setPuntosJugador(0);
  };
  return (
    <>
      <div className="buttons">
        <Boton title={"NUEVO JUEGO"} handleclick={resetGame} />
        <Boton title={"PEDIR CARTA"} handleclick={takeYouCard} />
        <Boton title={"DETENER"} handleclick={takeYouCard} />
      </div>
      <div className="gridCard">
        {cards.map((carta) => (
          <ShowCard key={carta} carta={carta} />
        ))}
      </div>
      <Participantes puntosJugador={puntosJugador} />
    </>
  );
};
