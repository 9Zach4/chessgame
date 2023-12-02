import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./compoentns/app"

const rootElement = document.querySelector("#app")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
