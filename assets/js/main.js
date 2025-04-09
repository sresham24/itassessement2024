
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

    // Add real-time validation on focusout
    $('input, textarea, select').on('focusout', function () {
        validateField($(this));
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Reset all errors
        $('.form-group').removeClass('has-error');
        $('.error').hide();

        // Validate all required fields
        $(this).find('[required]').each(function () {
            if (!validateField($(this))) {
                isValid = false;
            }
        });

        // Special email validation
        if (!isValidEmail($('#email').val())) {
            $('#emailError').show();
            $('#email').closest('.form-group').addClass('has-error');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for your message! We will respond soon.');
            this.reset();

            /* Uncomment for actual form submission
            $.ajax({
                url: 'https://formspree.io/f/your-form-id',
                method: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                beforeSend: function() {
                    $('#submitBtn').prop('disabled', true).text('Sending...');
                },
                success: function() {
                    alert('Message sent!');
                    $('#contactForm').trigger('reset');
                },
                error: function() {
                    alert('Error sending message.');
                },
                complete: function() {
                    $('#submitBtn').prop('disabled', false).text('Send Message');
                }
            });
            */
        }
    });

    function validateField($field) {
        const $formGroup = $field.closest('.form-group');
        const $error = $('#' + $field.attr('id') + 'Error');
        let isValid = true;

        $formGroup.removeClass('has-error');
        $error.hide();

        if ($field.attr('type') === 'email' && !isValidEmail($field.val())) {
            $error.show();
            $formGroup.addClass('has-error');
            isValid = false;
        }
        else if ($field.is('select') && $field.val() === '') {
            $error.show();
            $formGroup.addClass('has-error');
            isValid = false;
        }
        else if ($field.is('[required]') && $field.val().trim() === '') {
            $error.show();
            $formGroup.addClass('has-error');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});