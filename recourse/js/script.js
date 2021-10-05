$(document).ready(function () {
    $(".box-nav ul li a").click(function (e) {
        var current_link = $(this);
        var current_link_href = current_link.attr('href');

        $(".box-nav ul li a").removeClass('active');
        current_link.addClass('active');

    });

});