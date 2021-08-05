import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const ClickButton = (props) => {
    const classes = useStyles();

    const {title , callBackFunc , color} = props
    
    return (
        <>
            <Button color={color} onClick={callBackFunc} className={classes.root}>{title}</Button>
        </>
    )
}

export default ClickButton
