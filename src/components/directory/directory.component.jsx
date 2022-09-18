
import CategoryItems from '../category-item/category-item.components'
import './directory.styles.scss'
const Directory = ({category}) => {
    return (
        <div className="categories-container">
        { category.map((item) => {
           return <CategoryItems  category={item} key={item.id} />
         })}
       </div>
    )
}

export default Directory;