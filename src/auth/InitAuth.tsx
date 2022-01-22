import { FC } from "react"
import useAuth, { email } from "data/useAuth"
import SignIn from "auth/SignIn"

const InitAuth: FC = ({ children }) => {
  const [authenticated, signIn] = useAuth()
  if (!email) return <>Email not found</>
  if (typeof authenticated !== "boolean") return null
  return authenticated ? <>{children}</> : <SignIn onSubmit={signIn} />
}

export default InitAuth
