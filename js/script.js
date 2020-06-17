$(function() {
    $newdiv = $(`<div class="menuSpacer"><a href="">PROJECT 1</a><br><a href="">PROJECT 2</a></div>`)
    $("#projectsWing").hide()
    $('.menu ul li').hover(function() {
        $(this).children('ul').stop(true, false, true).slideToggle(300);
    });


});