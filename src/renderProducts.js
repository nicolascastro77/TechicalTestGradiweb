export default async function renderProducts(products, container) {

    container.innerHTML = ""; //Limpiamos el contenedor donde vamos a renderizar productos

    products.forEach((product, indice) => { //Por cada producto del objeto creamos y manipulamos elemento del dom

        // const sliderContainer = document.createElement('div');
        // sliderContainer.classList.add('slider');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        const cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('card-img');

        const cardImage = document.createElement('img');
        cardImage.setAttribute('alt', product.title); //Titulo del producto ALT img
        cardImage.setAttribute('src', product.featuredImage.url); //Imagen del producto
        cardImage.classList.add('img-card');

        const cardButton = document.createElement('button');
        cardButton.classList.add('button-cart');

        const containerCardText = document.createElement('div');
        containerCardText.classList.add('card-text');

        const ProductName = document.createElement('h2');
        ProductName.innerHTML = product.title; //Titulo del producto

        const containerInfoProducts = document.createElement('div');
        containerInfoProducts.classList.add('info-product');

        const containerStars = document.createElement('div');
        containerStars.classList.add('stars');

        const divStars = document.createElement('div');

        const stars = document.createElement('ul');
        stars.classList.add('star-border');

        const reviews = document.createElement('p');

        const divReviews = document.createElement('div');
        divReviews.classList.add('reviews');

        const containerPrice = document.createElement('div');
        containerPrice.classList.add('price');

        const divPriceAnt = document.createElement('div');
        divPriceAnt.classList.add('price-ant');

        const priceAnt = document.createElement('p');
        priceAnt.innerHTML = "€" + product.prices.max.amount; //Precio sin descuento

        const divpriceNew = document.createElement('div');

        const priceNew = document.createElement('p');
        priceNew.innerHTML = "€" + product.prices.min.amount; //Precio con descuento

        divpriceNew.appendChild(priceNew);
        divPriceAnt.appendChild(priceAnt);
        containerPrice.appendChild(divpriceNew)
        containerPrice.appendChild(divPriceAnt)
        containerInfoProducts.appendChild(containerStars)
        containerInfoProducts.appendChild(containerPrice)

        divReviews.appendChild(reviews);
        divStars.appendChild(stars);

        containerStars.appendChild(divStars)
        containerStars.appendChild(divReviews)
        containerCardText.appendChild(ProductName);
        containerCardText.appendChild(containerInfoProducts);


        cardImageContainer.appendChild(cardButton);
        cardImageContainer.appendChild(cardImage);

        cardContainer.appendChild(cardImageContainer)
        cardContainer.appendChild(containerCardText)


        container.appendChild(cardContainer)

        buttonIndice(indice, cardButton); //Funcion que renderiza el texto en el boton
        reviewsCalc(product, stars, reviews) //Funcion que calcula el puntaje segun tag de reviews y asigna las estrellas
    });

}


function buttonIndice(indiceBtn, container) { //Para los botones de productos pares se asigna un texto diferente
    if (indiceBtn % 2 == 0) {
        container.innerHTML = 'add to cart';
    } else {
        container.innerHTML = 'see more ';
    }
}

function reviewsCalc(product, containerStar, containerReviews) { //Funcion que calcula los reviews y estrellas

    const numberTagString = product.tags.filter(element => { //FIltamos el objeto product.tags para obtneer los valores numericos 
        return element === 0 || Number(element);
    });

    const numberTag = numberTagString.map(function (str) { //Convertimos los valores numericos anteriomente filtadors de strings a Numbers
        return parseInt(str);
    });

    const sumNumberTag = numberTag.reduce((previous, current) => current += previous); //Hacemos calculos para el pr0omedio cuando exista más de un valor numerico con la un reduce 
    const avgNumberTag = sumNumberTag / numberTag.length; //Aplicamos el promedio al anterior valor calculado

    containerReviews.innerHTML = avgNumberTag; //Asignamos el valor al dom              

    for (let i = 0; i < 5; i++) { //Creamos 5 estrellas a partior de una lista 
        const li = document.createElement('li');
        li.classList.add('star');
        containerStar.appendChild(li);
    }

    if (avgNumberTag >= 0 && avgNumberTag <= 100) { //Segun el puntaj obtenido con eñ promedio en los calculos anteriores se activan las estrellas
        containerStar.children[0].classList.add('star-active');
    } else if (avgNumberTag > 100 && avgNumberTag <= 200) {
        containerStar.children[0].classList.add('star-active');
        containerStar.children[1].classList.add('star-active');
    } else if (avgNumberTag > 200 && avgNumberTag <= 300) {
        containerStar.children[0].classList.add('star-active');
        containerStar.children[1].classList.add('star-active');
        containerStar.children[2].classList.add('star-active');
    } else if (avgNumberTag > 300 && avgNumberTag <= 400) {
        containerStar.children[0].classList.add('star-active');
        containerStar.children[1].classList.add('star-active');
        containerStar.children[2].classList.add('star-active');
        containerStar.children[3].classList.add('star-active');
    } else if (avgNumberTag > 400 && avgNumberTag <= 500) {
        containerStar.children[0].classList.add('star-active');
        containerStar.children[1].classList.add('star-active');
        containerStar.children[2].classList.add('star-active');
        containerStar.children[3].classList.add('star-active');
        containerStar.children[4].classList.add('star-active');
    } //Este if se puede optimizar

}