import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import MainPage from '@pages/main'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
