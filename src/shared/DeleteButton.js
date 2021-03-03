import {IconButton} from "@material-ui/core";
import {DeleteOutline} from "@material-ui/icons";
import React from "react";
import {useDataMutation} from "@dhis2/app-runtime";

const getMutation = (resource) => ({
    resource,
    type: 'delete',
    id: ({id}) => id
})

export default function DeleteIconButton({resource = '', id = '', onDelete}) {
    const [mutate, {loading, error}] = useDataMutation(getMutation(resource), {
        onComplete: onDelete,
        variables: {
            id
        }
    })
    return (
        <IconButton onClick={mutate}>
            {
                error ? <p>error</p> : loading ? <p>Deleting...</p> : <DeleteOutline/>
            }
        </IconButton>
    )
}
