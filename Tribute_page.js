
function CheckFunction() {
    var x = document.getElementById("box1").checked;
    var y = document.getElementById("box2").checked;
    var z = document.getElementById("box3").checked;
    var a = document.getElementById("box9").checked;
    var b = document.getElementById("box10").checked;
    
    if (x && y && z && !a && !b) {
    document.getElementById("demo").innerHTML = "Correct, Well done!";
       document.getElementById("demo").style.color = "green"
    }
      else {
        document.getElementById("demo").innerHTML = "Please try again."
        document.getElementById("demo").style.color = "red"
      }
    }
    
    // function CheckFunction() {
    // var count = 0; 
    //  const myCollection = document.getElementsByClassName("box");
    //  for (let i = 0; i < myCollection.length; i++) {
    // 	if (myCollection[i].checked) {
    //     count ++;
    //     }  
    //   }
    //  if (count == 3) {
    // document.getElementById("demo").innerHTML = "Correct, Well done!";
    //     document.getElementById("demo").style.color = "green"
    // }
    // else {   
    //   document.getElementById("demo").innerHTML = "Please try again."
    //   document.getElementById("demo").style.color = "red"
    // }
    //   }
    
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    
    function CheckFunction1()  {
    var x2 = document.getElementById("Yans").checked;
    var y2 = document.getElementById("Nans0").checked;
    var z2 = document.getElementById("Nans1").checked;
    var a2 = document.getElementById("Nans2").checked;
    if (x2 && !y2 && !z2 && !a2 ) {
    document.getElementById("demo1").innerHTML = "Correct, Well done!";
       document.getElementById("demo1").style.color = "green"
    }
      else {
        document.getElementById("demo1").innerHTML = "Please try again."
        document.getElementById("demo1").style.color = "red"
      }
    }
    