document.addEventListener('DOMContentLoaded', () => {
	const phoneInput = document.getElementById('phone-number');
	const checkButton = document.getElementById('check-points-button');

	phoneInput.addEventListener('input', () => {
		phoneInput.value = phoneInput.value.replace(/[^0-9+]/g, '');
	});

	checkButton.addEventListener('click', () => {
		const phoneNumber = phoneInput.value;

		if (phoneNumber == '+60173527250') {
			localStorage.setItem('phoneNumber', phoneNumber);
			// Redirect to page 2
			window.location.href = 'page2.html';
		} else {
			console.log(phoneNumber);
			alert('Invalid phone number. Please enter the correct number.');
		}
	});
});
