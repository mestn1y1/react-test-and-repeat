import css from "./Task.module.css";

export const Task = ({ data: { id, text }, onDelete }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
