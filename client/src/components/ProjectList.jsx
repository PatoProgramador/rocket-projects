import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import Table from './Table'


export function ProjectList() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    const columns = React.useMemo(
        () => [
          {
            Header: 'Nombre del Cliente',
            accessor: 'nombreCliente',
          },
          {
            Header: 'Valor del Proyecto',
            accessor: 'valorProyecto',
          },
          {
            Header: 'Departamento del Proyecto',
            accessor: 'departamentoProyecto',
          },
          {
            Header: 'Ciudad del Proyecto',
            accessor: 'ciudadProyecto',
          },
        ],
        []
      );
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
      
      const projects = data.map(({ node }) => ({
        nombreCliente: node.clientName,
        valorProyecto: node.value,
        departamentoProyecto: node.department,
        ciudadProyecto: node.city,
      }));
    
      return (
        <Table columns={columns} data={projects} />
      );
//     return <div>
//         {
//             data.projects.map((project, index) => (
//                 <ProjectCard key={index} project={project}/>
//             ))
//         }
//     </div>
// 
}
