import CatInfo from "../CatInfo/CatInfo";

import cats from "../../cats.json";

function App() {
  return (
    <div>
      {cats.map((cat) => (
        <CatInfo key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default App;
