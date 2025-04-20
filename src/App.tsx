import './App.css'
import { mockData } from './components/SnippetNews/mock'
import { SnippetNews } from './components/SnippetNews/SnippetNews'

function App() {

  return (
    <>
      <SnippetNews {...mockData} />
    </>
  )
}

export default App
