// import objects those are used for routing
import {Routes, Route} from 'react-router-dom';
import LayoutComponent from './components/routingapp/layoutcomponent';
import HomeComponent from './components/routingapp/homecomponent';
import AboutComponent from './components/routingapp/aboutcomponent';
import ContactComponent from './components/routingapp/contactcomponent';
import NotFoundComponent from './components/routingapp/notfoundcomponent';
function App() {
  return (
    <div className="container">
       {/* Defining teh ROute Table */}
       <Routes>
            {/* The Default Route */}
           <Route path="/" element={<LayoutComponent/>}>
              {/* Define All other components as Children of the Layout Component and make the 'HomeComponent' as an 'index' component, means the HomeComponent will be rendered when the application is loaded  */}
              <Route index  element={<HomeComponent/>}/>
              <Route  path="/about" element={<AboutComponent/>}/>
              {/* the parameterized routing, the empno is a parameter */}
              <Route  path="/contact/:empno" element={<ContactComponent/>}/>
              {/* If path is other that the specified in the route path then the navigation will takes place to the NotFoundComponent */}
              <Route  path="*" element={<NotFoundComponent/>}/>
           </Route>

       </Routes>
    </div>
  );
}

 

// export the component
export default App;
