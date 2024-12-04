export const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(topic);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles ... " />
      <button type="submit">Search</button>
    </form>
  );
};

// Це неконтрольована форма з одним текстовим полем, значення якого потрібно лише при поданні форми.
// Форма очікує один пропс onSearch - колбек-функцію, якій передасть значення поля при сабміті форми.
