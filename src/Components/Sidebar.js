import "./CSS/sidebar.css";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div class="socialContainer">
      <div class="icon-bar">
        <a href="#" class="social-icon instagram">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="#" class="social-icon twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#" class="social-icon facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" class="social-icon linkedin">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
