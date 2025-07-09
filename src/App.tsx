import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

export default App;