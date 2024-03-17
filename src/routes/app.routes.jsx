import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/New';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/teste-doguito/' element={<Home/>}/>
            <Route path='/teste-doguito/new' element={<New/>}/>
        </Routes>
    )
}
