import HomePage from "./components/HomePage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ListeRestaurant from "./components/ListeRestaurant";
import Restaurantmenu from "./components/Restaurantmenu";
// jjj
const App = () => {
    return (
<div>
    <BrowserRouter>
    <Routes>
    
<Route index  element={<HomePage/>}></Route>
<Route path="/services/:id"  element={<ListeRestaurant/>}></Route>
<Route path="/services/retaurent/:id"  element={<Restaurantmenu/>}></Route>

{/* <Menu/> */}
{/* <Footer/> */}
    </Routes>
    </BrowserRouter>

</div>


    )
};
export default App;





