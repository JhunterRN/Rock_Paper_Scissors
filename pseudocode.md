When the user inputs "rock", "paper", or "scissors": (Human player's Choice)
    >Create function that accepts said input string including only "rock", "Paper", or "scissors" are case insensitive as values. 
    >Assign resulted value to a variable (Human Choice)
When human user submit's input:
Choose a random value between integers 1 - 3. (Computer's Choice)
    >If the value is one choose 'rock'
    >If the value is two choose 'paper'
    >If the value is three choose 'scissors'
Assign returned value to a variable (Human Choice)
Create a scoring system that incrementally increases based upon who wins a game that you will program later:
    >Create score variables for comupter and human and initialize at 0
        -If Computer wins increment score +1
        -If Human wins increment score +1
        -If Human increment reaches 5, display "You have Won the Game"
        -If Computer increment reaches 5, display "You have Lost the Game"
        -else if call another round of RPS (call the initial input again)
Create logic to play a round of rock, paper, scissors utilizing variables: 
    >Create function that accepts the human, and computer choices as parameters (Probably a switch statement?)
        -If the two parameters are equivalent, then display message "Draw" and do not increment either score variable. 
        -Else if: Human chooses rock and Computer chooses scissors increment human +1
        -Else if: Human chooses rock and Computer chooses paper increment computer +1
        -Else if: Human chooses paper and Computer choses rock increment human +1
        -Else if: Human chooses paper and Computer chooses rock then increment computer +1
        -Else if: Human chooses scissors and Computer chooses paper then increment human +1
        -Else if: Human chooses scissors and Computer chooses rock then increment computer +1
        