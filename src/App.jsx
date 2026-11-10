import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  return (
    <HelmetProvider>
      {/* "user" honours the OS-level prefers-reduced-motion setting for every animation. */}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  );
}
