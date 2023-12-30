import styles from "./Home.module.css";
import {  Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";

const Home = () => {

  const {documents: posts, loading} = useFetchDocuments("posts");

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>

      <div className={styles.container_posts}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post}/> )}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/post/create" className="btn">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div> 
  )
}

export default Home