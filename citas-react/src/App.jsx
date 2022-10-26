import Header from "./Componentes/header.jsx"
import ListadoPaciente from "./Componentes/listadoPaciente.jsx";
import Formulario from "./Componentes/formulario.jsx";
import { useEffect, useState } from "react";

function App() {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
        setPacientes(pacientesActualizados)

    }

    useEffect(() => {
        const obtenerLS = () => {
            const registrosLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
            setPacientes(registrosLS)
        }
        obtenerLS();
    },[])

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])


    return (
        <div className="container mx-auto mt-15">
            <Header />
            <div className="md:flex" >
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente} />

                <ListadoPaciente
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}

                />
            </div>

        </div>
    )
}

export default App;
