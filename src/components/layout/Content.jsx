import { Routes , Route} from 'react-router-dom'

import Home from '../../view/examples/Home'
import About from '../../view/examples/About'
import Param from '../../view/examples/Param'
import NotFound from '../../view/examples/NotFound'

import './Content.css'

function Content() {
  return(
    <main className='Content'>
      <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/param/:id' element={<Param/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </main>
  )
}

export default Content;