const API = 'https://gradistore-spi.herokuapp.com/products/all';    //ENDPOINT

import logSubmit from "./validateForm.js";                          //Importamos modulo que valida el campo del formulario
import interactionSlider from "./sliderButtons.js";             //Importamos modulo que renderiza el slider con los productos
import getData from "./getData.js";                                 //IMportamos modulo que obtiene la data de los productos

const loadData = async () => {                                      //Funcion asincrona que carga la data
    await getData(API);                     
    interactionSlider();                                          //llamamos funcion que permite interaccion con el slider
}

loadData();                                                         //Llamamos la duncion anterior
