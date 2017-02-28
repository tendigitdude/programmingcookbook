/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $('#myModal').modal('show');
//    $('.show-modal').click(function(){
        $('#myModal').modal({
            backdrop:'static', keyboard: false
        });   
    }); 
//});



 $(document).ready(function() {
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
});            
$(document).ready(function() {
    $("body").popover({selector: '[data-toggle=popover]'});
});
            function next_stepTwo() {
                document.getElementById("stepOne").style.display = "none";
                document.getElementById("stepTwo").style.display = "block";
                document.getElementById("stepThree").style.display = "none";
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";                    document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";                    document.getElementById("NavGuide_StepThree").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepFour").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepFive").style.backgroundColor = "#fff";
            }
            function previous_stepOne() {
                document.getElementById("stepOne").style.display = "block";
                document.getElementById("stepTwo").style.display = "none";
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundImage="Arrow1.gif";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepOne").style.Color = "#000";
                document.getElementById("NavGuide_StepTwo").style.Color = "#fff";
            }
            function next_stepThree() {
                document.getElementById("stepTwo").style.display = "none";
                document.getElementById("stepThree").style.display = "block";                
                document.getElementById("NavGuide_StepFour").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepThree").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
            }
            function previous_stepTwo() {
                document.getElementById("stepTwo").style.display = "block";
                document.getElementById("stepThree").style.display = "none";                
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepThree").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepTwo").style.Color = "#000";
                document.getElementById("NavGuide_StepThree").style.Color = "#fff";
            }
            function next_stepFour() {
                document.getElementById("stepThree").style.display = "none";
                document.getElementById("stepFour").style.display = "block";                
                document.getElementById("NavGuide_StepFour").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepThree").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
            }
            function previous_stepThree() {
                document.getElementById("stepFour").style.display = "none";
                document.getElementById("stepThree").style.display = "block";                
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepThree").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepFour").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepTwo").style.Color = "#000";
                document.getElementById("NavGuide_StepThree").style.Color = "#fff";
            }
            function next_stepFive() {
                document.getElementById("stepFour").style.display = "none";
                document.getElementById("stepFive").style.display = "block";                
                document.getElementById("NavGuide_StepFive").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepFour").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepThree").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
            }
            function previous_stepFour() {
                document.getElementById("stepFive").style.display = "none";
                document.getElementById("stepFour").style.display = "block";                
                document.getElementById("NavGuide_StepOne").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepTwo").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepThree").style.backgroundColor = "#00ff00";                   document.getElementById("NavGuide_StepFour").style.backgroundColor = "#00ff00";
                document.getElementById("NavGuide_StepFive").style.backgroundColor = "#fff";
                document.getElementById("NavGuide_StepTwo").style.Color = "#000";
                document.getElementById("NavGuide_StepThree").style.Color = "#fff";
            }
             function NavGuide_One() {
                document.getElementById("stepOne").style.display="block";
                document.getElementById("stepTwo").style.display ="none";
                document.getElementById("stepThree").style.display="none";
                document.getElementById("stepThree").style.display="none";
                document.getElementById("stepFour").style.display="none";
                document.getElementById("stepFive").style.display="none";
                document.getElementById("NavGuide_StepOne").style.backgroundColor ='#358352';
                document.getElementById("NavGuide_StepTwo").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepThree").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFour").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFive").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepOne").style.fontSize ='230%';
                document.getElementById("NavGuide_StepTwo").style.fontSize ='200%';
                document.getElementById("NavGuide_StepThree").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFour").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFive").style.fontSize ='200%';                     document.getElementById("NavGuide_StepOne").style.color ='#fff';
                document.getElementById("NavGuide_StepTwo").style.color ='#000';
                document.getElementById("NavGuide_StepThree").style.color ='#000';
                document.getElementById("NavGuide_StepFour").style.color ='#000';
                document.getElementById("NavGuide_StepFive").style.color ='#000';
            }
      
             function NavGuide_Two() {
                document.getElementById("stepOne").style.display="none";
                document.getElementById("stepTwo").style.display ="block";
                document.getElementById("stepThree").style.display="none";
                document.getElementById("stepThree").style.display="none";
                document.getElementById("stepFour").style.display="none";
                document.getElementById("stepFive").style.display="none";
                document.getElementById("NavGuide_StepOne").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepTwo").style.backgroundColor ='#358352'; 
                document.getElementById("NavGuide_StepThree").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFour").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFive").style.backgroundColor ='#fff';         
                document.getElementById("NavGuide_StepOne").style.color ='#000';
                document.getElementById("NavGuide_StepTwo").style.color ='#fff';
                document.getElementById("NavGuide_StepThree").style.color ='#000';
                document.getElementById("NavGuide_StepFour").style.color ='#000';
                document.getElementById("NavGuide_StepFive").style.color ='#000';
                document.getElementById("NavGuide_StepOne").style.fontSize ='200%';
                document.getElementById("NavGuide_StepTwo").style.fontSize ='230%';
                document.getElementById("NavGuide_StepThree").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFour").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFive").style.fontSize ='200%'; 
            }

            function NavGuide_Three() {
                document.getElementById("stepOne").style.display="none";
                document.getElementById("stepTwo").style.display ="none";
                document.getElementById("stepThree").style.display="block";
                document.getElementById("stepFour").style.display="none";
                document.getElementById("stepFive").style.display="none";
//                var changeBgkGrnd = document.getElementById("NavGuide_StepThree");
//                if (changeBgkGrnd.click) {
//                   changeBgkGrnd.style.backgroundColor ='#358352';                 
//                }
//                else {
//                return false;
//                }
                document.getElementById("NavGuide_StepOne").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepTwo").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepThree").style.backgroundColor ='#358352'; 
                document.getElementById("NavGuide_StepFour").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFive").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepOne").style.color ='#000';
                document.getElementById("NavGuide_StepTwo").style.color ='#000';
                document.getElementById("NavGuide_StepThree").style.color ='#fff';
                document.getElementById("NavGuide_StepFour").style.color ='#000';
                document.getElementById("NavGuide_StepFive").style.color ='#000';
                document.getElementById("NavGuide_StepOne").style.fontSize ='200%';
                document.getElementById("NavGuide_StepTwo").style.fontSize ='200%';
                document.getElementById("NavGuide_StepThree").style.fontSize ='230%';
                document.getElementById("NavGuide_StepFour").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFive").style.fontSize ='200%'; 
            }
            
            function NavGuide_Four() {
                document.getElementById("stepOne").style.display="none";
                document.getElementById("stepTwo").style.display ="none";
                document.getElementById("stepThree").style.display="none";
                document.getElementById("stepFour").style.display="block";
                document.getElementById("stepFive").style.display="none";
                document.getElementById("NavGuide_StepOne").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepTwo").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepThree").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFour").style.backgroundColor ='#358352'; 
                document.getElementById("NavGuide_StepFive").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepOne").style.color ='#000';
                document.getElementById("NavGuide_StepTwo").style.color ='#000';
                document.getElementById("NavGuide_StepThree").style.color ='#000';
                document.getElementById("NavGuide_StepFour").style.color ='#fff';
                document.getElementById("NavGuide_StepFive").style.color ='#000';
                document.getElementById("NavGuide_StepOne").style.fontSize ='200%';
                document.getElementById("NavGuide_StepTwo").style.fontSize ='200%';
                document.getElementById("NavGuide_StepThree").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFour").style.fontSize ='230%';
                document.getElementById("NavGuide_StepFive").style.fontSize ='200%'; 
            }
            
            function NavGuide_Five() {
                document.getElementById("stepOne").style.display="none";
                document.getElementById("stepTwo").style.display ="none";
                document.getElementById("stepThree").style.display="none";
                document.getElementById("stepFour").style.display="none";
                document.getElementById("stepFive").style.display="block";
                document.getElementById("NavGuide_StepOne").style.backgroundColor ='#fff';
                document.getElementById("NavGuide_StepTwo").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepThree").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFour").style.backgroundColor ='#fff'; 
                document.getElementById("NavGuide_StepFive").style.backgroundColor ='#358352';
                document.getElementById("NavGuide_StepOne").style.color ='#000';
                document.getElementById("NavGuide_StepTwo").style.color ='#000';
                document.getElementById("NavGuide_StepThree").style.color ='#000';
                document.getElementById("NavGuide_StepFour").style.color ='#000';
                document.getElementById("NavGuide_StepFive").style.color ='#fff';
                document.getElementById("NavGuide_StepOne").style.fontSize ='200%';
                document.getElementById("NavGuide_StepTwo").style.fontSize ='200%';
                document.getElementById("NavGuide_StepThree").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFour").style.fontSize ='200%';
                document.getElementById("NavGuide_StepFive").style.fontSize ='230%'; 
            }
            function goToForm() {
                location.href='form.html';
            }
            
            


