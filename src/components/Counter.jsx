import { useState } from "react";

export const CounterSinEstados = () => {
    let contador = 0;

    const incrementar = () => {
        contador++;
        console.log(contador);
    }

    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={incrementar}>Sumar</button>
        </div>
    )
}

export const CounterConEstados = () => {
    //let [variable, funcion] = useState();
    let [contador, setContador] = useState(1);//1 es el valor inicial

    const incrementar = () => {
        setContador(contador++);
    }

    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={incrementar}>Sumar</button>
        </div>
    )
}