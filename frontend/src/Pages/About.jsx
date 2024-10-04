import about from "./About.module.css";
import Details from "./Details.jsx";
import image from "./image.webp"
const About = () => {
    return (
        <>
            <div className={about.abtcontainer}>
                <div className={about.innercontainer}>
                    <h1>Frequently Asked Questions</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro perferendis, vel eos odit reiciendis illum, ex ad adipisci tempora repellat commodi, ipsum aut voluptatum numquam? Molestias consequuntur tenetur sequi explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore itaque deleniti autem illum sit aut earum eum nam architecto hic perspiciatis saepe fugiat officiis, officia quibusdam iusto provident quia.</p>
                </div>
                <img className={about.image} src={image}></img>
            </div>
            <p className={about.para}>Signing Up</p>
            <Details/>
        </>
    )
}
export default About