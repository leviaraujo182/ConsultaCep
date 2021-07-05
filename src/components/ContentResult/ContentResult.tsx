import React from 'react'
import './ContentResult.css'
import { Card, Typography, makeStyles, List, ListItem} from '@material-ui/core'

const useStyles = makeStyles({
    txtdata: {
        fontWeight: 'bold',
        marginTop: '10px'
    },
    bordercard: {
        border: '1px solid #d8a20f',
        width: '95%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        borderRadius: '5px'
    }
})


interface ResultProps {
    city: string
    dd: string
    uf: string
}

function ContentResult(props: ResultProps){
    const classes = useStyles()
    return (
        <div className="ContentResult">
            <Card className={classes.bordercard}>
                <div className="content-header">
                    <Typography className={classes.txtdata}>DADOS</Typography>
                </div>
                <div className="content-list">
                    <List>
                        <ListItem button>
                            <Typography>Cidade: {props.city}</Typography>
                        </ListItem>
                        
                        <ListItem button>
                            <Typography>UF: {props.uf}</Typography>
                        </ListItem>

                        <ListItem button>
                            <Typography>DD: {props.dd}</Typography>
                        </ListItem>
                    </List>
                </div>

            </Card>
        </div>
    )
}

export default ContentResult