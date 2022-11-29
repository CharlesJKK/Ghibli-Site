import img2 from '../../assets/homescreen/teste.png';
import Header from '../../components/headerComponent/Header';

export default function Homescreen(){
    return(
        <div class="bg-gradient-to-br from-blue-500 to-green-400 w-full h-screen overflow-x-hidden">
            <Header/>
            <div>
            </div>
            <div class="mt-44 w-1/3 ml-4">
                <p class="font-GhibliNormal text-white text-4xl uppercase">A viagem de chihiro
                    <p class="text-lg text-pink-300 font-GhibliBold">
                        Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.
                    </p>
                </p>
                <a href='https://www.netflix.com/br/title/60023642' target={'_blank'} rel="noopener noreferrer">
                    <button class="ml-65p p-2 w-auto cursor-pointer shadow-3xl bg-gradient-to-r from-red-600 to-red-800 border-red-600 rounded-3xl">
                        Watch on Netflix
                    </button>
                </a>
                
            <img src={img2} class="w-96 ml-100p min-w-300 mt-75p" alt='chihiro correndo'/>
            </div>
        </div>
    )
}