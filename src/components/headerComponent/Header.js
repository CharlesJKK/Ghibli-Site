import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <div class="w-full text-end mr-5">
                <Link to={'/'}><button type='button' class="shadow-greenxl mt-1p mr-5p text-xl text-white font-GhibliNormal cursor-pointer rounded-3xl border-pink-600 bg-gradient-to-r from-blue-900 to-green-700 p-1 hover:scale-110">Home</button></Link>
                <Link to={'/About'}><button type='button' class="shadow-greenxl p-1 mt-1p mr-5p text-xl text-white font-GhibliNormal bg-gradient-to-r from-blue-900 to-green-700 cursor-pointer rounded-3xl border-pink-600 hover:scale-110">Sobre</button></Link>
                <Link to={'/Films'}><button type='button' class="shadow-greenxl p-1 mt-1p mr-5p text-xl text-white font-GhibliNormal bg-gradient-to-r from-blue-900 to-green-700 cursor-pointer rounded-3xl border-pink-600 hover:scale-110">Filmes</button></Link> 
                <Link to={'/Characters'}><button type='button' class="shadow-greenxl p-1 mt-1p mr-5p text-xl text-white font-GhibliNormal bg-gradient-to-r from-blue-900 to-green-700 cursor-pointer rounded-3xl border-pink-600 hover:scale-110">Personagens</button></Link>  
            </div>
        </>
    )
}