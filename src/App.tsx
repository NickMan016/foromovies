import { MovieDBProvider } from "./context/MovieDBProvider";
import Router from "./routes";

function App() {
    return (
        <MovieDBProvider>
            <Router />
        </MovieDBProvider>
    );
}

export default App;
