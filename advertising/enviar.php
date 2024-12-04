<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar Mensagem</title>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $mensagem = htmlspecialchars($_POST['message']);

        $meu = "advertingfraneo@gmail.com";
        $subject = "Nova mensagem de: $nome";
        $body = "Nome: $nome\nE-mail: $email\n\nMensagem:\n$mensagem";
        $headers = "From: $email";

        if (mail($meu, $subject, $body, $headers)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Erro ao enviar a mensagem.";
        }
    }
    ?>

</body>

</html>