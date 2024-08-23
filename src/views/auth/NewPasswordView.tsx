import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm from "@/components/auth/NewPasswordForm"
import { useState } from "react"
import { ConfirmToken } from "@/types/index"


const NewPasswordView = () => {

  const [token, setToken] = useState<ConfirmToken["token"]>("")

  const [isValidToken, setIsValidToken] = useState(false)

  return (
    <>
        <h1 className="text-5xl font-black text-white">Reestablecer Password</h1>
        <p className="text-2xl font-light text-white mt-5">
            Ingresa el código enviado {''}
            <span className=" text-fuchsia-500 font-bold"> a tu email</span>
        </p>

        {!isValidToken ? 
        <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken} /> 
        : <NewPasswordForm token={token} />}
    </>
  )
}

export default NewPasswordView