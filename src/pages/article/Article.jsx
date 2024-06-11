import { GoPersonFill } from "react-icons/go";
import { FaBook } from "react-icons/fa6";
import { MdAccessAlarms } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import "./Aerticle.scss";

const Article = () => {
  return (
    <div className="container">
      <div className="left">
        <p>
          Find Out Why, <span>Kerala </span>First.
        </p>
        <img src="./aImg.png" alt="image" />
      </div>

      <div className="right">
        <div className="wrapper">
          <div className="article">
            <div className="menu">
              <GoPersonFill />
            </div>
            <div className="para">
              <p className="p1">Personalized Tutoring</p>
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                odit eaque nostrum explicabo soluta autem recusandae fugiat iste
                deserunt? Esse.
              </p>
            </div>
          </div>
          <div className="article">
            <div className="menu">
            <FaBook />
            </div>
            <div className="para">
              <p className="p1">Subject Expertise</p>
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                odit eaque nostrum explicabo soluta autem recusandae fugiat iste
                deserunt? Esse.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="article">
            <div className="menu">
            <MdAccessAlarms />
            </div>
            <div className="para">
              <p className="p1">Exam preparation</p>
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                odit eaque nostrum explicabo soluta autem recusandae fugiat iste
                deserunt? Esse.
              </p>
            </div>
          </div>
          <div className="article">
            <div className="menu">
            <BiSolidInstitution />
            </div>
            <div className="para">
              <p className="p1">Academic Enrichment</p>
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                odit eaque nostrum explicabo soluta autem recusandae fugiat iste
                deserunt? Esse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
