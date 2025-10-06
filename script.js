function addNewCategory() {
    const categoriesDiv = document.getElementById('categories');
    const addButton = document.getElementById(); // how to access the button?

    // functionality to add new button
    const newButton = document.createElement('button');
    newButton.innerHTML = 'new Category';
    categoriesDiv.insertBefore(newButton, addButton);

    const addBtn = document.getElementById('Amsterdam');
    const addForm = document.getElementById('addForm');

    addBtn.addEventListener('click', () => {
        addForm.classList.toggle('hidden'); // если скрыто — покажет, если видно — скроет
});
    console.log("Ich wurde gecklickt!")
}