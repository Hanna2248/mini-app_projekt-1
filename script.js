const gerBtn = document.getElementById('Deutschland')
const amsBtn = document.getElementById('Amsterdam')

const filterButtons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".gallery");

function changeAppNameOnClick() {
  const h1_HTML = document.getElementById("app-name")
  var userInput = prompt('Wie soll die App heißen?', h1_HTML.innerHTML)
  h1_HTML.innerHTML = userInput
}

filterButtons.forEach(button => {
  button.addEventListener("click", (Amsterdam) => {
    // Убираем класс active у всех кнопок
    filterButtons.forEach(btn => btn.classList.remove("active"));
    // Добавляем active к текущей кнопке
    button.classList.add("active");
    
const category = button.getAttribute("data-category");
console.log(category)

    images.forEach(img => {
      const imgCategory = img.getAttribute("data-category").split(" ");
      console.log(category == imgCategory)

        // Если выбрана "all" или категория совпадает — показываем
      if (category == imgCategory) {
        img.setAttribute('hidden', 'hidden');
      } else if {
        img.setAttribute('visibility', 'visible');
      }
    });
