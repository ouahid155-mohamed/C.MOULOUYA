import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n.js'
import { CmsProvider } from './context/CmsContext.jsx'

createRoot(document.getElementById('root')).render(
  <CmsProvider>
    <App />
  </CmsProvider>,
)
