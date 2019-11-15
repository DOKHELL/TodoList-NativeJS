import css from '../css/css.css';
import {AuthService} from './services/auth.service'; 
import { ENV } from './config/config';

const data = ENV;

const text = document.querySelector('#inputForm');
// buttns
const save = document.querySelector('.save');
const addNewTodo = document.querySelector('#pensil');
const clear = document.querySelector('.clear');
const showTips = document.querySelector('.showTips');
const closeTips = document.querySelector('.closeTips');

const todos = document.querySelector('.todos');
const overlay = document.querySelector('#overlay');

const addTodo = (e) => {
	let value = text.value;
	if (value.length < 3) {
		return alert('Ведите хотя бы 3 символа')
	}
	todos.insertAdjacentHTML('beforeend', `<li><span class="todo-text">${value}</span><span class="todo-trash"><i class="fas fa-trash-alt"></i></span></li>`);
	text.value = '';
	//saveTodoInJson();
}

const addTodoKey = (e) => {
	const keyEnter = 13;
	if (e.which == keyEnter) {
		addTodo();
	}
}

const deleteTodo = (e) => {
 	if (e.target.className == 'fas fa-trash-alt') {
		e.target.parentElement.parentElement.remove();
		//saveTodoInJson();
	 }
}
const clearAllTodo = (e) => {
	todos.innerHTML = '';
	//saveTodoInJson();
}
const showOverlay = (e) => {
	overlay.className = 'height';
}
const closeOverlay = (e) => {
	overlay.classList.remove('height');
}
const saveTodoInJson = (e) => {
	const authService = new AuthService();
	// console.log(authService.saveTodo(data));
	 let datas = [];
	for (let i = 0; i < todos.children.length; i++ ) {
		datas[i] = todos.children[i].innerText;
	}
	 data.template_params.message_html = JSON.stringify(datas.join(', '));
	 authService.saveTodo(data);
}
const addTodoOnLoad = (e) => {
	const storage = JSON.parse(localStorage.getItem('todo_item'));
	for( let i = 0; i < storage.length; i++) {
		todos.insertAdjacentHTML('beforeend', `<li><span class="todo-text">${storage[i]}</span><span class="todo-trash"><i class="fas fa-trash-alt"></i></span></li>`);
	}
}

addNewTodo.addEventListener('click', addTodo);
text.addEventListener('keypress', addTodoKey);
addNewTodo.addEventListener('click', addTodo);
save.addEventListener('click', saveTodoInJson);
window.addEventListener('load', addTodoOnLoad);
todos.addEventListener('click', deleteTodo);
clear.addEventListener('click', clearAllTodo);
showTips.addEventListener('click', showOverlay);
closeTips.addEventListener('click', closeOverlay);
