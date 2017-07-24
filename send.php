<?php
/*if ($_POST["login"] == 13) echo "true";
else echo "false";*/

if(!empty($_POST['email']) AND !empty($_POST['name']) AND !empty($_POST['phone']) AND !empty($_POST['message'])){
    $letter = 'Данные сообщения:\r\n';
    $letter .= 'Имя:'.$_POST['name'].'\r\n';
    $letter .= 'Email:'.$_POST['email'].'\r\n';
    $letter .= 'Телефон:'.$_POST['phone'].'\r\n';
    $letter .= 'Сообщение:'.$_POST['message'].'\r\n';
    mail('my.poshta.goncharov@gmail.com', 'Новое сообщение', $letter);
    echo "true";
}
else{
    echo "false";
}
?>