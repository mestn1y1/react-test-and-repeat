import PropTypes from "prop-types";

export const Product = ({
  name,
  imageURL = "https://images.pexels.com/photos/70457/pexels-photo-70487.jpeg?dpr=2&h=480&w=640",
  price = 100,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageURL} alt={name} width="640" />
      <p>Price: {price > 0 && price} credits</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  price: PropTypes.number.isRequired,
};

// Зверніть увагу, що ім'я файлу компонента Product.jsx збігається з назвою самого компонента Product.
// Це неофіційний стандарт, якого ми будемо дотримуватися.

// imp-exp
// У модулях можна використовувати експорт за замовчуванням(export default) або іменований експорт(export const).
// Так як компонент це головна сутність модуля, то давайте домовимось використовувати для нього експорт за замовчуванням (export default).

// props
// Відразу будемо використовувати простий патерн під час роботи з props.
//  Оскільки props – це об'єкт, ми можемо деструктуризувати його у підписі функції.
//   Це робить код чистішим і читабельнішим.

// Що, якщо компонент очікує яке - небудь значення, а його не передали ?
// Під час звернення до властивості об'єкта props отримаємо undefined.
//  Для того щоб вказати значення властивостей за замовчуванням, використовується синтаксис значень за замовчуванням під час деструктуризації пропсів.

// propTypes
// npm install --save-dev prop-types

// Використаємо prop - types і опишемо пропси компонента Product.
// Все, що необхідно зробити, це описати типи пропсів, які компонент отримує, в спеціальній властивості propTypes.
