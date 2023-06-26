import "./propertyList.scss"
import {PropertyData} from "../../data/propertyList.js"

const PropertyList =() => {
return(
<div className="propertyListWrapper">
    {PropertyData.map((item,index) => (
        <div className="propertyListItem" key={index}>
            <img src={item.Property_Image} alt="" className="propertyItemImg" />
            <h1>{item.Property_Name}</h1>
            <h2>{`${item.Properties} ${item.Property_Name} avalaible`}</h2>
        </div>
    )
    
    
    )}
</div>
)
}
export default PropertyList