import { Button, TextField } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoggedIn } from '../store/store'
import './Admin.css'
import API from '../api/API'

const Admin = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const Token = localStorage.getItem('Token')
    if (Token) {
      setLoggedIn()
      navigate('/Admin-dashbord')
    }
  }, )
  const navigate = (path) => {
    history.push(path)
  }
    const loggedIn = useCallback(() =>
        dispatch(setLoggedIn()), [dispatch])

  const Send = () => {
    const data = { username, password }
    API.post('/api/Signin', data)
      .then((ok) => {
        if (ok.data.error === true) {
          return setMessage(ok.data.message)
        } else {
          loggedIn();
          localStorage.setItem('token', ok.data.Token);
          localStorage.setItem('Username', ok.data.Username);
          navigate('/Admin-dashbord')

        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="admin-container">
      <div className="form-admin">
        <div className="input-form">
          <TextField
            id="filled-basic"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            label="username"
            variant="filled"
          />
        </div>
        <div className="input-form">
          <TextField
            id="filled-basic"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="mot de passe"
            type="password"
            variant="filled"
          />
          {message && <span className="error-msg">{message}</span>}
        </div>
        <div className="admin-login-btn">
          <Button onClick={Send} variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Admin