console.log('hello')
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})


$(function() {
    checkSize();
    $(window).resize(checkSize);

    $("video").prop('muted', true);

    $(".buttons").click(function() {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(this).addClass('unmute-video');
            $(".buttons").html('CLICK TO MUTE')

        } else {
            $("video").prop('muted', true);
            $(".buttons").html('CLICK FOR SOUND')
            $(this).removeClass('unmute-video');
        }
        console.log($("video").prop('muted'))
    });

    function checkSize() {
        if ($(".mobilemenu").css("display") != "none") {
            $(".mobilemenu").click(function() {
                $(".menu").show();
                // $("body").css("overflow", "hidden");
                // $(".footercontainer").css("position", "relative")
            })
            $(".x").click(function() {
                $(".menu").hide();
                // $(".footercontainer").css("position", "relative")
                // $("body").css("overflow", "visible");
            })
        } else {
            // $(".footercontainer").css("position", "relative");
            // $("body").css("overflow", "visible");
        }
    }

    // function checkSize() {
    //     if ($(".mobilemenu").css("display" != "none")) {
    //         
    //     } else {
    //         

    //     }
    // }


});