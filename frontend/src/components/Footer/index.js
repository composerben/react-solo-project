import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Link to="https://github.com/composerben">
        <img src="https://aa-react-solo-project.s3-us-west-2.amazonaws.com/GitHub-Mark-120px-plus.png" />
      </Link>
    </footer>
  );
};

export default Footer;
