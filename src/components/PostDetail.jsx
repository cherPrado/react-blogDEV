// postDetail.jsx
import styles from './PostDetail.module.css'
import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <div className={styles.div_img}>
        <img src={post.image} alt={post.title} />
      </div>
      <div className={styles.div_text}>
         <h2>{post.title}</h2>
         <p className={styles.createdby}>{post.createdBy}</p>
        <div className={styles.tags}>
          {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>{tag}
              </p> 
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className='btn-outline' style={{ textDecoration: 'underline' }}>Leia mais</Link>
      </div>
    </div>
  )
}

export default PostDetail;
