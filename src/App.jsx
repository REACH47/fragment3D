import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import "./App.scss";
import UploadForm from "./Components/UploadForm/UploadForm";

function App() {
  return (
    <div className="App">
      <Header title="Fragm3ntD" />
      <Gallery />
      <UploadForm />
    </div>
  );
}

export default App;
