<?php

//Variáveis

$nome =  $_POST["nome"];
$sobrenome = $_POST["sobrenome"];
$telefone = $_POST["telefone"];
$email = $_POST["email"];
$assunto = $_POST["assunto"];
$mensagem = $_POST["mensagem"];

//Corpo do email
$arquivo = "
<style type='text/css'>
body {
margin:0px;
font-family:Verdane;
font-size:12px;
color: #666666;
}
a{
color: #666666;
text-decoration: none;
}
a:hover {
color: #FF0000;
text-decoration: none;
}
</style>
  <html>
      <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#CCCCCC'>
          <tr>
            <td>
<tr>
               <td width='500'>Nome:$nome . $sobrenome</td>
              </tr>
              <tr>
                <td width='320'>E-mail:<b>$email</b></td>
   </tr>
    <tr>
                <td width='320'>Telefone:<b> $telefone</b></td>
              </tr>
   <tr>
                <td width='320'>Assunto:$assunto</td>
              </tr>
              <tr>
                <td width='320'>Mensagem:$mensagem</td>
              </tr>
          </td>
        </tr>
      </table>
  </html>
";


  // Enviar

  $emailenviar = "joboalro@yahoo.com.br";
  $destino = $emailenviar;
  $assunto = "Contato pelo site";

  //indicando formato de email a ser enviado
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
  $headers .= "From: $nome <$email>";

  //inclue arquivo de exibição em HTML
  require_once('form-enviando.html');

  //enviando email

  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
    header("location: form-enviado.html");
  } else {
    header("location: form-erro.html");
  }
 
?>