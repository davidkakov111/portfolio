import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from './pages/Home';

function App() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      bgcolor: 'background.default',
      color: 'text.primary',
    }}>
      <Navbar />

      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="lg" disableGutters>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Route fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
