import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import RepoCard from '../../components/card/RepoCard'

export default function Hacking(props) {
    return (
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Typography color={props.color} variant="h1">Hacking</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                spacing={3}
            >
                {props.repos.filter(repo => repo.description.includes("Hacking")).map(repo => (
                    <Grid item>
                        <RepoCard link={repo.link} name={repo.name} fullName={repo.fullName} description={repo.description} language={repo.language} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
