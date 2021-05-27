import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="developer">Developer: </p>
      <a href="https://github.com/composerben">
        <img
          className="github-logo"
          src="https://aa-react-solo-project.s3-us-west-2.amazonaws.com/GitHub-Mark-120px-plus.png"
          alt="link-to-github"
        />
      </a>
    </div>
  );
};

export default Footer;
