import Navigation from './Components/Navigation';
import ContactHandler from './Components/ContactHandler'
import ContactCards from './Components/ContactCards';
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './Components/About';
import { ContactProvider } from './context/ContactContext';
import ContactDetails from './Components/ContactDetails';
import Departments from './Components/Departments';
import { DepartmentContextProvider } from './context/DepartmentContext';
import { DepartmentDetails } from './Components/DepartmentDetails';

// => Check React Router DOM, Switch, Route.
// => Use <Link to="/add"> to navigate to the form page.
// => Use <Switch render=""> :: "render" prop to pass the props to the child component. 
function App() {
  return (
    <>
      
        <Navigation />
        {/* <ContactHandler /> */}
        <ContactProvider>
        <DepartmentContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/add' element={ <ContactHandler /> }></Route>
              <Route path='/list'  element={ <ContactCards />}></Route>
              <Route path='/contact/:id' element={ <ContactDetails />}></Route>
              <Route path="/departments" element={<Departments />}></Route>
              <Route path="/departments/:id" element={ <DepartmentDetails />}></Route>
            </Routes>
          </BrowserRouter>
          </DepartmentContextProvider>
        </ContactProvider>
    </>
  );
}

export default App;
