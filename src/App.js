import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home.jsx';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

function App() {

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

  
  return <>


    {/* <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter> */}

    <Navbar/>

    <div style={{paddingLeft:'2rem'}}>
      <div style={{width:'25rem'}}>
        <Title texthere='FIND CLOTHES THAT MATCHES YOUR STYLE'/> 
        <p className='text-secondary' style={{fontSize:'14px'}}>Browse Through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sence of styles</p>
        
          <div className='row'>
            <div className='col' style={{border:'5px sold gray'}}>
            <Title texthere="200+" />
            <small>International Products</small>
            </div>
            <div className='col' style={{borderRight:'5px sold gray'}}>
              <Title texthere="2000+" />
              <small>High-Quality Products</small>
            </div>
            <div className='col' style={{borderRight:'5px sold gray'}}>
              <Title texthere="3000+" />
              <small>Happy Customer</small>
            </div>
        </div>
     
      </div>
      
    </div>
    <br/>

    <div style={{backgroundColor:'black',display:'flex',justifyContent:'center'}}>
      <TitleWhite texthere='Zara'/>
      <TitleWhite texthere='GUCCI'/>
      <TitleWhite texthere='PRADA'/>
    </div>
    
    <div style={{paddingLeft:'2rem'}}>
      <div style={{textAlign:'center'}}>
        <TitleSmall texthere='NEW ARRIVALS'/>
      </div>

      <ProductCard/>
    </div>

  </>
}

export default App;


const Navbar=()=>{
  return <>
  
    <div style={{backgroundColor:'black',textAlign:'center'}}>
        {/* <div style={{display:'flex',textAlign:'center'}}> */}
            <p style={{padding:'0.4rem', color:'whitesmoke',textAlign:'center',fontSize:'10px'}}>Signup and get 20% off to first order <span style={{textDecoration:'underline',cursor:'pointer'}}>Signup Now</span> </p>
            {/* <Link to='/home'>Signup Now</Link> */}
        {/* </div> */}
    </div>
    
    <div style={{padding:'0.1rem',display:'flex'}}>
      <ol style={{listStyle:'none',display:'flex'}}>
        <li style={{fontWeight:'bolder',fontSize:'25px',paddingRight:'2rem'}}>SHOP.CO</li>
        <li style={{width:'5rem',fontWeight:'normal',fontSize:'10px',padding:'0.6rem 0.5rem'}}>Shop</li>
        <li style={{width:'5rem',fontWeight:'normal',fontSize:'10px',padding:'0.6rem 0.5rem'}}>On Sale</li>
        <li style={{width:'5rem',fontWeight:'normal',fontSize:'10px',padding:'0.6rem 0.5rem'}}>New Arrival</li>
        <li style={{width:'5rem',fontWeight:'normal',fontSize:'10px',padding:'0.6rem 0.5rem'}}>Brands</li>

      </ol>

      <div className='position-relative'>
        <div className='position-absolute' style={{marginLeft:'0.5rem',marginTop:'0.2rem'}}>
            <Icon.Search />
        </div>
      </div>
      <input className='form-control' style={{height:'2rem',fontSize:'10px',paddingLeft:'2rem'}} placeholder='Search For Products...'></input>
      
      <button style={{height:'2rem',margin:'0.1rem',border:'none',fontWeight:'bolder',backgroundColor:'transparent'}}> <Icon.Cart /></button>
      <button style={{height:'2rem',margin:'0.1rem',border:'none',fontWeight:'bolder',backgroundColor:'transparent'}}> <Icon.Person /></button>

    </div>
  
  </>
}

const Title=(props)=>{
  return <>
    <h1 style={{fontWeight:'bolder',paddingTop:'3rem'}}>{ props.texthere }</h1>
  </>
}

const TitleSmall=(props)=>{
  return <>
    <h2 style={{fontWeight:'bolder',paddingTop:'1.5rem',color:'black'}}>{ props.texthere }</h2>
  </>
}

const TitleWhite=(props)=>{
  return <>
    <h1 style={{fontWeight:'bolder',padding:'0rem',color:'white',paddingLeft:'3rem',paddingTop:'0.3rem'}}>{ props.texthere }</h1>
  </>
}

const ProductCard=()=>{
  return <>
    <div className='card'>
      <div className='card-title'> 
        <img src='https://www.aristobrat.in/cdn/shop/files/ClassicShirt_White_1.jpg?v=1709556583&width=1024'></img>
        
      </div>
    </div>
  </>
}