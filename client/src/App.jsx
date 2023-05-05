import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { Table } from './pages/Table';



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container m-auto h-screen flex items-center justify-center">
          <Routes>
            <Route path='/createProjects' element={<Projects/>}/>
            <Route path='/projectsInfo' element={<Table/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App