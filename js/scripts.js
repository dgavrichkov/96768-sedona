// function toggleModal(){
// 	var modal = document.getElementById('modal-form');
// 	modal.classList.toggle('search__popup--off');
// }

document.querySelector('#modal-trigger')
	.addEventListener('click', function(){
		this.nextElementSibling
			.classList.toggle('search__popup--on');
	})


