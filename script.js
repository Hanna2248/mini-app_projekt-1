function editTitle() {
    // how to access the <h1> HTML element in JavaScript?
    const titleElement = document.getElementById();
    const currentTitle = titleElement.textContent;
    // what is the prompt in JavaScript universe?
    const newTitle = prompt('Neuen Titel eingeben:', currentTitle);

    if (newTitle !== null && newTitle.trim() !== '') {
        titleElement.textContent = newTitle;
    }
}