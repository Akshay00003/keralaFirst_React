import { ImCheckmark } from "react-icons/im";
import "./Review.scss";
const Review = () => {
  return (
    <div className="container">
      <div className="left1">
        <div className="head">
          <p className="p-1">Power in a Thoughtful</p>
          <p className="p-2">Education Professional Team</p>
          <p className="p-3">
            A robust force, our expert educators form a thoughtful team,
            delivering impactful education with strength and unity.
          </p>
        </div>
        <div className="art">
          <div className="mark">
            <ImCheckmark className="mark-item" size={15} />
          </div>
          <div className="sub-art">
            <p className="sub-p1">Experienced and Passionate Educators</p>
            <p className="sub-p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              voluptatum exercitationem doloremque, ducimus adipisci blanditiis!
            </p>
          </div>
        </div>
        <div className="art">
          <div className="mark">
            <ImCheckmark className="mark-item" size={15} />
          </div>
          <div className="sub-art">
            <p className="sub-p1">Experienced and Passionate Educators</p>
            <p className="sub-p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              voluptatum exercitationem doloremque, ducimus adipisci blanditiis!
            </p>
          </div>
        </div>
        <div className="art">
          <div className="mark">
            <ImCheckmark className="mark-item" size={15} />
          </div>
          <div className="sub-art">
            <p className="sub-p1">Experienced and Passionate Educators</p>
            <p className="sub-p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              voluptatum exercitationem doloremque, ducimus adipisci blanditiis!
            </p>
          </div>
        </div>
        <button>Read more</button>
      </div>
      <div className="right1">
        <img src="./c1.png" alt="image" />
      </div>
    </div>
  );
};

export default Review;
