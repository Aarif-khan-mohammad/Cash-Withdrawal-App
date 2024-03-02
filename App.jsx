import CashWithdrawal from './components/CashWithdrawal/index.jsx'
import './App.css'
const denominationList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];

const App = () =>{
  
  return (<CashWithdrawal denominationList={denominationList} />
  )}
  
export default App