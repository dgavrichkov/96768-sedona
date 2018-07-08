
var popup = document.querySelector('.search__popup');

var trigger = document.querySelector('#modal-trigger');
var form = document.querySelector('#order-form');
var datein = popup.querySelector('[name=date-in]');
var dateoff = popup.querySelector('[name=date-off]');
var numadult = popup.querySelector('[name=adult-num]');
var numchild = popup.querySelector('[name=child-num]');


trigger.addEventListener('click', function(evt){
	evt.preventDefault();
	this.nextElementSibling.classList.toggle('search__popup--on');
	popup.classList.remove('search__popup--error');
})

form.addEventListener('submit', function(evt){
	if(!datein.value || !dateoff.value || !numadult.value || !numchild.value){
		evt.preventDefault();
		console.log('Заполните все поля');
		popup.classList.remove('search__popup--error');
      	popup.offsetWidth = popup.offsetWidth;
		popup.classList.add('search__popup--error')
	}
})





