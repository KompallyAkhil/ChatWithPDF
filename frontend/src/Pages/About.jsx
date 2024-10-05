import "./About.css";
import Details from "./Details.jsx";
import Footer from "./Footer.jsx";

const About = () => {
  return (
    <>
      <div className="faq-main-container">
        <div className="faq-container">
          <h1>FAQ - frequently asked questions</h1>
          <p>
            Ok. Suppose you are here on this page now. In that case, you might
            be looking for clarifying questions about how to download Instagram
            photos and videos. So, look below and find the most commonly asked
            questions about one of the best Instagram Downloaders and their
            answers.
          </p>
        </div>
      </div>
      <Details />
      <Footer/>
    </>
  );
};
export default About;
