function changeMonney(){
    let amount = document.getElementById("amount").value;
    let formCu = document.getElementById("form").value;
    let toCu = document.getElementById("to").value;
    let result;

    if (formCu == "USD" && toCu == "VND"){
        result = "Result: " + (amount*23000) + "Đ"
    }
    else if (formCu == "VND" && toCu =="USD"){
        result = "Result: " + (amount/23000) + "$"
    }
    else if (formCu == "VND") {
        result = "Result: " + amount + "Đ"
    } else {
        result = "Result: " + amount + "$"
    }
    document.getElementById("Result").innerHTML = result
}