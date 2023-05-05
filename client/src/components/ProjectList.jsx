import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import { useTable, useGlobalFilter, useSortBy } from 'react-table';

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
    const tableInstance = useTable({ columns, data: data.projects }, useGlobalFilter, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state
    } = tableInstance;

    return (
        <div>
            <input
                type="text"
                value={state.globalFilter}
                onChange={(event) => setGlobalFilter(event.target.value)}
            />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " Z-A🔽"
                                                : " A-Z🔼"
                                            : ""}
                                    </span>
                                </th>
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
            <p>Total de registros: {preGlobalFilteredRows.length}</p>
        </div>
    );
}
