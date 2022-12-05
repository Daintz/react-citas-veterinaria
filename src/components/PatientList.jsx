import Patient from "./Patient";

function PatientList({ patients, setPatient, deletePatient }) {

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
      <>
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        <p className="text-lg mt-5 text-center">
          Administra tus {''}
          <span className="text-red-600 font-bold">pacientes y citas</span>
        </p>
        <div className="md:h-screen md:overflow-y-scroll">
          {patients.map(patient => {
            const {id} = patient;
            return(
              <Patient 
                key={id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            )
          })}
        </div>
      </>

      ) : (
      <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-lg mb-5 mt-5 text-center">
          Comienza agregando pacientes {' '}
          <span className="text-red-600 font-bold">y apareceran en este lugar</span>
        </p>
      </>
      )}

    </div>
  );
}

export default PatientList;