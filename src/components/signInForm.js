
import React from 'react'
import { Grid,Paper, Avatar, Image, avatarStyle, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GoogleSignOn from './signOnBtn.js';
import Person from './Assets/Person.png'

export const signInForm = () => {
    return (
        <div>
            <Image src={Person} style={{display:'block', width:'50%', height:'auto', maxHeight:'500px', marginLeft:'auto', marginRight:'auto', align: 'center'}}rounded />
        </div>
    )
}
