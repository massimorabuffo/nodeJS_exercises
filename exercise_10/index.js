const players = ['Tina', 'Jeorge', 'Julien']

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  const getResults = (players) => {
    players.forEach(async el => {
        try{
            const result = await luckyDraw(el);
            console.log(result);
        }catch(error){
            console.error(error);
        }
    })
  }

  getResults(players);