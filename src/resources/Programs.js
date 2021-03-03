import {DataQuery} from '@dhis2/app-runtime';
import CustomTable from "../shared/CustomTable";
import {Container, Grid} from "@material-ui/core";
import React from 'react';
import AddButton from "../shared/AddButton";

const resource = 'programs'; //Type of resource

const editData = {} //Example Payload for editing
const addData = {} //Example Payload for adding
const query = {
    programs: {
        resource,
        params: {
            ou: 'ueuQlqb8ccl',
            pageSize: 10,
            fields: '*'
        }
    }
}

const columns = [
    'Id',
    'Name',
    'Type',
    'Created By',
]


export default function ProgramsPage() {

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Programs</h1>
                </Grid>

                <Grid item xs={12}>
                    <DataQuery query={query}>
                        {
                            ({loading, data, error, refetch}) => {
                                console.log(data?.programs?.programs)
                                return (
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <AddButton resource={resource} addData={addData} onAdd={refetch}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {error && <p>{error}</p>}
                                            {loading && <p>Loading...</p>}
                                            {
                                                data &&
                                                <CustomTable
                                                    onEdit={_ => console.log('edited...')}
                                                    resource={resource}
                                                    onDelete={_ => console.log('deleted...')}
                                                    data={data?.programs.programs.map(({
                                                                                           id,
                                                                                           displayName,
                                                                                           programType,
                                                                                           user
                                                                                       }) => ([id, displayName, programType, user.displayName]))
                                                    }
                                                    columns={columns}
                                                    editData={editData}
                                                    refetch={refetch}
                                                />
                                            }
                                        </Grid>
                                    </Grid>
                                )
                            }
                        }
                    </DataQuery>
                </Grid>
            </Grid>
        </Container>
    )
}
