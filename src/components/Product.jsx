export const Product = () => {
  const price = 999;
  const imageURL =
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
  return (
    <div>
      <h2>Tacos</h2>
      <p>Price: {price} credits</p>
      <img src={imageURL} alt="Tacos With Lime" width="640" />
    </div>
  );
};

// Зверніть увагу, що ім'я файлу компонента Product.jsx збігається з назвою самого компонента Product.
// Це неофіційний стандарт, якого ми будемо дотримуватися.

// У модулях можна використовувати експорт за замовчуванням(export default) або іменований експорт(export const).
// Так як компонент це головна сутність модуля, то давайте домовимось використовувати для нього експорт за замовчуванням (export default).
