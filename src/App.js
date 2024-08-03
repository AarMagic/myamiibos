import { AmiibosContext } from "./context/AmiibosContext";
import { PrincipalRouting } from "./routes/PrincipalRouting";
import {useAsync} from './hooks/useAsync';
function App() {

  const {datos} = useAsync("https://amiiboapi.com/api/amiibo/?type=figure");
  return (
    <div className="App">
      <AmiibosContext.Provider value={datos}>
        <PrincipalRouting />
      </AmiibosContext.Provider>
    </div>
  );
}

export default App;
