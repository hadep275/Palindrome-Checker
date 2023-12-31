function checkPalindrome() {
  const inputString = document.getElementById('inputString').value;
  const resultElement = document.getElementById('result');
  const hatWizardImage = document.querySelector('.hat-wizard-img');
  const isPalindrome = palindrome(inputString);

  if (isPalindrome) {
    resultElement.textContent = 'It is a palindrome!';
    resultElement.style.color = 'green'; 
  } else {
    resultElement.textContent = 'It is not a palindrome.';
    resultElement.style.color = 'red'; 

    hatWizardImage.classList.add('shake');

    setTimeout(() => {
      hatWizardImage.classList.remove('shake');
    }, 500);
  }
}

function palindrome(str) {
  // Step 1: Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Step 2: Check if the modified string is a palindrome
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

// Test cases
console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("five|\\_/|four")); // false
