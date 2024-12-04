import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./FeedBackForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

export const FeedBackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const textareaFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={textareaFieldId}>Message</label>
          <Field
            className={css.field}
            as="textarea"
            name="message"
            id={textareaFieldId}
            rows="5"
          />
          <ErrorMessage name="message" component="span" />
        </div>
        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field
            className={css.field}
            as="select"
            name="level"
            id={levelFieldId}
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>/
          </Field>
          <ErrorMessage name="level" component="span" />
        </div>
        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

// FORMIK //

// SEND FORM //
// Функція відправки форми має два параметри:
// values - об'єкт значень полів форми в момент її відправки.
// actions - об'єкт з допоміжними методами. Наприклад, метод resetForm використовується для очищення полів форми після відправки.
// Функці9 відправки форми не отримує об'єкт події, що є зайвим. Formik в момент відправки форми
// викликає метод preventDefault, щоб уникнути перезавантаження сторінки;
// збирає значення полів форми в один зручний об'єкт, де ім'я властивості - це ім'я поля, а значення поля - це значення властивості.
// Отже, нам не потрібно турбуватися про оголошення стану, його зміну і збір значень полів форми. Вся рутина з формою зроблена за нас!

// ID //
// В бібліотеці Formik немає компонентів для створення label та інших семантичних елементів форми, таких як fieldset та legend.
//  Для цього використовуються звичайні теги.
//  Не забуваємо використовувати хук useId для створення унікальних ідентифікаторів полів.

// TYPE FIELDS //

// За замовчуванням компонент Field рендерить тег input.
//  Щоб змінити тип поля, необхідно передати компоненту Field пропс as значенням якого є рядок - тип тега.
// Наприклад, наступний код відобразить textarea замість input.

// <Field as="textarea" cols="20" rows="5" />

// SELECT //
// Для додавання select так само використовується компонент Field, якому передається пропс as="select".
//  Список опцій вказується тегами option між відкриваючим та закриваючим тегами Field.

// <Field as="select">
// 	<option value="o1">Option 1</option>
// 	<option value="o2">Option 2</option>
// 	<option value="o3">Option 3</option>
// </Field>

// Для того щоб відобразити користувачу помилки валідації, використовується компонент ErrorMessage.
