import { signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from "config/firebase"
import { useEffect, useState } from "react"

export const email = process.env.REACT_APP_EMAIL

const useAuth = () => {
  const [authendticated, setAuthenticated] = useState<boolean>()

  useEffect(() => {
    auth.onAuthStateChanged((user) => setAuthenticated(!!user))
  }, [])

  const signIn = async (password: string) => {
    try {
      if (!email) throw new Error("Email is not defined")
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      alert(error)
    }
  }

  return [authendticated, signIn] as const
}

export default useAuth
