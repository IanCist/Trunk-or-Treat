$(document).ready(function () {
    $('#more-info-btn').on('click', function () {
        $('#more-info').toggle();
    });


    $('.trunk-item').hover(
        function () {
            $(this).find('.trunk-description').slideDown();
        },
        function () {
            $(this).find('.trunk-description').slideUp();
        }
    );

    $('.event-heading').on('click', function () {
        $(this).next('.event-details').slideToggle(); 
    });
});


