//Recommended Component
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended(){
    return(
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>
            <div className="recommended__container">
                <div className="course-card">
                    <img src={c1} alt="c1Image" />
                        <h3>2023 Python Data Visualization Masterclass</h3>
                        <p>Col steele</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                          style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                        style={{color: "#e6ea0b"}}><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i></i>4.9</p>
                        <p>449 <del>1500</del></p>
                </div>
                <div className="course-card">
                    <img src={c2} alt="c2Image" />
                        <h3>APIs in PHP: from Basic to Advanced</h3>
                        <p>Steve</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                          style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                        style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>4.5</p>
                        <p>699 <del>2500</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt="c3Image" />
                        <h3>Master Laravel, Vue 3 & Inertia Full Stack 2023</h3>
                        <p>Kelvin</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                          style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                        style={{color: "#e6ea0b"}}></i>4.0
                        </p>
                        <p>599 <del>900</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt="c4Image" />
                        <h3>Build Real Estate Management System with PHP (8.2) & MySQL</h3>
                        <p>Wichard Clen</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                          style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>3.9</p>
                        <p>389 <del>699</del></p>
                </div>
            </div>
        </div>
    )
}

export default Recommended