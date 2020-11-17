
$(document).ready(function(){
     
    $("#myForm").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
        url: "/mail.php", //путь до php фаила отправителя
        type: "POST", //Метод отправки
        data: form_data,
        dataType: "html",
        success: function() {
            //код в этом блоке выполняется при успешной отправке сообщения
            $("#success").fadeTo(4000, 1);  
            $(".msg").slideUp();
        
            },
        error: function(response) {
            //код в этом блоке выполняется при ошибке
            alert("error!"); 
            }               
          
        });
        return false; // по submit у формы перезагружается страница. Чтобы этого не происходило - добавьте return false; в обработчик submit:
       
    });
    
}); 


