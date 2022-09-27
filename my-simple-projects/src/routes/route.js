import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Component App digunakan di sini
import App from "../App";

// JSX Home
function Home() {
  return <h3>Ini adalah halaman home</h3>;
}

// JSX About
function About() {
  return <h3>Ini adalah halaman about loh !</h3>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    // Declare route via JSX
    <Route path="/" element={<App />}>
      {/* Rute Anakan (harus ada Outlet di App) */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

export default router;
