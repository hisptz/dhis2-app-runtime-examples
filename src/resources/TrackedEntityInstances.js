import {DataQuery} from '@dhis2/app-runtime';
import CustomTable from "../shared/CustomTable";
import {Container, Grid} from "@material-ui/core";
import React from 'react';
import AddButton from "../shared/AddButton";
const resource = 'trackedEntityInstances'; //Type of resource

const editData = {
    orgUnit: 'ueuQlqb8ccl',
    attributes: [
        {
            attribute: 'zDhUuAYrxNC',
            value: 'Nnko'
        }
    ]
} //Example Payload for editing
const addData = {
    orgUnit: 'ueuQlqb8ccl',
    trackedEntityType: "nEenWmSyUEp",
    attributes: [
        {
            attribute: 'gHGyrwKPzej',
            value: new Date()
        },
        {
            attribute: "w75KJ2mc4zz",
            value: 'Moses'
        },
        {
            attribute: "zDhUuAYrxNC",
            value: 'Nnko'
        },
    ]
} //Example Payload for adding
const query = {
    trackedEntityInstances: {
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
    'Organisation Unit',
    'Date of Birth',
    'First Name',
    'Last Name'
]


export default function TrackedEntityInstancesPage() {

    return (
       <Container>
           <Grid container>
               <Grid item xs={12} >
                   <h1>Tracked Entity Instances</h1>
               </Grid>

               <Grid item xs={12}>
                   <DataQuery query={query}>
                       {
                           ({loading, data, error, refetch}) => {
                               // console.log(data?.trackedEntityInstances?.trackedEntityInstances[0])
                               return (
                                   <Grid container spacing={3}>
                                       <Grid item xs={12}  >
                                           <AddButton resource={resource} addData={addData} onAdd={refetch} />
                                       </Grid>
                                       <Grid item xs={12}>
                                           {error && <p>{error}</p>}
                                           {loading && <p>Loading...</p>}
                                           {
                                               data &&
                                               <CustomTable
                                                   onEdit={refetch}
                                                   resource={resource}
                                                   onDelete={refetch}
                                                   data={data?.trackedEntityInstances.trackedEntityInstances.map(({
                                                                                                                      attributes,
                                                                                                                      orgUnit,
                                                                                                                      trackedEntityInstance
                                                                                                                  }) => ([trackedEntityInstance, orgUnit, ...attributes?.map(attribute => attribute.value)]))
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
