import home from "./Home.module.css"
import { Link } from "react-router-dom"
const Home = () => {
    return (<>
        <div className={home.homecontainer}>
            <div className={home.heading}>
                <p className={home.title}>Chat bot Technology</p>
                <p className={home.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla inventore repudiandae quod? Assumenda aliquid dolorum est autem asperiores dicta dignissimos perferendis possimus non, quis nobis eum omnis quod animi!</p>
                <Link to="/Bot"><button className={home.btn}>Get Started</button></Link>
                
            </div>
        </div>
            <img src="https://wisetechinformatics.com/wp-content/uploads/2020/10/About-Us-01-2.svg"></img>

    </>)
}
export default Home