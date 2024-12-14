document.getElementById('add-countries-btn').addEventListener('click', function (event) {
    // Скасувати стандартну поведінку кнопки (перезавантаження сторінки)
    event.preventDefault();

    const inputElement = document.getElementById('countries-input');
    const countriesList = document.getElementById('countries-list');
    const countries = inputElement.value.split(',').map(country => country.trim());

    // Очистити попередній список (опціонально)
    countriesList.innerHTML = '';

    // Додати країни до списку
    countries.forEach(country => {
        if (country) { // Перевірка, щоб уникнути порожніх елементів
            const listItem = document.createElement('li');
            listItem.textContent = country;
            countriesList.appendChild(listItem);
        }
    });

    // Очистити поле введення
    inputElement.value = '';
});
