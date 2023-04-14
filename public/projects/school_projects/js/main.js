// this is your custom Javascript file

$(function () {
  // add any custom Javascript code below this line
  $("#learn_more").click(function () {
    $("#paragraph3").text("Sorry, I'm still working on this.")
  })

  $("#octopus").mouseover(function(){
    $("#octopus").attr("src","images/oct_2.jpg")
  })

  $("#octopus").mouseout(function(){
    $("#octopus").attr("src","images/oct_1.png")
  })

  $("#octopus").click(function () {
    $("#octopus").animate(
      {
        left: 2000,
        top: 1000,
      },
      2000
    )
  })
  // add any custom Javascript code above this line.
})

