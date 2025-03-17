import preloader from "../../../../assets/images/fade-stagger-circles.svg";
import s from "./Preloader.module.css";

let Preloader = (props) => {
    return <div className={s.container}>
        <img className={s.preloader} src={preloader} />
    </div>
}

export default Preloader;