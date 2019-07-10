function doSum() 
            {
             var firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
             var secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
           
             var sumfirstNumberSecondNumber =  firstNumber + secondNumber;
           
             document.getElementById("sumfirstNumberSecondNumber").value = sumfirstNumberSecondNumber;
           }
          
     //onblur='doSum()' 
           // When you leave the input field, a function is triggered  
           