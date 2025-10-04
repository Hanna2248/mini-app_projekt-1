function addNewCategory() {
    const categoriesDiv = document.getElementById('categories');
    const addButton = document.getElementById(); // how to access the button?

    // functionality to add new button
    const newButton = document.createElement('button');
    newButton.innerHTML = 'new Category';
    categoriesDiv.insertBefore(newButton, addButton);

    console.log("Ich wurde gecklickt!")
}