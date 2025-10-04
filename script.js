function addNewCategory() {
    // Get category name by user input
    const userInputCategoryName = prompt('Name der neuen Kategorie:');

    if (userInputCategoryName !== null && userInputCategoryName.trim() !== '') {
        // Get color by user input
        let categoryColor;

        const categoriesDiv = document.getElementById('categories');
        const addButton = document.getElementById('btn-add-category');

        const newButton = document.createElement('button');
        newButton.innerHTML = userInputCategoryName;

        // Apply the color
        if (categoryColor !== null && categoryColor.trim() !== '') {
            // change the created buttons color to what the user inserted
            newButton
        }

        categoriesDiv.insertBefore(newButton, addButton);

        console.log(
            `Die Kategorie %c${userInputCategoryName}%c wurde erfolgreich erstellt.`,
            "color: #42e425; font-weight: bold; background: #1a1a1a; padding: 2px 5px; border-radius: 3px",
            "color: inherit"
        );
    }
}
