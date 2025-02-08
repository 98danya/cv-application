import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CVPage } from "./components/cv-view.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVPage />
  </StrictMode>,
)