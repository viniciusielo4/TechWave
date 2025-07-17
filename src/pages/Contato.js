import ContactForm from '../components/ContactForm';
import Cabecalho from './Cabecalho';
import Fotter from '../components/Footer'

function Contato() {
  return (
    <div>
      <Cabecalho />
      <div className="contato-container">
        <ContactForm />
      </div>
      <Fotter/>
    </div>
  );
}

export default Contato;