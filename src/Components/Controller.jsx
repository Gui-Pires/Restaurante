import ButtonControl from "./ButtonControl"

// Imagens
import entrada from "../imagens/entrada.png"
import massa from '../imagens/massa.png'
import carne from '../imagens/carne.png'
import bebida from '../imagens/bebida.png'
import salada from '../imagens/salada.png'
import sobremesa from '../imagens/sobremesa.png'
import { useState } from "react"

export default function Controller(props) {

    const [state, setState] = useState(props.data)

    function filter(name) {
        let filterProd = props.data.filter((prod) => prod.categoria === name)
        if (filterProd.length === 0) {
            filterProd = props.data
        }
        setState(filterProd)
        props.setDataFilter(filterProd)
    }

    function search(value) {
        let filterProd = state
        filterProd = filterProd.filter((prod) => prod.nome.toLowerCase().includes(value.toLowerCase()))
        props.setDataFilter(filterProd)
    }

    return (
        <section className="container">
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-7 g-2 my-4">
                <ButtonControl func={filter} text='Todos' classCol={'col-12'} />
                <ButtonControl func={filter} img={entrada} text='Entradas' />
                <ButtonControl func={filter} img={massa} text='Massas' />
                <ButtonControl func={filter} img={carne} text='Carnes' />
                <ButtonControl func={filter} img={bebida} classCol={'col col-md-4'} text='Bebidas' />
                <ButtonControl func={filter} img={salada} classCol={'col col-md-4'} text='Saladas' />
                <ButtonControl func={filter} img={sobremesa} classCol={'col col-md-4'} text='Sobremesas' />
            </div>
            <div className="row my-4">
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="search-icon"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control" placeholder="Pesquisar" 
                            aria-label="Pesquisar" aria-describedby="search-icon" onChange={(e) => search(e.target.value)} />
                    </div>
                </div>
            </div>
        </section>
    )
}