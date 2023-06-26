import "./propertyFeatured.scss"
import {propertyFeaturedData} from "../../data/propertyFeaturedData.js"

const PropertyFeatured =() => {
    return(
    <div className="PropertyFeaturedWrapper">
        {propertyFeaturedData.map((item,index) => (
            <div className="PropertyFeaturedItem" key={index}>
                <img src={item.PropertyFeatured_Image} alt="" className="propertyFeaturedItemImg" />
                <h1 className="PropertyFeatured_Name">{item.PropertyFeatured_Name}</h1>
                <h2 className="propertyLocalisation">{`${item.propertyLocalisation}`}</h2>
                <h2 className="fPPrize">{`Starting from ${item.fPPrize} `}</h2>
                <div className="Rating"><button >{`${item.Rating} `}</button> Excellent</div>
            </div>
        )
        
        
        )}
    </div>
    )
    }
    export default PropertyFeatured