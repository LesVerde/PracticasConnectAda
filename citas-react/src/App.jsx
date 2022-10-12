import Header from "./Componentes/header"
import ListadoPaciente from "./Componentes/ListadoPaciente";
import Formulario from "./Componentes/formulario";
import Error from "./Componentes/error";
import Paciente from "./Componentes/paciente";

function App() {

    return (
        <>
            <Header />
            <ListadoPaciente />
            <Formulario/>
            <Error/>
            <Paciente/>
        </>
    )
}

export default App;
