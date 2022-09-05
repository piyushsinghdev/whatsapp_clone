import  style from './App.module.css';
import Index from './components';
import ContactList from './components/contactlist/ContactList';
import Conversastion from './components/conversastion/Conversastion';


function App() {

  return (
    <div className={style.bg} >
      {/* <ContactList/>
      <Conversastion/>      */}
      <div className={style.div}>
      </div>
      <div className={style.index}>
      <Index/>

      </div>
    </div>
  );
}

export default App;
