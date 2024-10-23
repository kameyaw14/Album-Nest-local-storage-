import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AlbumContextProvider } from "./contexts/AlbumContext";
import NavBar from "./components/NavBar/NavBar";
import AlbumList from "./components/AlbumList/AlbumList";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import AlbumListForm from "./components/AlbumListForm/AlbumListForm";

function App() {
  return (
    <>
      <div className="mainApp">
        <AlbumContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<AlbumList />} />
            <Route path="/albums/:id" element={<AlbumDetails />} />
            <Route path="/add-album" element={<AlbumListForm />} />
          </Routes>
        </AlbumContextProvider>
      </div>
    </>
  );
}

export default App;
