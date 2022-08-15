// h2 Element color change by getElementByTagName in javascript
const h2Elements = document.getElementsByTagName('h2');
for (const h2Element of h2Elements) {
    h2Element.style.color = 'green';
}

// Change section style by getElementById in Javascript
const backpack = document.getElementById('backpack');
backpack.style.width = '400px';
backpack.style.backgroundColor = 'tomato';
backpack.style.padding = '30px';
backpack.style.color = '#fff';
backpack.style.borderRadius = '30px';
backpack.style.marginBottom = '20px';

// print console.log text by function with click handler event in javascript
function consoleTextChange(){
    console.log('I Love JavaScript!');
}

// buy now button remove by click in javascript
document.getElementById('section-box').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});

const buttonRemoves = document.getElementsByClassName('buy-now');
for (const buttonRemove of buttonRemoves) {
    buttonRemove.addEventListener('click', function(event){
        event.target.remove(event.target);
    });
}

// Disabled button active by javascript
document.getElementById('email-field').addEventListener('keyup', function(event){
    // console.log(event.target.value);
    const text = event.target.value;
    const enableBtn = document.getElementById('enable-btn');
    if(text === 'email'){
        enableBtn.removeAttribute('disabled');
    }
    else{
        enableBtn.setAttribute('disabled', true);
    }
})

// Text background color change
document.getElementById('change-element-color').addEventListener('dblclick', function(){
    const colorChange = document.getElementById('color-change');
    colorChange.style.color = 'red';
});

// Image change by mouseenter in javascript
document.getElementById('change-img').addEventListener('mouseenter', function(){
    const changeImage = document.getElementById('change-img');
    changeImage.src = './image/change.jpg';
});