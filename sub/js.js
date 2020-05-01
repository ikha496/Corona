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
            document.getElementById("res").innerHTML="انت بعيد عن ان تكون حامل للفايرس و لكن رجاء الالتزام بتعليمات الوقاية";

        }
    else if(sum<=4)
        {
            document.getElementById("res").innerHTML="برجاء الالتزام بالبيت كالحجر الذاتي للوقاية من المرض";

        }
    else if (sum==5)
        {
            document.getElementById("res").innerHTML="استشر الطبيب رجاء للاطمئنان على صحتك";
        }
    else if (sum>=5)
        {
            document.getElementById("res").innerHTML="برجاء التواصل مع الجهات المعنية (105) للتاكد من سلامتك من الفايرس";
        }
}
