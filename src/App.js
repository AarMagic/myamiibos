import { AmiibosContext } from "./context/AmiibosContext";
import { PrincipalRouting } from "./routes/PrincipalRouting";
import {useAsync} from './hooks/useAsync';
import { useEffect, useMemo, useState } from "react";
function App() {

  const [amiibos, setAmiibos] = useState([]);
  const {datos, cargando} = useAsync("https://amiiboapi.com/api/amiibo/?type=figure");

  useEffect(() => {
    if (!cargando && datos.length > 0 && amiibos.length === 0) {
      setAmiibos(datos)
    }
  }, [cargando, datos, amiibos])

  const amiibosValue = useMemo(() => amiibos, [amiibos])
  
  return (
    <div className="App">
      <AmiibosContext.Provider value={amiibosValue}>
        <PrincipalRouting />
      </AmiibosContext.Provider>
    </div>
  );
}

export default App;
