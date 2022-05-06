import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import Header from './components/Header'


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Permite buscar si hay algo en storage, si hay algo lo agrega a setPacientes y si no hay nada le agrega un un array vacío. En caso de haber algo lo convierte en un array. 
  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, [])

  //verifica lo que hay en el el array pacientes, lo que haya lo convierte en un string para poder guardarlo en el storage y ocurre cada que se modifica algo e pacientes al usar useEffect() 
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);  
  }

  return (
    <div className=' bg-gray-200 '>
        <div className='container mx-auto pt-16 pb-10 '>
          <Header/>
          <div className=' mt-12 md:flex'>
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
          </div>
      </div>
    </div>
    
  )
}

export default App
