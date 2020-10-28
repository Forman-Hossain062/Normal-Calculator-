
function insertNumber(number) {

    let existingNumbers = $("#result").val()
    $("#result").val(existingNumbers + number);
}
function clearResult() {
    $("#result").val("")
}
function calculate() {
    let result = eval($("#result").val())
    $("#result").val(result);
}
function deleteNumber() {
    let delLastNumber = $("#result").val();
    if (delLastNumber != '') {
        $("#result").val($("#result").val().slice(0, -1));
    }
}
