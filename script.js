function addNewCategory() {
    // how to get the user input?
    let userInputCategoryName;

    // access the HTML elements
    const categoriesDiv = document.getElementById(); // where to add the button?
    const addButton = document.getElementById(); // how to access the button?

    // create the button and name it
    const newButton = document.createElement('button');
    newButton.innerHTML = 'new Category';
    categoriesDiv.insertBefore(newButton, addButton);

    // log the system what happend
    console.log(
        `Die Kategorie %c${userInputCategoryName}%c wurde erfolgreich erstellt.`,
        "color: #42e425; font-weight: bold; background: #1a1a1a; padding: 2px 5px; border-radius: 3px",
        "color: inherit"
    );
}