import Header from "./Componentes/header.jsx"
import ListadoPaciente from "./Componentes/ListadoPaciente.jsx";
import Formulario from "./Componentes/formulario.jsx";
import Error from "./Componentes/error.jsx";
import Paciente from "./Componentes/paciente.jsx";

function App() {

    return (
        <div className="container mx-auto mt-15">
            <Header />
            <Formulario/>
            <ListadoPaciente />
            <Error/>
            <Paciente/>
        </div>
    )
}

export default App;
