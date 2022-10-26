import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from '../components/Menu';

export default function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="contenedor" id="contenedor">
                <Routes>
                    <Route path="/" element={<div>Hola a todos</div>} />
                    <Route path="/home" element={<div>Hola a todos</div>} />
                    {/* <Route path="/search/:query" element={<Search />} />
                    <Route path="/movie/:id" element={<Post />} />
                    <Route path="/serie/:id/*" element={<Post isSerie={true} />} >
                        <Route path="season/:idSeason" element={<Temporada />} />
                    </Route> */}
                </Routes>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    );
}