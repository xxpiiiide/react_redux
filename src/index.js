const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

number.innerText = count;

// modify the zero : handleAdd or handleMinus 클릭할때 함수
const updateText = () => {
  number.innerText = count; // changing count
}

const handleAdd = () => {
	//console.log('add');
	count = count + 1; //or count++;
  updateText(); // 현재카운터와 함께 text를 repaint
};

const handleMinus = () => {
	//console.log('minus');
	count = count - 1; // or count--;
  updateText(); // 현재카운터와 함께 text를 repaint
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
