import { useState } from "react";

import s from "./TagManager.module.css";

const TAGS = [
  "Apple",
  "Microsoft",
  "Microsemi",
  "MetaBank",
  "Meta",
  "Netflix",
  "Google",
  "Nvidia",
];

function TagManager() {
  const [tags, setTags] = useState<string[]>(TAGS);
  const [search, setSearch] = useState<string>("");

  const handleTagRemove = (tagName: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagName));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <div className={s.container}>
        {filteredTags.map((tag) => (
          <span key={tag} className={`${s.tag} ${taken ? "gray" : ""}`}>
            {tag} <button onClick={() => handleTagRemove(tag)}>&times;</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagManager;
