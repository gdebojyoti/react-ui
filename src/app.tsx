import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import DemoPage from 'pages/Demo'

const root = ReactDOM.createRoot(document.getElementById("dxgui-root") as HTMLElement)
root.render(
  <StrictMode>
    <DemoPage />
  </StrictMode>
)