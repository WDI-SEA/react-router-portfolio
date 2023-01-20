import kitty1 from '../../imgs/kitty_image_1.jpeg';
import kitty2 from '../../imgs/kitty-image-2.jpeg';
import kitty3 from '../../imgs/kitty-image-3.jpeg';
import kitty4 from '../../imgs/kitty-image-4.jpeg';

export default function Projects() {

    // console.log(kitty1)
    return (
        
            <div>
                <h1>The Kitten Projects</h1>
                <br></br>
                <h3>The Pack project</h3>
                <img src={kitty1} alt='kitten' width='200px' height="150px" />  
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  

                <br></br>
                <h3>The Nap project</h3>
                <img src={kitty2} alt='kitten' width='150px' height="150px" />  
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  

                <br></br>
                <h3>The Cuddle project</h3>
                <img src={kitty3} alt='kitten' width='200px' height="150px" />  
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  

                <br></br>
                <h3>The Snack project</h3>
                <img src={kitty4} alt='kitten' width='150px' height="150px" />         
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>  
                
            </div>

    )
}