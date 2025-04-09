
$(document).ready(function () {

    // Sticky header
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".site-header").addClass("sticky");
        } else {
            $(".site-header").removeClass("sticky");
        }
    });

    //banner slider
    $(".banner-slider").slick({
        dots: false,
        autoplay: true,
        speed: 2500,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slideswToScroll: 1,
        arrows: false
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        $('.error-msg').hide();

        // Validate Name
        if ($('#name').val().trim() === '') {
            $('#nameError').show();
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($('#email').val())) {
            $('#emailError').show();
            isValid = false;
        }

        // Validate Subject
        if ($('#subject').val() === '') {
            $('#subjectError').show();
            isValid = false;
        }

        // Validate Message
        if ($('#message').val().trim() === '') {
            $('#messageError').show();
            isValid = false;
        }

        // If valid, submit form
        if (isValid) {
            alert('Thank you for your message! We will respond soon.');
            this.reset();

            /* Uncomment for actual form submission
            $.ajax({
                url: 'https://formspree.io/f/your-form-id',
                method: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                success: function() {
                    alert('Thank you!');
                    $('#contactForm').trigger('reset');
                },
                error: function() {
                    alert('There was a problem with your submission.');
                }
            });
            */
        }
    });

    // Optional: Add focusout validation for better UX
    $('input, textarea, select').on('focusout', function () {
        const $input = $(this);
        const $error = $('#' + $input.attr('id') + 'Error');

        if ($input.attr('type') === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test($input.val())) {
                $error.show();
            } else {
                $error.hide();
            }
        } else if ($input.is('select')) {
            if ($input.val() === '') {
                $error.show();
            } else {
                $error.hide();
            }
        } else if ($input.is('[required]')) {
            if ($input.val().trim() === '') {
                $error.show();
            } else {
                $error.hide();
            }
        }
    });
});