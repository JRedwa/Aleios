<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['message'])&&$_POST['message']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'redwa@bk.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Message form Aleios'; //Загаловок сообщения
        $name = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]); // this is the sender's Email address
        $message = htmlspecialchars($_POST["message"]);
        $headers = "From $name\r\nEmail: $email\r\nContent-type: text/plain; charset=utf-8\r\n"; //Кодировка письма
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        $_SESSION["name"] = "";
        $_SESSION["email"] = "";
        $_SESSION["message"] = "";
}

?>