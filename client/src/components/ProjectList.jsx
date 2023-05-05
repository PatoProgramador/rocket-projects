import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import { useState } from "react";

export function ProjectList() {

    const { loading, error, data } = useQuery(GET_PROJECTS);
    

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error</p>

    let dataS = data.projects;

    
    const columns = [
            {
                Header: 'Nombre del Cliente',
                accessor: 'clientName',
            },
            {
                Header: 'Valor del Proyecto',
                accessor: 'value',
            },
            {
                Header: 'Departamento del Proyecto',
                accessor: 'department',
            },
            {
                Header: 'Ciudad del Proyecto',
                accessor: 'city',
            },
        ]

    return (
        <div >
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 " >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            columns.map((column) => (
                                <>
                                    <th scope="col" className="px-6 py-3" key={column.accessor}>{column.Header}</th>
                                </>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {
                        dataS.map((project) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project._id}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{project.clientName}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{project.value}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{project.department}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{project.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Total de registros: {dataS.length}</p>
        </div>
    );
}