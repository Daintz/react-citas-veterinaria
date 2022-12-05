function Patient({ patient, setPatient, deletePatient }) {

  const { name, owner, email, calendar, sympton, id } = patient;

  const handleDelete = () => {
    const resp = confirm('Deseas eliminar este paciente?')

    if (resp) {
      deletePatient(id);
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case">{calendar}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sympton}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
          type="button"
          className="py-2 px-10 bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >Editar</button>

        <button 
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >Eliminar</button>
      </div>
    </div>
  );
}

export default Patient;
