import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/content.scss";
import { useState } from "react";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar onChangeGenre={handleGenreId} />
      <Content genreId={selectedGenreId} />
    </div>
  );
}
