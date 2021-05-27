import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/composerben">
        <img src="https://aa-react-solo-project.s3-us-west-2.amazonaws.com/GitHub-Mark-120px-plus.png" alt="link-to-github"/>
      </Link>
    </div>
  );
};

export default Footer;
