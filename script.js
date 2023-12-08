let inputBx = document.querySelector('.app__inputBx');
let list = document.querySelector('.app__list');

inputBx.addEventListener('keyup', function (event) {
	if (event.key == 'Enter') {
		addItem(this.value);
		this.value = '';
	}
});

let addItem = (inputBx) => {
	let listItem = document.createElement('li');
	listItem.classList.add('app__list__element');
	listItem.innerHTML = `${inputBx}<i><i>`;

	listItem.addEventListener('click', function () {
		this.classList.toggle('done');
	});

	listItem.querySelector('i').addEventListener('click', function () {
		listItem.remove();
	});

	list.appendChild(listItem);
};
