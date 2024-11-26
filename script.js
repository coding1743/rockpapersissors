function playGame(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // Display choices
    document.getElementById('player-choice').textContent = `Your Choice: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;

    let outcome=""
    if( playerChoice===computerChoice){
        outcome="It A DrAw!"
    }else if(
        (playerChoice==='Rock'&& computerChoice==='Scissors' )||
        (playerChoice==='Paper'&& computerChoice==='Rock' )||
        (playerChoice==='Scissors'&& computerChoice==='Paper' )
    ){
        outcome="YOU WINNNNNN GOOD JOB YAYYYYYYYYYYYYYYYYYYYYYYYYYY"
    }else{
        outcome="YoU LoOsE VeRy SaDdDdDdDdDdDdDdDdDdDdDdDdDdDd!!!!!!!"
    }
    document.getElementById('out-come').textContent=`Result;  ${ outcome}`
}