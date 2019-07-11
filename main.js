function doSum() 
            {
             var firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
             var secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
           
             var sumfirstNumberSecondNumber =  firstNumber + secondNumber;
           
             document.getElementById("ansfirstNumberSecondNumber").value = sumfirstNumberSecondNumber;
           }
           //onblur='doSum()' 
           // When you leave the input field, a function is triggered  
           //subtraction
           function doSub() 
            {
             var firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
             var secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
           
             var subfirstNumberSecondNumber =  firstNumber - secondNumber;
           
             document.getElementById("ansfirstNumberSecondNumber").value = subfirstNumberSecondNumber;
           }
            //multiplcation
            function doMultiplication() 
            {
             var firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
             var secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
           
             var mulfirstNumberSecondNumber =  firstNumber * secondNumber;
           
             document.getElementById("ansfirstNumberSecondNumber").value = mulfirstNumberSecondNumber;
           }
           //Division
            function doDiv() 
            {
             var firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
             var secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
           
             var divfirstNumberSecondNumber =  firstNumber / secondNumber;
           
             document.getElementById("ansfirstNumberSecondNumber").value = divfirstNumberSecondNumber;
           }
             //Clear
             function clear() 
             {
              
            }
            
