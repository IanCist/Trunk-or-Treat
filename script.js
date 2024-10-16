$(document).ready(function () {
    $('#more-info-btn').on('click', function () {
        $('#more-info').toggle();
    });

  
    $('.trunk-item').hover (
        function () {
            $(this).find('.trunk-description').stop(true, true).slideDown();
        },
        function () {
            $(this).find('.trunk-description').stop(true, true).slideUp();
        }
    );
});

