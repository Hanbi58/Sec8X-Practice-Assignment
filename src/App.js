import FormIpt from "./components/FormIpt";
import DataDis from "./components/DataDis";
import { useState } from "react";

function App() {
  const [dataArr, setDataArr] = useState([]);
  const dataUpdateHandeler = (dataObj) => {
    setDataArr((prev) => [...prev, dataObj]);
  };

  return (
    <div style={{ backgroundColor: "lightGrey", height: "100Vh" }}>
      <FormIpt dataCollector={dataUpdateHandeler} />

      {dataArr.map((data) => (
        <DataDis name={data.name} age={data.age} key={Math.random()} />
      ))}
    </div>
  );
}

export default App;
