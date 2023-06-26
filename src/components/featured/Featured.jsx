import "./featured.scss"
import { featuredItems  } from "../../data/featuredItems";

const Featured = () => {
    return(
        <div className="featuredWrapper">
          {featuredItems.map((item,index) => ( 
             <div className="featuredItem" key={index}>
                <img src={item.City_Image} alt="" className="featuredItemImg" />
                    <div className="featuredItemTitle">
                    <h1>{item.City_Name}</h1>
                    <h2>{`${item.Properties} hotels`}</h2>
                    </div>
                <div className="featuredItemHoverText">{item.Hidden_Text}</div>
            </div>
          )
          )} 
        </div>
    )
 
    }
    export default Featured