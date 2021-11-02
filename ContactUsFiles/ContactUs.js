function validate(event){
    event.preventDefault();
    err = false;

    with(document.formData) {
        if (name.value == "") {
            name.placeholder = "PLEASE ENTER YOUR FULL NAME";
           $("#name").addClass('placeholderred');
           err = true;
        }

        if (email.value == "") {
            email.placeholder = "PLEASE ENTER YOUR EMAIL";
           $("#email").addClass('placeholderred');
           err = true;
        }

        if(topic.value == "") {
            $("option[id = 'noTopic']").text("PLEASE CHOOSE A TOPIC");
            err = true;
        }

        if (message.value == "") {
            message.placeholder = "PLEASE ENTER A MESSAGE";
            $("#message").addClass('placeholderredX');
            err = true;
        }
    }

    if (err == false) {
        thankYou = window.open("", "orderWindow", "width=200px height=200px");
        thankYou.document.write("Thank you for sending us a message! We will respond within 3-5 business days.")
    }
}