import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AlbumContextProvider } from "./contexts/AlbumContext";
import NavBar from "./components/NavBar/NavBar";
import AlbumList from "./components/AlbumList/AlbumList";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";

function App() {
  return (
    <>
      <div className="mainApp">
        <AlbumContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<AlbumList />} />
            <Route path="/albums/:id" element={<AlbumDetails />} />
          </Routes>
        </AlbumContextProvider>
      </div>
    </>
  );
}

export default App;
