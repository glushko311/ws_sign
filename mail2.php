<?
if(isset($_REQUEST["mail"]))
{

$name = $_REQUEST["name"];
//$name = iconv ('utf-8', 'windows-1251', $name);
$mail = $_REQUEST["mail"];
$mes = $_REQUEST["mes"];
$from = "admin@ws-sign.com";
    
$text = "Запрос клиента<br />


Имя - ".$name.";<br />  
E-mail - ".$mail."; <br />
Сообщение - ".$mes;
//$text = iconv ('windows-1251', 'utf-8', $text); 


/*$text2 = "День добрый, <b>".$name."</b>!<br /><br />
 
Вы получили это письмо, в ответ при регистрации на <b>курс</b>.<br />
<b>'Начальный курс Таро. Ключ к древней мудрости человечества.'</b><br /><br />
  
В ближайшее время мы с Вами свяжемся!<br /><br />
  
Если у Вас возникнут вопросы с радостью на них ответим, смело пишите нам об этом в ответ на письма нашей рассылки.
  <br /><br />
  
Следите за нашей рассылкой и Вы получите интересную информацию.<br /><br />
  
Будьте здоровыми и счастливыми.<br />";

*/

//$text2 = iconv ('windows-1251', 'utf-8', $text2);
$headers = "From: $from". "\r\n"; 
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

//mail($mail, "Вы записались на семинар на http://tarokurs.in.ua/", $text2, $headers);

//mail("trv@bizprezent.dp.ua", "Запись на семинар", $text, $headers);

if(mail("webstudiosign@gmail.com", "Сообщение от клиента", $text, $headers)) //glushko311@bk.ru
	echo("<p style='padding:0;color:#ffcd42'>Message was sent succesfully.</p>");

}

?>