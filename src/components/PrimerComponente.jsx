export const SaludarComponente = () => {
    return <div><h1>Hola! Cómo estas? :DDD</h1></div>;
}

//Props (recibir parametros)
export const SaludarConNombreComponente = (props) => {
    console.log(props);
    return <div><h1>Hola {props.nombre}! Cómo estas? Es cierto que tenes {props.edad} años?!</h1></div>;
}

//1ra forma: Desestructurar objetos (no hace falta poner props. para llamar a la propiedad)
export const SaludarConNombreComponenteDestructurado1 = (props) => {
    const {nombre, edad} = props;
    console.log(props);
    return <div><h1>Hola {nombre}! Cómo estas? Es cierto que tenes {edad} años?!</h1></div>;
}

//2ra forma: Desestructurar objetos (no hace falta poner props. para llamar a la propiedad)
export const SaludarConNombreComponenteDestructurado2 = ({nombre, edad}) => {
    console.log({nombre, edad});
    return <div><h1>Hola {nombre}! Cómo estas? Es cierto que tenes {edad} años?!</h1></div>;
}