
export const Participantes = ({puntosJugador, puntosComputadora}) => {
  return (
    <div className="participantes">
    
        <h3>JUGADOR: <span>{puntosJugador} PTS</span></h3>
        <h3>COMPUTADORA: <span>{puntosComputadora} PTS </span></h3>       

    </div>
  )
}
