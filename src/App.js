import "./App.css";
import CardContainer from "./Components/CardContainer";
import InformationStack from "./Components/InformationStack";

function App() {
  return (
    <div className="App flex w-full flex-auto mt-10 px-10">
      <CardContainer />
      <InformationStack />
    </div>
  );
}

export default App;
