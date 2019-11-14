import css from '../css/css.css';





const EventHundler = (e) => {
	const text = document.querySelector('#inputForm');
	const buttons = document.querySelector('#buttons');
	const todos = document.querySelector('.todos');
	const overlay = document.querySelector('#overlay');

	if (e.target.className == 'save') {
		let value = text.value;
		if (value.length < 3) {
			return alert('Ведите хотя бы 3 символа')
		}
		todos.insertAdjacentHTML('beforeend', `<li><span class="todo-text">${value}</span><span class="todo-trash"><i class="fas fa-trash-alt"></i></span></li>`);
		text.value = '';
	}
	if (e.target.className == 'clear') {
		todos.innerHTML = '';
	}

	if (e.target.className == 'showTips') {
		overlay.className = 'height';
	}

	if (e.target.className == 'closeTips') {
		overlay.classList.remove('height');
	}
	if (e.target.className == 'fas fa-trash-alt') {
		e.target.parentElement.parentElement.remove();
	}

}


window.addEventListener('click', EventHundler);