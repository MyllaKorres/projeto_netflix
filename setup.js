$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10, // dist�ncia entre os posters
    nav: true, // bot�es < >
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})