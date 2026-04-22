import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {

  const post = {
    titulo: "Descobrindo: Praias do Nordeste",
    data: "15 de Outubro de 2025",
    paragrafo1: "O Nordeste é famoso por suas praias bonitas e clima agradável.",
    paragrafo2: "Na viagem, conheci lugares incríveis e aproveitei muito."
  }

  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Article 
          titulo={post.titulo}
          data={post.data}
          paragrafo1={post.paragrafo1}
          paragrafo2={post.paragrafo2}
        />

        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default App