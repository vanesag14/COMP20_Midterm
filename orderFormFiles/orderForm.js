function CakeSize(size, cost)
{
    this.size = size;
    this.cost = cost;
}

cakeSizes = new Array(
    new CakeSize("8inR", 45),
    new CakeSize("10inrR", 55),
    new CakeSize("1/4S", 65),
    new CakeSize("1/3S", 80),
    new CakeSize("1/2S", 100),
    new CakeSize("2/3S", 150),
    new CakeSize("3/4S", 170),
    new CakeSize("fullS", 200),
);


$(document).ready(function() { 
    genTotal();
});



$("input[name = 'button']").focus(function() {
    err = false;

    with(document.formData) {
        if (userName.value == "") {
            userName.placeholder = "PLEASE ENTER YOUR FULL NAME";
           $("input[name = 'userName']").addClass('placeholderred');
        }

        if (email.value == "") {
            email.placeholder = "PLEASE ENTER YOUR EMAIL";
           $("input[name = 'email']").addClass('placeholderred');
        }

        if (pNum.value == "") {
            pNum.placeholder = "PLEASE ENTER YOUR PHONE NUM.";
           $("input[name = 'pNum']").addClass('placeholderred');
        }

        if (al1.value == "") {
            al1.placeholder = "PLEASE ENTER YOUR ADDRESS";
           $("input[name = 'al1']").addClass('placeholderred');
        }

        if (city.value == "") {
            city.placeholder = "PLEASE ENTER YOUR CITY";
           $("input[name = 'city']").addClass('placeholderred');
        }

        if(state.value == "") {
            $("option[id = 'emptyState']").text("PLEASE CHOOSE YOUR STATE");
        }

        if(cFlavor.value == "") {
            $("option[id = 'd1']").text("PLEASE CHOOSE YOUR FLAVOR");
        }

        if(cSize.value == "") {
            $("option[id = 'd2']").text("PLEASE CHOOSE YOUR SIZE");
        }

        if(occasion.value == "") {
            $("option[id = 'd3']").text("CHOOSE THE OCCASION");
        }
    }
});

// Generates Total
function genTotal() {
    $("select[id^='cake']").click(function() {
        alert("!");
    });
}
