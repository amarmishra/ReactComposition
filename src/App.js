import './App.css';
import './bootstrap.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

//pages import
import {Menu} from './pages/';


import ScrollBarAndThumb from './componenets/ScrollBar/ScrollBar';

//componenets import
import {Archadion,PlayButton,DropDown,DualFunctionForm, ContactList} from './componenets';

//data import
import archadionPanels from './data/archadion_panel_data'
import SearchBar from './componenets/SearchBar/SearchBar';
import DragDropGame from './componenets/DragAndDrop/DragDropGame';



function App() {



  
  return (
    <div className="App">
       
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}></Route>
          <Route path='/archadion' element={<Archadion panels={archadionPanels} ></Archadion>}></Route>
          <Route path='/dropdown' element={<DropDown></DropDown>}></Route>
          <Route path='/scroller' element={ScrollBarAndThumb}></Route>
          <Route path='/playpausebutton' element={<PlayButton onPlay={()=>{alert('Video is now playing')}} onPause={()=>{alert('Video is now paused')}}></PlayButton>}></Route>
          <Route path='/dual-function-form'element={<DualFunctionForm></DualFunctionForm>}></Route>
          <Route path='/contact-list'element={<ContactList/>}></Route>
          <Route path='/search-bar' element={<SearchBar></SearchBar>}></Route>
          <Route path='/drag-drop' element={<DragDropGame></DragDropGame>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
