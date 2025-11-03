import css from "./ArticleList.module.css";

import type { Article } from "../../types/article";

interface ArticleListProps {
  items: Article[];
}

function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.story_id}>
          <a href={item.url} className={css.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
