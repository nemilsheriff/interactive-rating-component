const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
let selectedValue = 0;
const form = document.getElementById('form');
const rating = document.getElementById('rating');
form.addEventListener('submit', logSubmit);
const thankYou = document.getElementById('thank-you');
const feedback = document.getElementById('feedback');

function logSubmit(event) {
      event.preventDefault();
      thankYou.classList.remove("hide");
      feedback.classList.add("hide");
      thankYou.classList.add("flex");
      console.log(selectedValue);
      rating.innerHTML = selectedValue;

}

const resetClasses = () => {
      one.className = '';
      two.className = '';
      three.className = '';
      four.className = '';
      five.className = '';
}

one.onclick = () => {
      console.log('one clicked');
      resetClasses();
      one.className = 'selected';
      selectedValue = 1;
}

two.onclick = () => {
      console.log('two clicked');
      resetClasses();
      two.className = 'selected';
      selectedValue = 2;
}

three.onclick = () => {
      console.log('three clicked');
      resetClasses();
      three.className = 'selected';
      selectedValue = 3;
}

four.onclick = () => {
      console.log('four clicked');
      resetClasses();
      four.className = 'selected';
      selectedValue = 4;
}

five.onclick = () => {
      console.log('five clicked');
      resetClasses();
      five.className = 'selected';
      selectedValue = 5;
}