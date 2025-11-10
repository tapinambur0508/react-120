import { useState } from "react";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

// import { fetchPerson } from "../services/swapiService";

import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

import { fetchArticles } from "../services/articleService";

import css from "./App.module.css";

export default function App() {
  // const [counter, setCounter] = useState<number>(0);

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["character", counter],
  //   queryFn: () => fetchPerson(counter),
  //   enabled: counter > 0,
  //   staleTime: 60 * 1000, // 1 minute
  // });

  // return (
  //   <>
  //     <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
  //       -
  //     </button>
  //     <span>{counter}</span>
  //     <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
  //       +
  //     </button>
  //     {isLoading && <p>Loading ...</p>}
  //     {isError && <p>Oops. Something went wrong</p>}
  //     <h1>{data?.name}</h1>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </>
  // );
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["articles", topic, page],
    queryFn: () => fetchArticles(topic, page),
    enabled: topic !== "",
    placeholderData: keepPreviousData,
  });

  const handleSearch = (topic: string) => {
    setTopic(topic);
    setPage(1);
  };

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops! Something went wrong:(</p>}
      {isSuccess && (
        <>
          <ArticleList items={data.hits} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            containerClassName={css.pagination}
            activeClassName={css.active}
            pageRangeDisplayed={5}
            pageCount={data.nbPages}
            forcePage={page - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
}
