// Select form elements
const form = document.querySelector('form');
const percentageInput = document.querySelector('#percentage');
const submitBtn = document.querySelector('#submit');

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  // Get percentage value from form field
  const percentage = Number(percentageInput.value);

  // Check if the percentage is passing or failing
  let result;
  if (percentage >= 50) {
    result = "You passed the exam!";
  } else {
    result = "You failed the exam.";
  }

  // Display result
  const resultDiv = document.querySelector('#result');
  resultDiv.textContent = result;
});
