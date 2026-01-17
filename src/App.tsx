import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contact'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
