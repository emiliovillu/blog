import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Header} from './components/header/index'
import {Footer} from './components/footer/index'
import {Home} from './pages/home/index'

import Context from './context'
import {initI18n} from './i18n/i18n'
import domain from './domain/index'
import './index.scss'

initI18n().then(i18n => {
  ReactDOM.render(
    <Context.Provider i18n={i18n} domain={domain}>
      <Router>
        <>
          <Header />
          <Route path="/" exact component={Home} />
          <Footer />
        </>
      </Router>
    </Context.Provider>,
    document.getElementById('root')
  )
})
