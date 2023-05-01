import renderProducts from "./renderProducts.js";           //Importamos modulo que renderiza productos

const $app = document.getElementById('app');                //Renderizamos sobre app
const containerSlider = document.querySelector('.slider');  //Selecionamos container donde renderizaremos los productos

const getData = async (api) => {                            //Consumimos API
    try {
        let response = await fetch(api)
        let responseProducts = await response.json();
        let products = responseProducts.products.nodes;
        if (products.length) {                              //Si el arreglo que me devuelve el fetch esta lleno renderizar producto
            renderProducts(products, containerSlider);     //Llamamos funcion que renderiza productos, mandando como argumentos el objeto productos y la seccion donde se va a renderizar
        }
    } catch {
        let mesaggeError = document.createElement("p")
        mesaggeError.textContent = "Productos no disponibles"   
        $app.appendChild(mesaggeError)                      //Si el fetch da error, renderizar mensaje
    }
}
export default getData;