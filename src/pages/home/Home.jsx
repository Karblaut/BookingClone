
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="homeWrapper">
<Header/>    
<Navbar/>
<div className="homeFeautredWrapper">
  <Featured/>
  <Featured/>
</div>      
    </div>
  );
};

export default Home;

