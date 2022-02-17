import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Oval } from "react-loader-spinner";

import './Spinner.css';

export default function Spinner({ isLoad }) {

    return(
        <div className={`spinner ${isLoad ? "active" : ""}`}>
            <Oval color="#fff" secondaryColor="#AFAFAF" height={80} width={80} />
            <span className="titulo__spinner">Cargando...</span>
        </div>
    );
}