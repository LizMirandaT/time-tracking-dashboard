import '../styles/App.css';
import { TableActividad } from './TableActividad';
import { Usuario } from './Usuario';
function App() {
  return (
  <section className='todo'>
  <Usuario/>
  <TableActividad/>
  </section> 
  );
}

export default App;
