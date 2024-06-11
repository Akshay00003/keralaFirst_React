import React from "react";
import style from "./Chart.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
const Chart = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src="./ch.png" alt="image" />
      </div>
      <div className={style.right}>
        <div className={style.head}>
          <p className={style.p1}>EVERYONE IS ABLE TO SHARPEN THEIR SKILLS</p>
          <p className={style.p2}>
            we believe that education is the key to unlocking the full potential
            of every student. We are Kerala's premier tuition center, dedicated
            to providing top-notch educational support and guidance to students
            of all levels. Our commitment to excellence has made us a trusted
            name in the world of education.
          </p>
        </div>
        <div className={style.items}>
          <div className={style.item1}>
            <IoIosArrowRoundForward className={style.icon} />
            <p>Experienced Faculty</p>
          </div>
          <div className={style.item1}>
            <IoIosArrowRoundForward className={style.icon} />
            <p>Online Mobile App Facility</p>
          </div>
          <div className={style.item1}>
            <IoIosArrowRoundForward className={style.icon} />
            <p>24x7 Doubt clearance Session</p>
          </div>
          <div className={style.item1}>
            <IoIosArrowRoundForward className={style.icon} />
            <p>Offline Theoy + Live Sessions</p>
          </div>
          <div className={style.item1}>
            <IoIosArrowRoundForward  className={style.icon} />
            <p>Weekly Model Exams</p>
          </div>
          <div className={style.item1}>
            <IoIosArrowRoundForward className={style.icon} />
            <p>Convenience of paying fees in monthly installments</p>
          </div>
        </div>
        <button>More about us</button>
      </div>
    </div>
  );
};

export default Chart;
