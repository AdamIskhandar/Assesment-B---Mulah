document.addEventListener('DOMContentLoaded', () => {
	const phone = localStorage.getItem('phoneNumber') || 'Not provided';
	const name = localStorage.getItem('name') || 'Not provided';
	const email = localStorage.getItem('email') || 'Not provided';
	const birthday = localStorage.getItem('birthday') || 'Not provided';

	document.getElementById(
		'display-phone'
	).textContent = `Phone Number: ${phone}`;
	document.getElementById('display-name').textContent = `Name: ${name}`;
	document.getElementById('display-email').textContent = `Email: ${email}`;
	document.getElementById(
		'display-birthday'
	).textContent = `Birthday: ${birthday}`;

	document.getElementById('task-button').addEventListener('click', () => {
		alert('Thank you for completing the registration!');
	});
});
