//PopularSection Component
import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"

function PopularSection(){
    return(
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__title">Pick the best fit</p>
            <div className="popular_container">
                <div className="course-card">
                    <img src={c5} alt="c5Image" />
                        <h3>Learn PHP Programming From Scratch</h3>
                        <p>LK Clen</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>3.9</p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c6} alt="c6Image" />
                        <h3>Let's Learn Laravel: A Guided Path For Beginners</h3>
                        <p>Martin</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>3.9</p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c7} alt="c7Image" />
                        <h3>Laravel 10 - Build Multi Vendor Ecommerce Website (2023)</h3>
                        <p>Tarzen</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>3.9</p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c8} alt="c8Image" />
                        <h3>Object Oriented PHP & MVC</h3>
                        <p>Luther</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>3.9</p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c5} alt="c5Image" />
                        <h3>Learn PHP Programming From Scratch</h3>
                        <p>LK Clen</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>3.9</p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c6} alt="c6Image" />
                        <h3>Let's Learn Laravel: A Guided Path For Beginners</h3>
                        <p>Martin</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                           style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>4.9</p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c7} alt="c7Image" />
                        <h3>Laravel 10 - Build Multi Vendor Ecommerce Website (2023)</h3>
                        <p>Tarzen</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                           style={{color: "#e6ea0b"}}></i>4.0
                        </p>
                        <p>389 <del>699</del></p>
                </div>
                <div className="course-card">
                    <img src={c8} alt="c8Image" />
                        <h3>Object Oriented PHP & MVC</h3>
                        <p>Luther</p>
                        <p><i className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                             style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star" style={{color: "#e6ea0b"}}></i><i className="fa-solid fa-star"
                                                                                           style={{color: "#e6ea0b"}}></i><i
                            className="fa-solid fa-star-half" style={{color: "#e6ea0b"}}></i>4.5</p>
                        <p>389 <del>699</del></p>
                </div>
            </div>
        </div>
    )
}

export default PopularSection