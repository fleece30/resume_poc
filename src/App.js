import "./App.css";
import CardContainer from "./Components/CardContainer";
import InformationStack from "./Components/InformationStack";
import Preview from "./Components/Preview";

function App() {
  return (
    <div className="App flex w-full justify-between mt-10 px-10">
      <CardContainer />
      <InformationStack />
      <Preview />
    </div>
  );
}

export default App;
