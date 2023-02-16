var demoId = document.getElementById('demo');
demoId.style.borderColor = 'green';

var demoClass = document.querySelectorAll('.demo');

// demoClass[0].style.borderColor = 'blue';
// demoClass[1].style.borderColor = 'blue';

demoClass.forEach((element) => (element.style.borderColor = 'blue'));

demoClass[1].innerText = 'Second Elements of Class';
