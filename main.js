document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculatrice-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Pour éviter le rechargement de la page lors de la soumission du formulaire

        var number1 = parseFloat(document.getElementById('number1').value);
        var number2 = parseFloat(document.getElementById('number2').value);
        var operation = document.getElementById('operation').value;

        var result;
        var errorMessage = '';

        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 !== 0) {
                    result = number1 / number2;
                } else {
                    errorMessage = 'Erreur: Division par zéro.';
                }
                break;
            default:
                errorMessage = 'Erreur: Opération non reconnue.';
        }

        if (errorMessage !== '') {
            document.getElementById('error-message').textContent = errorMessage;
            document.getElementById('display').textContent = ''; // Efface le résultat en cas d'erreur
        } else {
            document.getElementById('error-message').textContent = ''; // Efface les messages d'erreur s'il n'y en a pas
            document.getElementById('display').textContent = result;
        }
    });
});
