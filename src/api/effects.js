
const hostBase = "http://localhost:5000"

export async function millas(props) {
    const ruta = new URL(`${hostBase}/ordenes/listarOrden/${props}`);
    const result = await fetch(ruta);
    return await result.json();
}

export async function ordenes(props) {
    const ruta = new URL(`${hostBase}/ordenes/listarOrden/${props}`);
    const result = await fetch(ruta);
    return await result.json();
}

export async function puertos(props) {
    const ruta = new URL(`${hostBase}/ordenes/listarOrden/${props}`);
    const result = await fetch(ruta);
    return await result.json();
}