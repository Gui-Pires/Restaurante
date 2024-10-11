import banner from '../imagens/banner.png'

export default function Navbar() {
    return (
        <div className="navbar p-0">
            <div className="container-fluid container-lg p-0">
                <div className="card border-0 rounded-0 rounded-bottom-4 w-100 h-100 text-center">
                    <img src={banner} className="card-img rounded-0 rounded-bottom-4 object-fit-cover" alt="" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center text-color">
                        <h1 className="card-title white-text neon poppins-medium">Restaurant</h1>
                        <p className="card-text mt-5">De pratos clássicos a criações surpreendentes,<br /> nosso cardápio é um requinte de sabores refinados.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}