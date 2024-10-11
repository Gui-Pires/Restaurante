import './App.css';
import Navbar from './Components/Navbar'
import Controller from './Components/Controller'
import Cardapio from './Components/Cardapio';
import data from './Data/data-produtos'
import { useState } from 'react';

function App() {

    const [dataFilter, setDataFilter] = useState(data)

    return (
        <>
            <Navbar />
            <Controller data={data} dataFilter={dataFilter} setDataFilter={setDataFilter} />
            <Cardapio data={dataFilter} />
        </>
    );
}

export default App;
