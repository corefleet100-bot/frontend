import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/routes';
import Footer from './components/Footer';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const App = () => {
  function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);  // Scrolls to top on every route change
    }, [location]);
  
    return null;
  }
  return (
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <div className='pb-[80px]'>
            <Header />
          </div>
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
  );
};

export default App;