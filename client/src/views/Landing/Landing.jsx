import { NavLink } from "react-router-dom"
import style from "./Landing.module.css"
import landingImg from "./img/Landing.jpeg"


const Landing = () => {
    return (
        <div className={style.container}>
            <img className={style.img} src={landingImg} alt="Landing" />
            <div className={style.button_container}>
                <NavLink to="/home" >
                    <button className={style.button}>Join us</button>
                </NavLink>
            </div>
        </div>
    )
};

export default Landing;