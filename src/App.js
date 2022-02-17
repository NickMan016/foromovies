import React from "react";
import Router from "./routes";

import MovieDBProvider from "./context/movieDB/Provider";

function App() {
    return (
        <MovieDBProvider>
            <Router />
        </MovieDBProvider>
    );
}

export default App;
