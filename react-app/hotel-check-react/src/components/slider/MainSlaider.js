
import img1 from '../../resources/img/slider/Rectangle 23.png'
import img2 from '../../resources/img/slider/Rectangle 24.png'
import img3 from '../../resources/img/slider/Rectangle 28.png'

import '../slider/MainSlider.scss'

const Slider = () => {

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;

  
    return (
        <div className="main__slider">
                <div className="main__slider-wrapper">
                    <div  className="main__slider-inner">
                        <div className="slide">
                            <img src={img1} alt="pepper"/>
                        </div>
                        <div className="slide">
                            <img src={img2} alt="pepper"/>
                        </div>
                        <div className="slide">
                            <img src={img3} alt="pepper"/>
                        </div>
                        <div className="slide">
                            <img src={img1} alt="pepper"/>
                        </div>
                        <div className="slide">
                            <img src={img2} alt="pepper"/>
                        </div>
                        <div className="slide">
                            <img src={img3} alt="pepper"/>
                        </div>
                    </div>
                </div>
            </div>
    )
} 

export default Slider;