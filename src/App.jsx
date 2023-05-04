import Title from './component/title'
import Counter from './component/Counter'
import NewYear from './assets/img/ano-novo.jpg'
import './App.css'

function App() {
  return (
    <div className='App' style={{backgroundImage: 'url({NewYear})'}}>
      <div className='container'>
        <Title title = "contagem regressiva"/>
        <div className='contagem-container'>
          <Counter title = "Dias" number = {2}/>
          <Counter title = "Horas" number = {2}/>
          <Counter title = "Minutos" number = {2}/>
          <Counter title = "Segundos" number = {2}/>
        </div>
      </div>
    </div>
  )
}

export default App
