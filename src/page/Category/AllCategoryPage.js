import CategoryCard from "../../Component/Category/CategoryCard";
import Pagination from "../../Component/utility/Pagination";
import clothes from "../../images/clothe.png";
import laptop from "../../images/labtop.png"
import cat2 from "../../images/cat2.png"
import pic from "../../images/pic.png"
function AllCategoryPage() {

    return (
        <div className="container mt-20">
            <h1 className="text-3xl mb-10" style={{letterSpacing:"2px"}}>All categories</h1>
            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                <CategoryCard srcImg={ clothes } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ cat2 } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ pic } title="categorys" />
                <CategoryCard srcImg={ clothes } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ cat2 } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ pic } title="categorys" />
            </div>
            

                <Pagination />
        </div>
    );
}

export default AllCategoryPage