function Form() {
    return (
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimientos pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {' '}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-10">
          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
            <input
              id="pet"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
            <input
              id="owner"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">Alta</label>
            <textarea 
              id="symptom"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas"
            />
          </div>
        </form>
      </div>
    )
}

export default Form;    