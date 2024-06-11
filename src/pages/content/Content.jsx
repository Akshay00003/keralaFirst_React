import { PiStudentBold } from "react-icons/pi";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import "./Content.scss";
const Content = () => {
  return (
    <div className="content">
      <div className="left">
        <img src="./left.png" alt="left" />
      </div>
      <div className="middle">
        <div className="header">
          <p>The Premier Tuition Center </p>
          <p>For Science & Maths</p>
        </div>
        <div className="info">
          <p>
            The best cost-efficient choice for parents looking for high-quality
            education,Dedicated Timetabled Lessons
          </p>
          <p>Offered with qualified Staff.</p>
        </div>
        <div className="menu">
          <div className="m1">
            <div className="round">
              <PiStudentBold className="icon1" />
            </div>
            <div className="sub">
              <p className="p1">1K</p>
              <p className="p2">TotalStudents</p>
            </div>
          </div>
          <div className="m1">
            <div className="round">
              <BiSolidCommentDetail className="icon1" />
            </div>
            <div className="sub">
              <p className="p1">105</p>
              <p className="p2">Total Instructors</p>
            </div>
          </div>
          <div className="m1">
            <div className="round">
              <FaBookOpen className="icon1" />
            </div>
            <div className="sub">
              <p className="p1">2K+</p>
              <p className="p2">Total Activities</p>
            </div>
          </div>
        </div>
        <div className="rating">
          <button>Book now</button>
          <img src="./rate.png" alt="rate" />
        </div>
      </div>
      <div className="right">
        <img src="./right.png" alt="right" />
      </div>
    </div>
  );
};

export default Content;
