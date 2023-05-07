
//Toma la carta y retorna el valor de la misma

export const valorNaipe = (carta) => {
    

const valor = carta.substring(0, carta.length - 1)

    if(isNaN(valor)){
      return  valor === "A" ? 11 : 10;
    }
    else{
        return valor
    }

}
