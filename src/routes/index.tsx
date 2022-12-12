import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Home } from '../components/Home';
import { Menu } from '../components/Menu';
import { Post } from '../components/Post';
import { Search } from '../components/Search';
import { Season } from '../components/Post/components/Season';

export default function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="contenedor" id="contenedor">
                <Routes>
                    <Route path="/"  element={<Navigate to="/home" />} />
                    <Route path="/home"  element={<Home />} />
                    <Route path="/search/:query" element={<Search />} />
                    <Route path="/movie/:id" element={<Post />} />
                    <Route path="/serie/:id/*" element={<Post isSerie={true} />} >
                        <Route path="season/:idSeason" element={<Season />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}