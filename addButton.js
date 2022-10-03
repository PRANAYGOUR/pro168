AFRAME.registerComponent("create-buttons" , {
    init: function(){
        //creating button1
        var b1 = document.createElement("button")
        b1.innerHTML="RATE US"
        b1.setAttribute("id", "rating-button")
        b1.setAttribute("class" , "btn btn-warning")

        //creating button2
        var b2 = document.createElement("button")
        b2.innerHTML="ORDER NOW"
        b2.setAttribute("id", "order-button")
        b2.setAttribute("class" , "btn btn-warning")

        //append the button elements
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(b1)
        buttonDiv.appendChild(b2) 
    }
})