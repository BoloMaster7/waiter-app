import './App.css';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import TableForm from './components/features/TableForm';

function App() {
  return (
  <main>
  <Container>
  <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/tableform" element={<TableForm />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
 </Container>
   </main>
  );
}

export default App;
