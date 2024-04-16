import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.tsx';
import Step1 from './components/step1/step1.tsx';
import Step2 from './components/step2/step2.tsx';
import Step3 from './components/step3/step3.tsx';
import Step4 from './components/step4/step4.tsx';
import './App.css'


function App() {
  

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App
