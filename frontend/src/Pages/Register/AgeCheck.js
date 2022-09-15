
    const AgeCheck=(event) => {
      event.preventDefault(); //stops form submission page jump
      if ($("#userage").val().length != 0) {
        var value = $("#userage").val(); //store input value in a variable
        if (value <= 17) {
          $("#result").text("You are too young!");
          $("#userage").val("");
        } // end name check
        else {
          $("#result").text("You are old enough to continue!");
          //User's register detail submit 
          $("#userage").val("");
        } //end inner else
      } //end check no input
      else {
        $("#result").text("You must enter a value!");
      } //end else
    } //end biff check function
 