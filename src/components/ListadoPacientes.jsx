import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return ( 
        <div className=" md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-auto mt-16 md:mt-0">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {' '}
                        <span className=" text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    { pacientes.map( paciente =>(
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className=" font-black text-3xl text-center">No Hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza Agregando Pacientes {' '}
                        <span className=" text-indigo-600 font-bold">y Aparecerán en Este Lugar</span>
                    </p>
                </>
            )}
            {//Lo que ocurre aquí es que un array siempre es evaluado como Truthy Values, entonces no importa si es un array vacío o con contenido, siempre retorna un true, de esa forma en todos los casos se ejecuta la segunda sentencia (pacientes.length), en el caso de ser 0 se ejecuta no hay pacientes y cualquiero numero mayor a cero implicaría que al menos hay un paciente. 
            }
            
            
        </div>
     );
}
 
export default ListadoPacientes;