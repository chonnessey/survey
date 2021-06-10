$(document).ready(function() {
  $("#code").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const disney = $("#disney").val();
    const denzel = $("#denzel").val();
    const shoes = $("#shoes").val();
    const anime = $("#anime").val();
    const tp = $("#tp").val();
    let result;

    if(age > 1 && disney === "wall-e") {
      result = "#swift"
    } else if(age > 10 && denzel === "training") {
      result = "#js"
    } else if(age >= 30 && shoes === "crocs" && anime === "dbz") {
      result = "#c"
    } else if(age >= 21 && tp === "cottenelle") {
      result = "#ruby"
    } else {
      result = "#no-match"
    }

    $(".hide-me").hide();
    $(result).show(result);
  })
})