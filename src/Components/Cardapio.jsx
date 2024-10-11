export default function Cardapio(props) {

    const len = props.data.length
    let colStyle = 'col'

    return (
        <section className="container bg-color rounded">
            <div className="row py-3">
                <div className="col">
                    <h3 className="text-center text-color">Cardápio</h3>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                {props.data.map((prod, i) => {
                    colStyle = len === 1 ? 'col w-100' : 'col'
                    colStyle += len === 5 && i >= 3 ? ' col-lg-6' : ''
                    colStyle += len === 5 && i === 4 ? ' col-md-12' : ''
                    return (
                        <div className={`${colStyle} mb-3`} key={prod.id}>
                            <div className="card h-100">
                                <div className="card-img-height rounded-bottom-0">
                                    <img src={prod.imagem} className="card-img-top object-fit-cover" alt={prod.nome} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{prod.nome}</h5>
                                    <h6 className="card-text text-color">{prod.categoria}</h6>
                                    <p className="card-text">{prod.descricao}</p>
                                </div>
                                <div className="card-footer text-end">
                                    <small className="fw-bold">R$ {prod.preco}</small>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}