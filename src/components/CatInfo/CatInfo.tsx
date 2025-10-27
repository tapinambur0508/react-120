import type { Cat } from "../../types/cat";

import css from "./CatInfo.module.css";

interface CatInfoProps {
  cat: Cat;
}

function CatInfo({ cat: { name, image, age, available } }: CatInfoProps) {
  return (
    <div className={css.card}>
      <img src={image} alt={name} width={320} />
      <h3>{name}</h3>
      <p style={{ color: "red" }}>
        Age: <strong>{age}</strong>
      </p>
      <p>
        Available: <strong>{available ? "Yes" : "No"}</strong>
      </p>
    </div>
  );
}

export default CatInfo;
