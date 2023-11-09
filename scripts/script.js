document.addEventListener('DOMContentLoaded', function () {
    /*Vídeo de empresa*/
    var primeraVez = true;
    var video = document.getElementById('videoEmpresa');
    video.addEventListener('loadeddata', function () {
        video.currentTime = 9;
        video.pause();
    });
    video.addEventListener('play', function () {
        if (primeraVez) {
            primeraVez = false;
            video.currentTime = 0;
        }
    });

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
                $("#imagenesCarousel .carousel-inner").animate({
                        scrollLeft: scrollPosition
                    },
                    600
                );
            }
        });
        $("#imagenesCarousel .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= imagenWidth;
                $("#imagenesCarousel .carousel-inner").animate({
                        scrollLeft: scrollPosition
                    },
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
            $(achicado).find("img").removeClass("h-65");
            $(achicado).find("img").addClass("h-100");
            $(achicado).find(".card-body").removeClass("top-32");
            $(achicado).find(".card-body").addClass("top-50");
        }
        achicado = this;
        $(this).find("img").removeClass("h-100");
        $(this).find("img").addClass("h-65");
        $(this).find(".card-body").removeClass("top-50");
        $(this).find(".card-body").addClass("top-32");
    });
});