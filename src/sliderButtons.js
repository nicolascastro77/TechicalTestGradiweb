function interactionSlider() {      //Funcion que permite interactuar con el slider

    let isDown = false; //Declaramos valores del slide
    let startX;
    let scrollLeft;

    const next = document.querySelector('#slide')   //Leemos del dom los botones
    const prev = document.querySelector('#slideBack')

    function handleScrollNext(direction) {      //funcion para realizar slider hacia atras
        const cards = document.querySelector('.slider')
        cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
    }

    function handleScrollPrev(direction) {      //funcion para realizar slider hacia adelante
        const cards = document.querySelector('.slider')
        cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100
    }

    const cards = document.querySelector('.slider')
    next.addEventListener('click', handleScrollPrev)    //Llamamos las funciones cuando se realice el evento de click
    prev.addEventListener('click', handleScrollNext)


    cards.addEventListener('mousedown', (e) => {            //INteracciones segun los eventos del mouse, para realizar drag
        isDown = true;
        cards.classList.add('active');
        startX = e.pageX - cards.offsetLeft;
        scrollLeft = cards.scrollLeft;
    });
    cards.addEventListener('mouseleave', () => {
        isDown = false;
        cards.classList.remove('active');
    });
    cards.addEventListener('mouseup', () => {
        isDown = false;
        cards.classList.remove('active');
    });
    cards.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - cards.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        cards.scrollLeft = scrollLeft - walk;
    });
}

export default interactionSlider;