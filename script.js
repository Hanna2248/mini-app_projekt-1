const addBtn = document.getElementById('addBtn');
const categoriesDiv = document.getElementById('categories');
const gallery = document.getElementById('gallery');

let categoryCount = 0;

// когда нажимаем "+"
addBtn.addEventListener('click', () => {
  categoryCount++;

  // создаём новую кнопку категории
  const newCategory = document.createElement('button');
  newCategory.textContent = `Категория ${categoryCount}`;
  newCategory.classList.add('category-btn');

  // добавляем кнопку перед плюсом
  categoriesDiv.insertBefore(newCategory, addBtn);

  // когда нажимаем на новую категорию — показываем её контент
  newCategory.addEventListener('click', () => {
    gallery.innerHTML = `<p>Вы открыли ${newCategory.textContent}. Здесь могут быть её картинки.</p>`;
  });
});
    console.log("Ich wurde gecklickt!")
}