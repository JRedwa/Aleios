
$(document).ready(function(){
    
    window.scrollTo(0,document.body.scrollTop); // load page on top
   
    $("#myForm").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
        type: "POST", //Метод отправки
        url: "mail.php", //путь до php фаила отправителя
        data: form_data,
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

