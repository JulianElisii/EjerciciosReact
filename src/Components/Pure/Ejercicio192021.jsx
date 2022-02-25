import React, { useEffect, useState } from 'react';
import getRandomJoke from '../../services/AxiosService';
import Button from '@mui/material/Button'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FastForwardIcon from '@mui/icons-material/FastForward';






const Ejercicio192021 = () => {

   const [jokes, setJoke] = useState([]);
   const [like, setLike] = useState(0);
   const [disLike, setdisLike] = useState(0);

   useEffect(() => {
      randomJoke()
   }, []);

  const randomJoke = () => {
      getRandomJoke().then((response) => {
        console.log("Joke", response.data)
        setJoke(response.data)
      })
      .catch((error)=>{
        alert(`error ${error}`)
    })
     .finally(()=> { 
        console.log("ended obtaining Joke:");
    });
   }

   const sumarLike = () =>{
       setLike( like + 1)
   }
   const sumarDisLike = () =>{
    setdisLike( disLike + 1)
}

    return (
        <div>
            <div>
                <h1>Los mejores chistes de Chuck Norris</h1>
            </div>
             <div>
             {jokes.value} 
             </div>
            <div>
           <Button variant="contained" color="success" onClick={randomJoke}> 
             Genere chistes de forma aleatoria <FastForwardIcon/> 
           </Button> 
            </div> 
            <div >
                  Chistes que te han gustado:{like}
                <div> <Button variant="contained" onClick={sumarLike}>Like <ThumbUpIcon/> </Button> </div>
            </div>
            <div>
                  Chistes que no te han gustado:{disLike}
                <div> <Button variant='contained' color='error' onClick={sumarDisLike}>DisLike <ThumbDownIcon/>  </Button> </div> 

             
              
                 
               
            </div>
        </div>
    );
}

export default Ejercicio192021;
