// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="blogs-items">
      <div className="blog-headings">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-desc">{description}</p>
    </li>
  )
}

export default BlogItem
