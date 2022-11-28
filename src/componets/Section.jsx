import React from 'react'
import aa from '../componets/Section.module.css'
import { Link } from "react-router-dom";
import atalyk from "../img/atalyk1.png"
import korova from "../img/Ellipse7.png"
import lines from "../img/line.png"
import fot from "../img/pngegg-img.png"
const Section = () => {
    return (
        <div className={aa.body_menus}>
            <div className={aa.class_link}>
                
            </div>
            
            <div className={aa.glovv}>
               
                <div className={aa.glov}>
                    
                <div className={aa.text}>
            <h3>МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА
                        КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                    </h3>
                    
            </div>
            <div className={aa.imgs}>
            <div className={aa.body_menus_1}>
                <div className={aa.menus}>
                    <div className={aa.hexagons}> <Link to='/texnik'><button className={aa.btn}>маточное поголовье</button></Link> </div>
                    <div className={aa.hexagons}><Link to='/div'><button className={aa.btn2}>Быки (Семья)</button></Link></div>
                    <div className={aa.hexagons}>  <Link to='/machen'><button className={aa.btn3}>Быки (Собственные)</button></Link></div>
                    {/* <div > <Link className={aa.border_1} to='/texnik'><b>Маточное Поголовье</b></Link> </div>
                    <div ><Link className={aa.border_2} to='/Div'><b>Быки (Семя)</b></Link></div>
                    <div >  <Link className={aa.border_3} to='/machen'><b>Быки (Собственные)</b></Link></div> */}
                </div>
                
            </div>
            <div></div>
                    <img className={aa.atalyks} src={atalyk} alt="" />
                    <img className={aa.korovas} src={korova} alt="" />
                    <img className={aa.li} src={lines} alt="" />
                    
                </div>
                <div className={aa.footer}>
                    <div>
                    <img src={fot} alt="" />
                    </div>
                    <div className={aa.exit}>
                    <Link to='/menu'>
                    <button className={aa.btnss}> Выход</button>
                </Link>
                    
                    </div>
                   
                </div>
            </div>
          
                </div>
            
    
           
                
        </div>
    )
}

export default Section