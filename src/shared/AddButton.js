import {Button} from '@dhis2/ui'
import React from 'react';
import {useDataMutation} from "@dhis2/app-runtime";
import {Add} from "@material-ui/icons";
import {capitalize} from "@material-ui/core";

const getMutation = (resource) => ({
    resource,
    type: 'create',
    data: ({data})=>data
})

export default function AddButton({resource, addData, onAdd}) {
    const [mutate, {loading, error}] = useDataMutation(getMutation(resource), {
        onComplete: onAdd
    })

    const onAddClick = () => {
        mutate({
            data: addData
        })
    }

    return (
        <Button onClick={onAddClick}>
            {error ? <p>{error.toString()}</p> : loading ? <p>Adding {resource}</p> : <><Add/> Add {capitalize(resource)}</>}
        </Button>
    )
}
