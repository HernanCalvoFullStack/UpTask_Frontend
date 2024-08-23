import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <>
        <h1 className="font-black text-center text-4xl text-white">Página No Encontrada</h1>
        <p className="font-black text-center text-white mt-10">
            Tal vez quieras voler a {" "}
            <Link 
                to={"/"} 
                className="text-fuchsia-500"    
            >Proyectos</Link>
        </p>
    </>
  )
}

export default NotFound