
import "./app.css";
import Header from "./components/Header";
import SimpleSlider from "./components/SimpleSlider";
import SliderAnimated from "./SliderAnimated";

function App() {
  return (
    <>
      <Header />
     <p className="divider">Варіант слайдера 1</p>
       <SimpleSlider/>
     <p className="divider">Варіант слайдера 2</p>
      <SliderAnimated/>
    </>
  );
}

export default App;
