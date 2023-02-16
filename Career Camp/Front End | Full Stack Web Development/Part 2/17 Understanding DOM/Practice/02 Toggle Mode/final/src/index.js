const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
	document.body.classList.toggle('darkmode');
	toggler.classList.toggle('darkmode');
});
