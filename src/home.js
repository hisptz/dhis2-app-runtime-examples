import {capitalize, Container, Grid} from "@material-ui/core";
import {Button} from '@dhis2/ui'

export default function LandingPage({history}){

    const pages = [
        'users',
        'trackedEntityInstances',
        'programs'
    ]

    return(
        <Container>
            <Grid container spacing={3} style={{padding: '40px 0'}}>
                {
                    pages.map(page=>(<Grid item><Button onClick={_=>history.replace('/' + page)}>{capitalize(page)}</Button></Grid>))
                }
            </Grid>

        </Container>
    )
}
