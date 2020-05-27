import indexCss from './public/css/index.css'
import imgSrc from './public/images/01.jpg'



let pp = document.createElement('p');
pp.innerText = 'agatha';
document.getElementById('root').appendChild(pp);

let myFunc = () => {
    console.log("emmmmm");
}
myFunc();

let imgNode = new Image();
imgNode.src = imgSrc;
document.getElementById("root").appendChild(imgNode);
