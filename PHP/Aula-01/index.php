<?php

$name = 'Caio';

echo $name;

//include './teste.php'; //Mostra mensagem de erro mas continua executando
include_once './teste.php'; //Para ter certeza de que está incluindo apenas uma vez o arquivo

require './teste.php'; //Para de executar com o erro

echo $person;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ele se chama <?php echo $person?></h1>
</body>
</html>