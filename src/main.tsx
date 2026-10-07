import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { MyAwesomeApp } from './MyAwesomeApp'
import { StoreApp } from './StoreApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MyAwesomeApp /> */}
    {<StoreApp />}
  </StrictMode>,
)
