import { FaRegLightbulb } from "react-icons/fa6";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="p1">
          <FaRegLightbulb className="icon" size={20} />
          <span>Nurturing Knowledge & Cultivating Excellence</span>
        </div>
        <div className="p2">
          <p>Kerala's Pioneering</p>
          <p>Tuition Center</p>
        </div>
        <div className="p3">
          <p> Unlocking the door academic excellence, one lesson at a time.</p>
        </div>
        <div className="p4">
          <img src="./homePro.png" alt="profile" />
          <p>Trusted by over 65k Students Since 2022</p>
        </div>
      </div>
      <div className="right">
        <img src="./homeImg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
