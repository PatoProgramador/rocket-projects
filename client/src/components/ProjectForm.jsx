import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from "../graphql/projects";

export function ProjectForm() {

  const [project, setProject] = useState({
    clientName: "",
    value: 0,
    department: "",
    city: ""
  });
  const [createProject, { loading, error}] = useMutation(CREATE_PROJECT)

  const handleChange = ({ target: { name, value } }) => {
    setProject({
      ...project,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        input: {
          ...project
        }
      }
    })
    console.log(project)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" name="clientName"
        placeholder="Escribe tu nombre o el de tu empresa :)"
        onChange={handleChange}
      />
      <input
        type="int" name="value"
        placeholder="Escribe el valor del proyecto"
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Escribe el departamento del proyecto"
        onChange={handleChange}
      />
      <input
        type="text" name="city"
        placeholder="Escribe la ciudad del proyecto"
        onChange={handleChange}
      />
      <button disabled={!project.clientName || !project.value || !project.city || !project.department || loading }>Guardar proyecto</button>
    </form>
  )
}