import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import "./index.scss"
import App from "./App"
import InitAuth from "auth/InitAuth"

render(
  <BrowserRouter>
    <RecoilRoot>
      <InitAuth>
        <App />
      </InitAuth>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root")
)
