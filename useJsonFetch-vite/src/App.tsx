import { JsonDataFetcher } from "./components/JsonDataFetcher";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <JsonDataFetcher url='data'/>
      <JsonDataFetcher url='loading'/>
      <JsonDataFetcher url='error'/>
    </div>
  )
}
