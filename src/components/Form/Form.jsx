import css from "./Form.module.css";

export const Form = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="text" className={css.field} />
      <button type="submit">Add Task</button>
    </form>
  );
};
