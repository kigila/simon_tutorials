const result =  true ? 'thruthy' : 'falsy';
   console.log(result);

  //  const message = true && 'hello';
   //console.log(message)

   const currency = undefined || 'USD';
   console.log(currency);

   const score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0};

   // I can apply this algorithin to webRTC call if (score === null) {}
   /*
   if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
   }
   */

   let isAutoPlaying = false;
   let intervalID;

  //  const autoPlay = () => {

  //  }

   document.querySelector('.js-autoplay-btn').addEventListener('click', () => {autoPlay()});
   document.body.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'a') autoPlay();
    if (e.key === 'Backspace') {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreEl();
    }
    });

    function autoPlay() {
      if (!isAutoPlaying) {
        intervalID = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.js-autoplay-btn').innerHTML = 'Stop Playing';

      } else {
        clearInterval(intervalID);
        isAutoPlaying = false;
        document.querySelector('.js-autoplay-btn').innerHTML = 'Auto Play';
      }
    }



    document.querySelector('.js-rock-btn').addEventListener('click', () => { playGame('rock')});
    document.querySelector('.js-paper-btn').addEventListener('click', () => { playGame('paper')});
    document.querySelector('.js-scissors-btn').addEventListener('click', () => { playGame('scissors')});


    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'r') {playGame('rock')};
      if (event.key === 'p') {playGame('paper')};
      if (event.key === 's') {playGame('scissors')};
    })

    function playGame(playerMove) {
      const computerMove = (pickComputerMove());
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }

      } else {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }

      if (result === 'You win.') {
        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }


      localStorage.setItem('score', JSON.stringify(score));

      updateScoreEl();
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon" />
        <img src="images/${computerMove}-emoji.png" class="move-icon" />
        computer`;
    }

    function updateScoreEl() {
     document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
    }

    document.querySelector('.js-reset-btn').addEventListener('click', () => {
      document.querySelector('.js-confirm-reset').innerHTML = `Are you sure you want to reset the score? <button class="js-reset-yes">Yes</button> <button class="js-reset-no">No</button>`;

      document.querySelector('.js-reset-yes').addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreEl();
        document.querySelector('.js-confirm-reset').innerHTML = '';
      });
      document.querySelector('.js-reset-no').addEventListener('click', () => {
        document.querySelector('.js-confirm-reset').innerHTML = '';
      });

    });






    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }


    console.log('hello'.length)
    console.log('hello'.toUpperCase())

    const object1 = {
      message: 'hello'
    };

    const object2 = object1;

    const object3 = {
      message: 'Good job!'
    };


    object1.message = 'Good Job!';
    console.log(object1);
    console.log(object2);

    console.log(object3 === object1);
    console.log(object2 === object1);

    const object4 = {
      message: 'Good job!',
      price: 799
    };

    // const message = object4.message;
    const { message, price } = object4;
    console.log(message, price);

    const object5 = {
      // message: message
      message,
      // method: function function1() {
      //   console.log('method');
      // },
      method() {
        console.log('method');
      }
    };

    console.log(object5);
    object5.method();

    updateScoreEl()