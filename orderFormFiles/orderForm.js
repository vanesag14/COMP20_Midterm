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

function validate(event) {
    event.preventDefault();
    err = false;

    with(document.formData) {
        if (userName.value == "") {
            userName.placeholder = "PLEASE ENTER YOUR FULL NAME";
           $("input[name = 'userName']").addClass('placeholderred');
           err = true;
        }

        if (email.value == "") {
            email.placeholder = "PLEASE ENTER YOUR EMAIL";
           $("input[name = 'email']").addClass('placeholderred');
           err = true;
        }

        if (pNum.value == "") {
            pNum.placeholder = "PLEASE ENTER YOUR PHONE NUM.";
           $("input[name = 'pNum']").addClass('placeholderred');
           err = true;
        }

        if (al1.value == "") {
            al1.placeholder = "PLEASE ENTER YOUR ADDRESS";
           $("input[name = 'al1']").addClass('placeholderred');
           err = true;
        }

        if (city.value == "") {
            city.placeholder = "PLEASE ENTER YOUR CITY";
           $("input[name = 'city']").addClass('placeholderred');
           err = true;
        }

        if(state.value == "") {
            $("option[id = 'emptyState']").text("PLEASE CHOOSE YOUR STATE");
            err = true;
        }

        if (zCode.value == "") {
            zCode.placeholder = "PLEASE ENTER YOUR ZIP CODE";
           $("input[name = 'zCode']").addClass('placeholderred');
           err = true;
        }

        if(cFlavor.value == "") {
            $("option[id = 'd1']").text("PLEASE CHOOSE YOUR FLAVOR");
            err = true;
        }

        if(cSize.value == "") {
            $("option[id = 'd2']").text("PLEASE CHOOSE YOUR SIZE");
            err = true;
        }

        if(occasion.value == "") {
            $("option[id = 'd3']").text("PLEASE CHOOSE THE OCCASION");
            err = true;
        }
    }

    stString = $("#subtotal").text();
    subtotalInt = parseInt(stString.split("$")[1]);

    if (subtotalInt == 0) {
        alert("You must order a cake!");
    }

    if (err == false) {
        alert("!!!");
        displayOutput();
    }
}

// Generates Total
function genTotal() {
    $("select[id ='cake1']").change(function() {
        var c1 = $('#cake1 option:selected').val();

            if (c1 == "8r") {
                cakeCost = cakeSizes[0].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }

            if (c1 == "10r") {
                cakeCost = cakeSizes[1].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
            if (c1 == "1/4s") {
                cakeCost = cakeSizes[2].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
            if (c1 == "1/3s") {
                cakeCost = cakeSizes[3].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
            if (c1 == "1/2s") {
                cakeCost = cakeSizes[4].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
            if (c1 == "2/3s") {
                cakeCost = cakeSizes[5].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
            if (c1 == "3/4s") {
                cakeCost = cakeSizes[6].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
            if (c1 == "fulls") {
                cakeCost = cakeSizes[7].cost;
                subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
                tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
                $("#tax").html("Tax: $" + tax);
                total = parseFloat(tax) + parseFloat(cakeCost);
                $("#total").html("Total: $" + total);
            }
    });

    $("select[id ='cake2']").change(function() {
        var c2 = $('#cake2 option:selected').val();
        if ((c2 == "wedding") || (c2 == "engagement")) {
            sCakeCost = cakeCost + (cakeCost*.2);
            subtotal = $("#subtotal").html("Subtotal: $" + sCakeCost);
            tax = (Math.round((sCakeCost * 0.0625) * 100) / 100).toFixed(2);
            $("#tax").html("Tax: $" + tax);
            total = parseFloat(tax) + parseFloat(sCakeCost);
            $("#total").html("Total: $" + total);
        } else {
            subtotal = $("#subtotal").html("Subtotal: $" + cakeCost);
            tax = (Math.round((cakeCost * 0.0625) * 100) / 100).toFixed(2);
            $("#tax").html("Tax: $" + tax);
            total = parseFloat(tax) + parseFloat(cakeCost);
            $("#total").html("Total: $" + total);
        }
    });
}

function displayOutput() {
    orderWindow = window.open("", "orderWindow", "width=500px height=500px");
    ty = ("Thank you for placing a custom order with Pastelitos");
    order = ("Your order is: ")

    var c0 = $('#cake0 option:selected').attr('name');
    var c1 = $('#cake1 option:selected').attr('name');
    var c2 = $('#cake2 option:selected').attr("name");

    flavor = ("Your cake flavor is: " + c0);
    size = ("Your cake size is: " + c1);
    occasion = ("Your occasion is: " + c2);

    iText = $("#inscription").val()
    if (iText == " ") {
        inscription = ("No inscription")
    }
    inscription = ("Your inscription is: " + iText);

    srText = $("#specialRequests").val()
    if (srText == " ") {
        specialRequests == ("No special requests")
    }
    specialRequests = ("Your special requests are: " + srText);

    subtotal = $("#subtotal").text();
    tax = $("#tax").text();
    total = $("#total").text();

    orderWindow.document.write(ty + "<br> <br>" + order + "<br>" + 
            flavor + "<br>" + size + "<br>" + occasion + "<br>" +
            "<br>" + inscription + "<br>" + specialRequests + "<br>"
            + subtotal + "<br>" + tax + "<br>" + total);
}
