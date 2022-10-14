const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const btnNavHolder = document.querySelector('.js-nav-holder');

    btnNavOpener.addEventListener ('click', myFunc = () => {
        btnNavOpener.classList.toggle('active');
        btnNavHolder.classList.toggle('active');
    })
}

navOpener ();