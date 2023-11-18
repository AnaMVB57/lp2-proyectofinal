import Usuario from '../Usuario';
import './style.css'

function ListaUsuarios(){
    return(
        <div className='lista-usuarios'>
            <Usuario usuario={
                {
                    name:"Ana",
                    lastName:"Villanueva",
                    type:"ADMIN",
                    photoUrl:"https://cdn-icons-png.flaticon.com/512/1184/1184377.png"   
                }
            }/>
        </div>
    )
}

export default ListaUsuarios;