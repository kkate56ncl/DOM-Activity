// CREATE AN ARRAY OF OBJECTS AND MAP TO THE DOM
const myArr = [
  { firstName: 'Helen', grade: 80, pass: true },
  { firstName: 'Liam', grade: 66, pass: true },
  { firstName: 'Jenny', grade: 54, pass: false },
  { firstName: 'Charlie', grade: 35, pass: false },
  { firstName: 'Jackson', grade: 92, pass: true },
];

let dynamicHtml = document.querySelector('.dynamic-html');

myArr.map((student) => {
  let newHtml = `  
    <div class="student">
      <p>${student.firstName}</p>
      <p>Grade:${student.grade}</p>
      <p>Pass:${student.pass}</p>
    </div>`;

  dynamicHtml.innerHTML += newHtml;
});

// SLECT ALL CHECKBOXES AND OUTPUT THE SLECTED CHECKBOX VALUE
let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkBoxes.length; i++) {
  const element = checkBoxes[i];

  element.addEventListener('click', () => {
    if (element.checked) {
      console.log(element.value);
    }
  });
}

// CREATE A FRUIT BASKET OBJECT AND INCREMENT -
//      i. THE VALUES OF THE OBJECT
//      ii. THE VALUES OF THE INPUT VALUE

const fruitBasket = {
  apple: 0,
  blueberry: 0,
  strawberry: 0,
  watermelon: 0,
};

let fbBtns = document.querySelectorAll('.fb-btn');

for (let i = 0; i < fbBtns.length; i++) {
  const element = fbBtns[i];

  element.addEventListener('click', (event) => {
    const parent = event.target.parentElement;

    parent.querySelector('#fruit-amount').value++;

    const fruitType = parent.querySelector('.fruit').textContent.toLowerCase();

    switch (fruitType) {
      case 'apple':
        fruitBasket.apple++;
        break;

      case 'blueberry':
        fruitBasket.blueberry++;
        break;

      case 'strawberry':
        fruitBasket.strawberry++;
        break;

      case 'watermelon':
        fruitBasket.watermelon++;
        break;

      default:
        console.log('No valid input!');
        break;
    }

    console.log(fruitBasket);
  });
}
