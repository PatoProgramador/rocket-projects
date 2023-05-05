import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import { useTable } from 'react-table';

export function ProjectList() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = useMemo(
        () => [
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
        ],
        []
    );
    const tableInstance = useTable({ columns, data: data.projects });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    console.log(data)
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} >
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
