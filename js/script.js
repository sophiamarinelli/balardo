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

    $("video").prop('muted', true);

    $(".mute-video").click(function() {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(this).addClass('unmute-video');

        } else {
            $("video").prop('muted', true);
            $(this).removeClass('unmute-video');
        }
        console.log($("video").prop('muted'))
    });
});