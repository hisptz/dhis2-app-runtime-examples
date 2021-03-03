import {Edit} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import React from "react";
import {useDataMutation} from "@dhis2/app-runtime";

const getMutation = (resource) => ({
    resource,
    type: 'update',
    id: ({id}) => id,
    data: ({data})=>data,
})

export default function EditIconButton({resource, id, onEdit, data}) {
    const [mutate, {loading, error}] = useDataMutation(getMutation(resource), {
        onComplete: onEdit,
        variables: {
            id
        }
    });

    const onEditClick = () =>{
        mutate({
            id,
            data
        })
    }

    return (
        <IconButton onClick={onEditClick}>
            {error ? <p>error</p> : loading ? <p>Editing...</p> : <Edit/>}
        </IconButton>
    )
}
