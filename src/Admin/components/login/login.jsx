import React from 'react'
import Button from '../../export.modules';
import Textbox from '../../shared/Textbox';
export default function login() {
  function funLogin(){
    alert("Login called")
  }
  return (
    <div>
        <br />
      Login Page
      <br />
      <Textbox value="User Name"/>
      <br />
      <Textbox value="User Name"/>
      <br />
      <Button text="Login"  style="button" click={funLogin}/>
    </div>
  )
}
