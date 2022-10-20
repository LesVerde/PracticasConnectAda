import Header from "./Componentes/header.jsx"
import ListadoPaciente from "./Componentes/ListadoPaciente.jsx";
import Formulario from "./Componentes/formulario.jsx";

import { useState } from "react";

function App() {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente]=useState({});

    return (
        <div className="container mx-auto mt-15">
            <Header />
            <div className="md:flex" >
                <Formulario 
                    pacientes={pacientes} 
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente} />
                    
                <ListadoPaciente />
            </div>

        </div>
    )
}

export default App;
