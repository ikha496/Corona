function addval() {
            var sum = 0;
   
var inputElements = document.getElementsByClassName("val");
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           sum = sum + Number(inputElements[i].value);
      }
}
    

    if(sum==0)
        {
            document.getElementById("res").innerHTML="You are far from being a virus carrier, but please adhere to the prevention instructions";

        }
    else if(sum<=4)
        {
            document.getElementById("res").innerHTML="Please stick to the house as a self-quarantine to prevent disease";

        }
    else if (sum==5)
        {
            document.getElementById("res").innerHTML="Consult a doctor, please to check on your health";
        }
    else if (sum>=5)
        {
            document.getElementById("res").innerHTML="Please contact the concerned authorities (105) to ensure your safety from the virus";
        }
}
