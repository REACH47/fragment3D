import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import UploadModal from "./Components/UploadModal/UploadModal";
import useModal from "./Hooks/useModal";
import "./App.scss";

function App() {
  const { toggle, visible } = useModal();
  return (
    <div className="App">
      <Header title="Fragm3ntD" />
      <Gallery />
      <button onClick={toggle}>open me</button>
      <UploadModal visible={visible} toggle={toggle} />
    </div>
  );
}

export default App;
