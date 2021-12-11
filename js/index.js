const checkbox = document.querySelector('.reveal-box');
const passwordInput = document.querySelector('.password');
const testBtn = document.querySelector('.submit-btn');
const result = document.querySelector('.validation');
const success = document.querySelector('.success');
const fail = document.querySelector('.fail');
const requirements = document.querySelector('.requirements');

const toggle = () => {
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
	} else {
		passwordInput.type = 'password';
	}
};

const verify = (regExp, str) => {
	if (str === '' || str === ' ') {
		console.log('please enter a password');
		success.classList.add('hidden');
		fail.classList.remove('hidden');
		requirements.classList.remove('hidden');
	}
	if (!regExp.test(str)) {
		console.log('Your password should be at least 8 characters, contain 1 capital 1 digit and 1 special character');
		success.classList.add('hidden');
		fail.classList.remove('hidden');
		requirements.classList.remove('hidden');
	} else if (regExp.test(str)) {
		console.log('Success');
		fail.classList.add('hidden');
		requirements.classList.add('hidden');
		success.classList.remove('hidden');
	}
};

const regExp = /(?=.*\d)(?=.{8})(?=.*\W)(?=.*[A-Z])(?=.*[a-z])/;

console.log(
	testBtn.addEventListener('click', () => {
		verify(regExp, passwordInput.value);
	})
);
