import { render } from "react-dom"
import { RecoilRoot } from "recoil"
import "./index.scss"
import App from "./App"
import InitAuth from "auth/InitAuth"

render(
  <RecoilRoot>
    <InitAuth>
      <App />
    </InitAuth>
  </RecoilRoot>,
  document.getElementById("root")
)
