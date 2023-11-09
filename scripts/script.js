document.addEventListener('DOMContentLoaded', function () {
    var multipleImgCarousel = document.querySelector(
        "#imagenesCarousel"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleImgCarousel, {
            interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var imagenWidth = $(".carousel-item").width() + parseInt($(".carousel-item").css("padding-left")) + parseInt($(".carousel-item").css("padding-right"));
        var scrollPosition = 0;
        $("#imagenesCarousel .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - imagenWidth * 4) {
                scrollPosition += imagenWidth;
                $("#imagenesCarousel .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#imagenesCarousel .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= imagenWidth;
                $("#imagenesCarousel .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    } else {
        $(multipleImgCarousel).addClass("slide");
    }

    var achicado;

    $("#servicios .card").on("mouseover", function () {
        if (achicado) {
            $(achicado).find("img").removeClass("h-50");
            $(achicado).find("img").addClass("h-100");
        }
        achicado = this;
        $(this).find("img").removeClass("h-100");
        $(this).find("img").addClass("h-50");
    });
});
