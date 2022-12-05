import { useState, useEffect } from "react";
import Err from "./Err";

function Form({ patients, setPatients, patient, setPatient }) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [calendar, setCalendar] = useState('');
  const [sympton, setSympton] = useState('');

  const [err, setErr] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0){
      const { name, owner, email, calendar, sympton } = patient;

      setName(name);
      setOwner(owner);
      setEmail(email);
      setCalendar(calendar);
      setSympton(sympton);
    }
  }, [patient]);


  const generateID = () => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([name, owner, email, calendar, sympton].includes('')){
      console.log('Hay almenos un campo vacio');

      setErr(true);

      return;
    } 

    setErr(false);

    const objPatient = {
      name, 
      owner, 
      email, 
      calendar, 
      sympton
    }

    if (patient.id) {
      //Edit register
      objPatient.id = patient.id;

      const patientsUpdated = patients.map(patientState => patientState.id === patient.id ? objPatient : patientState)

      setPatients(patientsUpdated);
      setPatient({});

    } else {
      //New register
      objPatient.id = generateID();
      setPatients([...patients, objPatient]);
    }

    setName('');
    setOwner('');
    setEmail('');
    setCalendar('');
    setSympton('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-red-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Calendario
          </label>
          <input
            id="calendar"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={calendar}
            onChange={(e) => setCalendar(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sympton}
            onChange={(e) => setSympton(e.target.value)}
          />
          {err && <Err><p>Todos los campos son obligatorios</p></Err>}
        </div>
        <input
          type="submit"
          className="bg-red-600 w-full p-3 text-white uppercase font-bold hover:bg-red-800 cursor-pointer transition-colors"
          value={ patient.id ? 'Editar paciente' : 'Agregar paciente' }
        />
      </form>
    </div>
  );
}

export default Form;
