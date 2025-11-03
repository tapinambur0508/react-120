import { useState } from "react";

import axios from "axios";
// import OrderForm from "./OrderForm/OrderForm";

import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

import type { Article } from "../types/article";

interface ArticlesResponse {
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  hits: Article[];
}

console.log(import.meta.env.MY_ENV);

export default function App() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   const formData = new FormData(form);
  //   console.log(formData);

  //   const username = formData.get("username");
  //   const password = formData.get("password");

  //   console.log({ username, password });

  //   form.reset();
  // };

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setArticles([]);
      const { data } = await axios.get<ArticlesResponse>(
        `${import.meta.env.VITE_HN_URL}/search?query=${topic}`,
      );

      setArticles(data.hits);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Form</h1>

      {/* <OrderForm />
      <OrderForm /> */}

      {/* <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" />
        </div>
        <div>
          <input type="password" name="password" />
        </div>

        <button type="submit">Submit</button>
      </form> */}

      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading ...</strong>}
      {isError && <p>Oops, Something went wrong. Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
