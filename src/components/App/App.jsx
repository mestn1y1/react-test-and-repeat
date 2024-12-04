import { useState, useEffect } from "react";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Product } from "../Product.jsx";
import { TaskList } from "../TaskList/TaskList.jsx";
import { Form } from "../Form/Form.jsx";
import { Filter } from "../Filter/Filer.jsx";
import { FeedBackForm } from "../Formik/FeedBackForm.jsx";
import { ArticlesList } from "../Articles/ArticlesList.jsx";
import initialTasks from "../../tasks.json";
import css from "./App.module.css";

export const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");
  //  Оголошуємо стан
  const [articles, setArticles] = useState([]);
  //  оглашаем состояние для лоадера
  const [loading, setLoading] = useState(false);

  // Далі потрібно перед HTTP-запитом встановити значення стану loading в true,
  //  а після запиту повернутися в false.
  //  Для цього у асинхронній функції використовуємо try...catch.

  // HTTP REQ
  // запрос выполняется во время монтирования компонента
  useEffect(() => {
    async function fetchArticlies() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );

        console.log(response);
        //  Записуємо дані в стан
        setArticles(response.data.hits);
      } catch (error) {
        // тут обрабатываем ошибку
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    fetchArticlies();
  }, []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h2>Latest articlies</h2>
      {loading && (
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      )}
      {articles.length > 0 && <ArticlesList items={articles} />}
      <h2>Task and formik</h2>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      <FeedBackForm />
    </div>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos with lime"
//         imageURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and burger"
//         imageURL="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//       <Product />
//     </div>
//   );
// };
// components
// Ім'я компонента обов'язково повинно починатися з великої літери.
// Назви компонентів з маленької літери зарезервовані для HTML - елементів.
// Якщо ви спробуєте назвати компонент product, а не Product, під час рендеру React проігнорує його та відрендерить тег < product ></ >.

// props
// Пропси використовуються для передачі динамічних значень для компонента, наприклад, для використання в JSX-розмітці, використовуючи синтаксис {}.
