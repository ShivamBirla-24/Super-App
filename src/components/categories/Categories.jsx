import './Categories.css'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card/Card'
import Tagbutton from './Buttons/Tagbutton'
import actionImage from '../../images/action.png'
import dramaImage from '../../images/drama.png'
import romanceImage from '../../images/romance.png'
import thrillerImage from '../../images/triller.png'
import westernImage from '../../images/western.png'
import horrorImage from '../../images/horror.png'
import fantasyImage from '../../images/fantasy.png'
import musicImage from '../../images/music.png'
import fictionImage from '../../images/fiction.png'
import errorImage from '../../images/error.png'

function Categories() {
  const navigate = useNavigate();

  const dataSet = [
    {
       id:"Action",
       imageUrl: actionImage,
       bgColor:"#FF5209",
    },
    {
        id:"Drama",
        imageUrl: dramaImage,
        bgColor:"#D7A4FF",
     },
     {
        id:"Romance",
        imageUrl: romanceImage,
        bgColor:"#148A08",
     },
     {
        id:"Thriller",
        imageUrl:thrillerImage,
        bgColor:"#84C2FF",
     },
     {
        id:"Western",
        imageUrl:westernImage,
        bgColor:"#902500",
     },
     {
        id:"Horror",
        imageUrl: horrorImage,
        bgColor:"#7358FF",
     },
     {
        id:"Fantasy",
        imageUrl:fantasyImage,
        bgColor:"#FF4ADE",
     },
     {
        id:"Music",
        imageUrl: musicImage,
        bgColor:"#E61E32",
     },
     {
        id:"Fiction",
        imageUrl: fictionImage,
        bgColor:"#6CD061",
     }

  ]

  const [isSelected,setisSelected]=useState({
        Action:false,
        Drama:false,
        Romance:false,
        Thriller:false,
        Western:false,
        Horror:false,
        Fantasy:false,
        Music:false,
        Fiction:false,

  });
  const [genreSelected, setgenreSelected]=useState([]);

  let [error,setError] = useState(false);

  const handleClick = (e)=>{
        setisSelected({
            ...isSelected, 
            [e.target.id]:!(isSelected[e.target.id])
        });
        if(!(isSelected[e.target.id])){
            setgenreSelected([
                ...genreSelected,
                e.target.id
            ])
        }
        if((isSelected[e.target.id])){
            const genre = genreSelected.filter(item=> item !== e.target.id);
            setgenreSelected(genre);
        }
  }
  
  const crossbuttonTag=(e)=>{
        setisSelected({
            ...isSelected,
            [e.target.id]:false
        })
        if((isSelected[e.target.id])){
            const genre = genreSelected.filter(item=> item !== e.target.id);
            setgenreSelected(genre);
        }
  }

  const nextbuttonClick=()=>{
        if(genreSelected.length>=3){
            localStorage.setItem('categoriesChoosed',JSON.stringify(genreSelected));
            localStorage.setItem('categoryfilled',true);
            navigate('/home')
        }
        else{
            setError(true);
        }
  }


  const selectedArray = Object.keys(isSelected);

  
  return (
    <div className='category-main-div'>
       <div className='category-top-container '>
           <div className='category-top-container-left'>
              <h1 className='category-container-heading' >Super app</h1>  
              <p>Choose your entertainment category</p>
              <div className='category-container-tags'>
                 {
                    selectedArray.map((key)=>(
                         (isSelected[key])? <Tagbutton text={key} crossbuttonTag={crossbuttonTag}/>:<></>
                    ))
                 }      
              </div>

              {
                (error)? <p id='category-error-msg'><img src={errorImage}></img>Minimum 3 category required</p>:<></>
              }

           </div>
           <div className='category-top-container-right'>
              {
                dataSet.map((item,index)=>(
                     <Card id={item.id} imageUrl={item.imageUrl} bgColor={item.bgColor} isSelected={isSelected} handleClick={handleClick}/>
                ))
              }
           </div>
       </div>
       <div className='category-bottom-container'>
            <button onClick={nextbuttonClick} >Next Page</button>
       </div>
           
    </div>
  )
}

export default Categories