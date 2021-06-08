import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import './Addadmin.css'
import API from '../../../api/API';

const Addadmin = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [messageerr , setMessageerr] = useState()
    const [messagevalid, setMessagevalid]=useState()


    const Send = () => {
    const formData = new FormData()
    formData.set('username', username)
    formData.set('password', password)
    API.post('api/Singup', formData).then((res) => {
        if(res.data.erreur === true){
            setMessageerr(res.data.message)
       }else{
        setMessagevalid(res.data.message)
        setUsername('')
        setPassword('')
       }
    }).catch(err => {
        console.log(err)
    })

    }

    return (
        <>
         {messageerr && (
      <div className='toolbar-error-message'>
    <span >{messageerr}</span>
    </div>
    )}
    {messagevalid && (
      <div className='toolbar-valid-message'>
    <span >{messagevalid}</span>
    </div>)}
        <div className='addadmin-container'>
        <div className='addadmin--title--'>
            <span>Ajouter Un Admin</span>
        </div>
        <div className='addadmin-input--'>
        <TextField
         value={username}
         onChange={e => setUsername(e.target.value)}
         className='addadmin-filed'
          id="outlined-basic" label="Username" variant="outlined" />
        <TextField
         value={password}
         onChange={e => setPassword(e.target.value)}
        id="outlined-basic" label="Password" variant="outlined" type='password' />
        </div>
        <div className='addadmin--title--'>
            <div onClick={Send} className='btn-add-admin-'>
                <span>Ajouter</span>
            </div>
        </div>
     
        </div>
        </>
    )
}

export default Addadmin