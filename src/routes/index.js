import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from '../views/Menu';
import Footer from '../views/Footer';
import Home from '../views/Home';
import Post from '../views/Post';
import Temporada from '../views/Seccion/components/Temporada';

export default function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="contenedor" id="contenedor">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie/:id" element={<Post />} />
                    <Route path="/serie/:id/*" element={<Post isSerie={true} />} >
                        <Route path="season/:idSeason" element={<Temporada />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}