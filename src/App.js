import "./App.css";
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import TodoApp from "./components/Todo/todoApp";


function App() {
  const company = {
    name: 'Haz tu pedido de Estofado de Gato',
    slogan: ' 🙀 😿 ¡Los mejores estofados de gato! Porque los amamos, los comemos 😿🙀'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Estofado de Gato'
  };
  return (
    <>
      <Header company={company} />
      <main className="overflow-hidden">
        <TodoApp />
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;