import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../graphql/projects";
import { useForm } from "react-hook-form";

export function ProjectForm() {

  const [project, setProject] = useState({
    clientName: "",
    value: 0,
    department: "",
    city: ""
  });

  let [open, setOpen] = useState(false);

  const handleMessage = () => {
    setOpen(open = false);
    reset()
  };

  // peticion a la api y caché
  const [createProject, { loading }] = useMutation(CREATE_PROJECT)

  const handleChange = ({ target: { name, value } }) => {
    setProject({
      ...project,
      [name]: value
    })
  }

  const createSubmit = (data, e) => {
    e.preventDefault();
    createProject({
      variables: {
        clientName: data.clientName,
        value: parseInt(data.value),
        department: data.department,
        city: data.city
      }
    })
    setOpen(open = true);
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  return (
    <form onSubmit={handleSubmit(createSubmit)} className="w-full h-full flex flex-col items-center justify-center gap-2">
      <div className="w-full flex flex-1 justify-center items-center">
        <h1 className="text-4xl  font-bold text-center">Crear proyecto</h1>
      </div>

      <div className="w-5/6 flex flex-1 flex-col justify-center">
        <label className="w-auto mx-2 font-semibold">Nombre del cliente:</label>
        <input
          {...register("clientName", { required: true })}
          type="text" name="clientName"
          placeholder="ejemplo S.A..."
          autoComplete="off"
          onChange={handleChange}
          className="bg-zinc-800 border-0 bg-transparent py-2 rounded-lg pl-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 text-gray-50 w-full mx-2"
          style={{ outline: "none" }}
        />
        {errors.clientName && <p className="w-auto text-red-500 py-2 mx-2">El nombre del cliente es requerido</p>}
      </div>

      <div className="w-5/6 flex flex-1 flex-col justify-center">
        <label className="w-auto mx-2 font-semibold">Valor del proyecto:</label>
        <input
          {...register("value", { required: true })}
          type="text" name="value"
          placeholder="$000000"
          autoComplete="off"
          onChange={handleChange}
          className="bg-zinc-800 border-0 bg-transparent py-2 rounded-lg pl-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 text-gray-50 w-full mx-2"
          style={{ outline: "none" }}
        />
        {errors.value && <p className="w-auto text-red-500 py-2 mx-2">El valor del proyecto es requerido</p>}
      </div>

      <div className="w-5/6 flex flex-1 flex-col justify-center">
        <label className="w-auto mx-2 font-semibold ">Departamento del proyecto:</label>
        <input
          {...register("department", { required: true })}
          type="text" name="department"
          placeholder="Contabilidad..."
          autoComplete="off"
          onChange={handleChange}
          className="bg-zinc-800 border-0 bg-transparent py-2 rounded-lg pl-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 text-gray-50 w-full mx-2"
          style={{ outline: "none" }}
        />
        {errors.department && <p className="w-auto py-2 text-red-500 mx-2">El departamento es requerido</p>}
      </div>

      <div className="w-5/6 flex flex-1 flex-col justify-center">
        <label className="w-auto mx-2 font-semibold">Ciudad del proyecto:</label>
        <input
          {...register("city", { required: true })}
          type="text" name="city"
          placeholder="Bogotá..."
          autoComplete="off"
          onChange={handleChange}
          className="bg-zinc-800 border-0 bg-transparent py-2 rounded-lg pl-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 text-gray-50 w-full mx-2"
          style={{ outline: "none" }}
        />
        {errors.city && <p className="w-auto text-red-500 py-2 mx-2">La ciudad es requerida</p>}
      </div>

      <button className="flex-1 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>Guardar proyecto</button>
      {open &&
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute w-1/2 lg:w-2/5" role="alert">
          <strong className="font-bold ">!Se ha creado el proyecto!</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg onClick={handleMessage} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>}
    </form>
    
  )
}