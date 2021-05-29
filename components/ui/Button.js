import Link from 'next/link'
import React from 'react'

import classes from './button.module.css';

const Button = (props) => {
    return (
       <Link href={props.link} ><a classes={classes.btn}>
       {props.children}</a></Link>
    )
}

export default Button
