const gerBtn = document.getElementById('Deutschland')
const amsBtn = document.getElementById('Amsterdam')

const filterButtons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".gallery img");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Убираем класс active у всех кнопок
    filterButtons.forEach(btn => btn.classList.remove("active"));
    // Добавляем active к текущей кнопке
    button.classList.add("active");

const category = button.getAttribute("data-category");

    images.forEach(img => {
      const imgCategory = img.getAttribute("data-category").split(" ");

      // Если выбрана "all" или категория совпадает — показываем
      if (category === "alle" || category === imgCategory) {
        img.classList.remove("hidden");
      } else {
        img.classList.add("hidden");
      }
    });
  });
});

console.log(
    gerBtn.innerHTML,
    )
