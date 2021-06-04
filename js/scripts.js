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
    } else if(shoes === "crocs" && anime === "dbz") {
      result = "#c"
    } else if(age >= 21 && tp === "cottenelle") {
      result = "#ruby"
    }

    $(".hide-me").hide();
    $(result).show("#swift");
    $(result).show("#js");
    $(result).show("#c");
    $(result).show("#ruby");
  })
})