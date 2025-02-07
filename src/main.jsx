import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralInfo } from './components/general.jsx'
import { Education } from './components/education.jsx'
import { WorkExperience } from './components/experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <Education />
    <WorkExperience />
  </StrictMode>,
)