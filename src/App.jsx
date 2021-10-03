import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import UploadButton from "./Components/UploadButton/UploadButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header title="Fragm3ntD" />
      <Gallery />
      <UploadButton />
    </div>
  );
}

export default App;
