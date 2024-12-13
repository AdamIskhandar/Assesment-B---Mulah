document.addEventListener('DOMContentLoaded', () => {
	const continueButton = document.getElementById('continue-button');

	continueButton.addEventListener('click', () => {
		const name = document.getElementById('input-name').value;
		const day = document.getElementById('input-day').value;
		const month = document.getElementById('input-month').value;
		const year = document.getElementById('input-year').value;
		const email = document.getElementById('input-email').value;
		const noEmailChecked = document.getElementById('no-email').checked;

		if (!name) {
			alert('Please enter your name.');
			return;
		}

		if (!day || !month || !year) {
			alert('Please enter your complete birthday.');
			return;
		}

		if (!email && !noEmailChecked) {
			alert("Please enter an email or check 'No email address'.");
			return;
		}

		localStorage.setItem('name', name);
		localStorage.setItem('birthday', `${day}/${month}/${year}`);
		localStorage.setItem('email', noEmailChecked ? 'No email address' : email);

		window.location.href = 'page3.html';
	});
});
