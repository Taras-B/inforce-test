import './App.css'

import { Route, Switch } from 'react-router-dom'

import Container from '@material-ui/core/Container'

import { ProductList } from './pages/ProductsList/ProductList'
import { ProductDetail } from './pages/ProductDetail/ProductDetail'
import { Header } from './components/Header/Header'
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/products/:id' component={ProductDetail} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
