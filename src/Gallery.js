import react from "react"
import  './gallery.css'
import Img1 from './img/cat1.png';
import Img2 from './img/cat2.png';
import Img3 from './img/cat3.png';
import Img4 from './img/cat4.png'; 
import Img5 from './img/cat5.png';
import Img6 from './img/cat6.png';
import Img7 from './img/cat7.png';
import Img8 from './img/cat8.png';
import Img9 from './img/cat9.png';
import Img10 from './img/cat10.png';
import Img11 from './img/cat11.png';
import Img12 from './img/cat12.png';
import Img13 from './img/cat13.png';
import Img14 from './img/cat14.png';
import Img15 from './img/cat15.png';
import Img16 from './img/cat16.png';
import Img17 from './img/cat17.png';
import Img18 from './img/cat18.png';
import Img19 from './img/cat19.png';


const Gallery=()=>{
    let data=[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc:Img8,
        },
        {
            id:9,
            imgSrc:Img9,
        },
        {
            id:10,
            imgSrc:Img10,
        },
        {
            id:11,
            imgSrc:Img11,
        },
        {
            id:12,
            imgSrc:Img12,
        },
        {
            id:13,
            imgSrc:Img13,
        },
        {
            id:14,
            imgSrc:Img14,
        },
        {
            id:15,
            imgSrc:Img15,
        },
        {
            id:16,
            imgSrc:Img16,
        },
        {
            id:17,
            imgSrc:Img17,
        },
        {
            id:18,
            imgSrc:Img18,
        },
        {
            id:19,
            imgSrc:Img19,
        },

    ]
return(
<>
<div className="gallery">
    {data.map((item,id)=>{
        return(
            <div className="pics" key={id}>
                <img src = {item.imgSrc} style={{width:'100%'}}/>
            </div>
        ) 
    })}
</div>
</>
);
}

export default Gallery