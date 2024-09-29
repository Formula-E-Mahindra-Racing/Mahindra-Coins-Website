import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DefaultLayout from './layouts/DefaultLayout.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DefaultLayout />
    </StrictMode>,
)
