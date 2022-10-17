const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const btnNavHolder = document.querySelector('.js-nav-holder');

    btnNavOpener.addEventListener ('click', myFunc = (event) => {
        event.target.classList.toggle('active');
        btnNavHolder.classList.toggle('active');
    })
}

navOpener ();