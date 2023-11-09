document.addEventListener('DOMContentLoaded', function () {
    /*Vídeo de empresa*/
    var primeraVez = true;
    var video = document.getElementById('videoEmpresa');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var playPauseIcon = document.getElementById('playPauseIcon');
    
    video.addEventListener('loadeddata', function () {
        video.currentTime = 9;
        video.pause();
    });

    video.addEventListener('play', function () {
        if (primeraVez) {
            primeraVez = false;
            video.currentTime = 0;
        }
        updatePlayPauseIcon();
    });

    video.addEventListener('pause', function () {
        updatePlayPauseIcon();
    });

    playPauseBtn.addEventListener('click', function () {
        togglePlayPause();
    });

    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    function updatePlayPauseIcon() {
        if (video.paused || video.ended) {
            playPauseIcon.className = 'fas fa-play fa-3x';
        } else {
            playPauseIcon.className = 'fas fa-pause fa-3x';
        }
    }

    var hoverTimeout;
    video.addEventListener('mousemove', function () {
        playPauseBtn.style.visibility = 'visible';
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function () {
            playPauseBtn.style.visibility = 'hidden';
        }, 1000);
    });

    playPauseBtn.addEventListener('mouseenter', function () {
        clearTimeout(hoverTimeout);
    });

    playPauseBtn.addEventListener('mouseleave', function () {
        hoverTimeout = setTimeout(function () {
            playPauseBtn.style.visibility = 'hidden';
        }, 1000);
    });

    //Gestión de carousel
    var multipleImgCarousel = document.querySelector(
        "#imagenesCarousel"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleImgCarousel, {
            interval: false,
        });
        var carouselWidth = $(".carousel-inner").children().length * $(".carousel-item").width() + parseInt($(".carousel-item").css("padding-left")) + parseInt($(".carousel-item").css("padding-right"));
        var imagenWidth = $(".carousel-item").width() + parseInt($(".carousel-item").css("padding-left")) + parseInt($(".carousel-item").css("padding-right"));
        var scrollPosition = 0;
        $("#imagenesCarousel .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - imagenWidth * 3) {
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