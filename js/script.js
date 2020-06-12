$(function() {
    $("#projectsWing").hide()
    $('.menu ul li').hover(function() {
        $(this).children('ul').stop(true, false, true).slideToggle(300);
    });

    $('#stretch').fitText(1, { minFontSize: '48px', maxFontSize: '20000px' })
});