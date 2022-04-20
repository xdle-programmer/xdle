<?php 
if (!empty($_POST['field-name']) AND !empty($_POST['field-email']) AND !empty($_POST['field-text'])) 
{

         
    $theme = "New message from the site";             
             
    $letter = "This message:";
    $letter .="\n\n";
    $letter .="\nName: ".$_POST['field-name'];
    $letter .="\nPhone: ".$_POST['field-email'];
    $letter .="\nMessage: ".$_POST['field-text'];
    
    if (mail("elena@lpglobalentertainment.com", $theme, $letter)){
      header("Location: thanks.html");
    } else {
      header("Location: error.html");
    }  
              
} else {
  header("Location: error.html");
}