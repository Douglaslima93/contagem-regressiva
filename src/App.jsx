import Title from './component/title'
import Counter from './component/Counter'
import NewYear from './assets/img/ano-novo.jpg'
import './App.css'

import useCountdown from './hooks/useCountdown,jsx'

function App() {

  const [day, hour, minute, second] = useCountdown('jan 1, 2024 00:00:00')

  return (
    <div className='App' style={{backgroundImage: `url(${NewYear})`}}>
      <div className='container'>
        <Title title = "contagem regressiva para 2024!!!"/>
        <div className='contagem-container'>
          <Counter title = "Dias" number = {day}/>
          <Counter title = "Horas" number = {hour}/>
          <Counter title = "Minutos" number = {minute}/>
          <Counter title = "Segundos" number = {second}/>
        </div>
      </div>
    </div>
  )
}

export default App
