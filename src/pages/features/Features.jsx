import style from "./Features.module.scss";
import { MdVideoCameraBack } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { SiMusicbrainz } from "react-icons/si";
import { GiNotebook } from "react-icons/gi";
const Features = () => {
  return (
    <div className={style.container}>
      <div style={{'background':'white'}} className={style.wrapper}>
        <div style={{'background':'white'}} className={style.item}>
          <p style={{'font-size':"35px" ,'background':'white'}} className={style.head}>Why choose our classes</p>
          <p style={{'background':'white'}} className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae modi hicusantium minus minima sed eius, iste consequuntur. Debitis modi accusamus minima mollitia, eius dolorum itaque odio alias!</p>
        </div>
        <div className={style.item}>
        <MdVideoCameraBack size={60} className={style.icon1} />
          <p className={style.head}>Flexible Scheduling</p>
          <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae modi hic optio asperiores incidunt aspernatur nulla fugiat similique quae dignissimos earum repudi</p>
        </div>
        <div className={style.item}>
        <FaPeopleLine size={50} className={style.icon2} />
          <p className={style.head}>Revision through Online Mobile App</p>
          <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae modi hic optio asperiores incidunt aspernatur nulla fugiat similique quae dignissimos earum repudiandae accusantium minus minima ses!</p>
        </div>
        <div className={style.item}>
        <SiMusicbrainz size={50} className={style.icon3} />
          <p className={style.head}>Progressive Monitoring</p>
          <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae modi hic optio asperiores incidunt aspernatur nulla fugiat simbitis modi accusamus minima mollitia, eius dolorum itaque odio alias!</p>
        </div>
        <div className={style.item}>
        <GiNotebook size={50} className={style.icon4} />
          <p className={style.head}>A Supportive Learning Environment</p>
          <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae modi hic optio asperiores incidunt aspernatur nulla fugiat similique quae  eius dolorum itaque odio alias!</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
