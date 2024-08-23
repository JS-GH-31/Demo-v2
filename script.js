function showOutcome(choice) {
    // Hide all outcomes
    document.querySelectorAll('.outcome').forEach(function(outcome) {
        outcome.style.display = 'none';
    });

    // Show the selected outcome
    document.getElementById('outcome-' + choice).style.display = 'block';
}
