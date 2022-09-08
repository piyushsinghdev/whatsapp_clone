import style from './App.module.css';
import Index from './components';


function App() {

  return (
    <div className={style.bg} >
      <div className={style.div}>
      </div>
      <div className={style.index}>
        <Index />
      </div>
    </div>
  );
}

export default App;
