import {DataQuery} from '@dhis2/app-runtime';
import CustomTable from "../shared/CustomTable";
import {Container, Grid} from "@material-ui/core";
import AddButton from "../shared/AddButton";
import React from "react";

const resource = 'users'; //Type of resource

const editData = {
    firstName: 'John',
    surname: 'Doe',
    email: 'johndoe@gmail.com'
} //Example Payload for editing

const query = {
    users: {
        resource,
        params: {
            pageSize: 10,
            fields: '*'
        }
    }
}

const columns = [
    'Id',
    'Name',
    'Email'
]


export default function UsersPage() {

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} >
                    <h1>Users</h1>
                </Grid>

                <Grid item xs={12}>
                    <DataQuery query={query}>
                        {
                            ({loading, data, error, refetch}) => {
                                // console.log(data?.trackedEntityInstances?.trackedEntityInstances[0])
                                return (
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            {error && <p>{error}</p>}
                                            {loading && <p>Loading...</p>}
                                            {
                                                data &&
                                                <CustomTable
                                                    resource={resource}
                                                    data={data?.users.users.map(({
                                                                                     displayName,
                                                                                     email,
                                                                                     id
                                                                                 }) => ([id, displayName, email]))
                                                    }
                                                    columns={columns}
                                                    editData={editData}
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
