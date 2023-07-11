// ready functions

$(document).ready(function(){
    $("#honda").show()

    $("#kia").hide()

    $("#suzuki").hide()


    $("#toyota").hide()
})


// ready function end

// hide/show buttons start
$(document).ready(function(){
   $("#newcars").show()
})

$(document).ready(function(){
    $(".newcars-btn").click(function(){
        $("#newcars").show(1500);
    })
})

$(document).ready(function(){
    $(".newcars-btn").click(function(){
        $("#honda").show();
    })
    $(".newcars-btn").click(function(){
        $("#kia").hide();
    })
    $(".newcars-btn").click(function(){
        $("#suzuki").hide();
    })
    $(".newcars-btn").click(function(){
        $("#toyota").hide();
    })
})


// hide/show buttons End


// show function cars 

    $(document).ready(function(){
    
    $("#hondabutton").click(function(){
            $("#honda").show();
        })    
    $("#hondabutton").click(function(){
        $("#kia").hide();
    })
    $("#hondabutton").click(function(){
        $("#suzuki").hide();
    })
    $("#hondabutton").click(function(){
        $("#toyota").hide();
    })

    $("#kiabutton").click(function(){
        $("#kia").show();
    })
    $("#kiabutton").click(function(){
        $("#honda").hide();
    })
    $("#kiabutton").click(function(){
        $("#suzuki").hide();
    })
    $("#kiabutton").click(function(){
        $("#toyota").hide();
    })

    $("#suzukibutton").click(function(){
        $("#suzuki").show();
    })    
$("#suzukibutton").click(function(){
    $("#honda").hide();
})
$("#suzukibutton").click(function(){
    $("#kia").hide();
})
$("#suzukibutton").click(function(){
    $("#toyota").hide();
})

$("#toyotabutton").click(function(){
    $("#toyota").show();
})
$("#toyotabutton").click(function(){
    $("#honda").hide();
})
$("#toyotabutton").click(function(){
    $("#kia").hide();
})
$("#toyotabutton").click(function(){
    $("#suzuki").hide();
})

})



// show function end


$(document).ready(function() {
    $('.carousel').carousel({
      interval: 3000 // Set the sliding interval (in milliseconds)
    });
  });