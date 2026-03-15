import { use } from "react"
import Posts from './posts';

export default function Post({postPromise}) {
  const post = use(postPromise);
  console.log(post);

  return(
    <div className="card">
      <h3>All posts are here: {post.length}</h3>
      {
        post.map(post => <Posts post={post}></Posts>)
      }
    </div>
  )
}