// Write your JS code here
import './index.css'
import BlogsItem from '../BlogItem/index'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-card">
      {blogsList.map(item => (
        <BlogsItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default BlogsList
