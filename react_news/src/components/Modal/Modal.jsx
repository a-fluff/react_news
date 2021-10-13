import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField 
} from '@mui/material';

import './modal.css';

function Modal({isOpenModal, handleAuth, loginAuth}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [errorLogin, setErrorLogin] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  function submit() {
    if(login === 'admin' && password === 'admin') {
      loginAuth()
      handleAuth()
      clearField()
    } else {
      handleError()
    }
  }

  function handleError() {
    setErrorLogin(true)
    setErrorPassword(true)

    setPassword('')
  }

  function clearField() {
    setLogin('')
    setPassword('')
  }

  return (
    <Dialog open={isOpenModal}>
      <DialogTitle>Authorization</DialogTitle>

      <DialogContent>
        <div className="modal__input">
          <TextField 
            label="Login"
            value={login}
            error={errorLogin}
            onChange={e => {setLogin(e.target.value)}}
            variant="outlined"
          />
        </div>
        <div className="modal__input">
          <TextField 
            type="password" 
            label="Password" 
            value={password}
            error={errorPassword}
            onChange={e => {setPassword(e.target.value)}}
            variant="outlined"
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleAuth}>Cancel</Button>
        <Button onClick={submit}>Log in</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;