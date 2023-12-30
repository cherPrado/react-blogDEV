import { NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuthentication } from '../hooks/useAuthemtication';
import { useAuthValue } from '../context/AuthContext';
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../hooks/useFetchDocuments";




const Navbar = () => {
    const { user } = useAuthValue()

    const {logout} = useAuthentication()

    const [query, setQuery] = useState("");
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      if(query) {
        return navigate(`/search?q=${query}`)
      }
    }
        
  return (
    <nav className={styles.navbar}>
        <NavLink to="/"  className={styles.brand}>
            <div>
                <img src="/public/terminal.svg" alt="" />
                Blog DEV
            </div>
        </NavLink>
        <ul  className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}> 
                    Home
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}> 
                            Login
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}> 
                            Cadastrar
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles. active : '')}> 
                            Novo post
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.  active : '')}> 
                            Dashboard
                        </NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>
                    Sobre
                </NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
        
      <form onSubmit={handleSubmit} className={styles.search_form_pesq}>
        <input 
        type="text" 
        placeholder="Ou busque por tags..." 
        onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn-dark"><img src="/public/lupa.svg" alt="" /></button>
      </form>
    </nav>
  )
}

export default Navbar