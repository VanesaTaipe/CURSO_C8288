
import fetch from "node-fetch"; //fecth --->
const routeHello = () => "Hello World!";

const routeAPINames = async () => {
    const url =  "https://www.usemodernfullstack.dev/api/v1/users";
    let data;

    try {
        const response = await fetch(url); // Corregido: usa la variable correcta
        data = await response.json(); // Corregido: usa la variable correcta
    } catch (error) {
        return error; // Devuelve el error en caso de fallo
    }
    const names=data
    // map: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
    //join:se encarga de unir
        .map(item => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");

    return names;
}

export { routeHello, routeAPINames }; // Corregido: exportación correcta del nombre


