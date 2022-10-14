function Formulario() {
    return (
        <div className="md:w-1/2 mx-5 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Registro de Pacientes</h2>
            <p className="mt-5 text-center text-lg mb-10">Añade Pacientes <span className="text-indigo-400 font-bold">Administrarlos</span></p>

            <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md"
                onSubmit={ev => {
                    ev.preventDefault();

                }}
            >
                <div>
                <label htmlFor="mascota" className="block uppercase font-bold text-gray-700" >Nombre mascota</label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"

                />
                </div>
                <div>
                <label htmlFor="propietario" className="block uppercase font-bold text-gray-700 mt-1.5" >Nombre propietario</label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"

                /> 
                </div>
                <div>

                <label htmlFor="email" className="block uppercase font-bold text-gray-700 mt-1.5">Correo Electronico</label>
                <input
                    id="name"
                    type="email"
                    placeholder="Correo electrónico"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                /> 
                </div>
                <div>
                <label htmlFor="alta" className="block uppercase font-bold text-gray-700 mt-1.5">Alta</label>
                <input
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 text-gray-600 rounded-md"
                />
                </div>

                {/* <label htmlFor="hora" className="block uppercase font-bold text-gray-700">Hora de Cita</label>
                <input
                    id="hora"
                    type="time"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                /> */}
                <div>
                <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700 mt-1.5">Sintomas</label>
                <textarea
                    id="sintomas"
                    name="sintomas"
                    placeholder="Sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                />
                </div>
            </form>



        </div >

    )


}

export default Formulario;