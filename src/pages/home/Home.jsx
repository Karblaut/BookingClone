
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import  PropertyList  from  '../../components/propertyList/PropertyList';
import PropertyFeatured from '../../components/propertyFeatured/PropertyFeautred';
import './home.scss';

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeTopWrapper">
<Navbar/>
<Header/>    
</div>
<div className="homeBottomWrapper">
  <Featured/>
  <div className="homePropertyListWrapper">
    <h1 className="homeTitle">Browse by property Type</h1>
    <PropertyList/>
    <PropertyFeatured/>
  </div>
</div>      
    </div>
  );
};

export default Home;

