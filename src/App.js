
import './App.css';
import image from './jsx2.png'

function App() {
  return (
    <div>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 className="title red">Khira MECHRI</h1>
   
    <br/>
   
    <img src="jsx.png" alt= "error"/  >
   
    
    <img src={image} alt= "error" / >
   
   </div>
   
   <video width="320" height="240" controls>
   
    <source src="video.mp4" type="video/mp4"/ >
   
   </video>

   </div>
  );
}

export default App;
