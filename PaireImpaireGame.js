function pairimpaire(choice, number) {
    var computer = 0
    var somme = 0

    if ((choice !== 'paire' && choice !== 'impaire') || number > 5) {
        return ('Choose your side (paire or impaire) and the number equal or under 5.')
    } 
    else {
        computer = Math.floor(Math.random() * 6)
        somme = (number + computer) % 2
    }

    if (somme === 0 && choice === 'paire') {
        yourscore = yourscore + 1
        return ('You win !! Your score: ' + yourscore + ' Computer score: ' + scoreComputer)
    } 
    else if (somme !== 0 && choice === 'impaire') {
        yourscore = yourscore + 1
        return ('You win !! Your score: ' + yourscore + ' Computer score: ' + scoreComputer)
    } 
    else {
        scoreComputer = scoreComputer + 1
        return ('You lose !! Your score: ' + yourscore + ' Computer score: ' + scoreComputer)
    }
}