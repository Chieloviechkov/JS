// Task №1
function game() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const playerChoice = prompt('Камень, ножницы или бумага?').toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    alert('Игрок выбрал: ' + playerChoice + '\nКомпьютер выбрал: ' + computerChoice);
  
    if (playerChoice === computerChoice) {
      alert('Ничья!');
    } else if (
      (playerChoice === 'камень' && computerChoice === 'ножницы') ||
      (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
      (playerChoice === 'бумага' && computerChoice === 'камень')
    ) {
      alert('Игрок победил!');
    } else {
      alert('Компьютер победил!');
    }
  }

  
  game();
// Task №2
function getCentury(year) {
    const century = Math.ceil(year / 100);
    return century;
  }
  const year = 2023;
const century = getCentury(year);
console.log( year + 'Год  принадлежит к такому столетию: ' + century);
// Task №3

function filterByType(arr, type) {
    return arr.filter(item => typeof item === type);
  }
const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true,'false']];
const filteredArray = filterByType(sort, 'object');
console.log(sort);
console.log(filteredArray);
