$(document).foundation();


$(document)
    .bind("submit", function(e) {
        e.preventDefault();
        console.log("submit intercepted");
        $('#md-contact-form').foundation('validateForm');
    })
    .bind("formvalid.zf.abide", function(e, $form) {
        // ajax submit
    });
