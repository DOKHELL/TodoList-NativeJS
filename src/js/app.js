import css from '../css/css.css';



const text = document.querySelector('#inputForm');
// buttns
const save = document.querySelector('.save');
const addNewTodo = document.querySelector('#pensil');
const clear = document.querySelector('.clear');
const showTips = document.querySelector('.showTips');

const todos = document.querySelector('.todos');
const overlay = document.querySelector('#overlay');


const addTodo = (e) => {
	let value = text.value;
	if (value.length < 3) {
		return alert('Ведите хотя бы 3 символа')
	}
	todos.insertAdjacentHTML('beforeend', `<li><span class="todo-text">${value}</span><span class="todo-trash"><i class="fas fa-trash-alt"></i></span></li>`);
	text.value = '';
}

const addTodoKey = (e) => {
	const keyEnter = 13;
	if (e.which == keyEnter) {
		addTodo();
	}
}
const saveTodoInJson = () => {

}



addNewTodo.addEventListener('click', addTodo);
text.addEventListener('keypress', addTodoKey);





























// const EventButtonTodo = (e) => {
// 	if (e.target.className == 'save') {
// 		let value = text.value;
// 		if (value.length < 3) {
// 			return alert('Ведите хотя бы 3 символа')
// 		}
// 		todos.insertAdjacentHTML('beforeend', `<li><span class="todo-text">${value}</span><span class="todo-trash"><i class="fas fa-trash-alt"></i></span></li>`);
// 		text.value = '';
// 	}

// 	if (e.target.className == 'clear') {
// 		todos.innerHTML = '';
// 	}

// 	if (e.target.className == 'showTips') {
// 		overlay.className = 'height';
// 	}
	
// }
// const EventHundler = (e) => {

// 	if (e.target.className == 'clear') {
// 		todos.innerHTML = '';
// 	}

// 	if (e.target.className == 'showTips') {
// 		overlay.className = 'height';
// 	}

// 	if (e.target.className == 'closeTips') {
// 		overlay.classList.remove('height');
// 	}
// 	if (e.target.className == 'fas fa-trash-alt') {
// 		e.target.parentElement.parentElement.remove();
// 	}

// }

// buttons.addEventListener('click', EventButtonTodo);
