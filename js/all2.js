$(document).ready(function () {
    // remove all .focus classes when clicked anywhere
    hide = true;
    $('body').on("click", function () {
        if (hide) $('.input-div').removeClass('focus');
        hide = true;
    });

    // add and remove .focus
    $('body').on('click', '.input-div', function () {

        var self = $(this);

        if (self.hasClass('focus')) {
            $('.input-div').removeClass('focus');
            return false;
        }

        $('.input-div').removeClass('focus');

        self.toggleClass('focus');
        hide = false;
    });
});

