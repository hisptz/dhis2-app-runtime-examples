import {Table, TableHead, TableRowHead, TableCellHead, TableRow, TableCell, TableBody} from '@dhis2/ui'
import React from 'react';
import DeleteIconButton from "./DeleteButton";
import EditIconButton from "./EditIconButton";


export default function CustomTable({pager, columns = [], data = [], setPage, onDelete, onEdit, resource, editData}) {

    const rows = data.map((row) => [...row,
        <>
            {onDelete && <DeleteIconButton onDelete={onDelete} resource={resource} id={row[0]}/>}
            {onEdit && <EditIconButton onEdit={onEdit} resource={resource} id={row[0]} data={editData}/>}
        </>
    ])
    return (
        <Table>
            <TableHead>
                <TableRowHead>
                    {
                        [...columns, 'Actions']?.map(col => (
                            <TableCellHead key={col.toString()}>
                                {col}
                            </TableCellHead>
                        ))
                    }
                </TableRowHead>
            </TableHead>
            <TableBody>
                {
                    rows?.map(row => (
                        <TableRow key={row.toString()}>
                            {
                                row.map(cell => <TableCell key={`${row - cell}`}>{cell}</TableCell>)
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
