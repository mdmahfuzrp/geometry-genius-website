let serialNumber = 0;

// Popup
const popup = document.getElementById('popup');
const popupParent = document.getElementById('popup-parent');
const popupContainer = document.getElementById('popup-container');
const popupButton = document.getElementById('popupButton');
popup.style.display = 'none';
popupContainer.style.display = 'none';
popupParent.style.display = 'none';

function popupFunction(){
    popup.style.display = 'block';
        popupContainer.style.display = 'block';
        popupParent.style.display = 'block';
        popupButton.addEventListener('click', function () {
            popup.style.display = 'none';
            popupContainer.style.display = 'none';
            popupParent.style.display = 'none';
        })
}
// ------------- Triangle 1 ------------
// get the data from using id 

document.getElementById('triangle-calculate').addEventListener('click', function () {
    serialNumber += 1;


    // calculation 
    const triangleTittleElement = document.getElementById('triangle-Title').innerText;

    const triangleBValue = document.getElementById('trianglebinput').value;
    const triangleHValue = document.getElementById('trianglehinput').value;
    console.log(triangleBValue);

    if (triangleBValue == '' || isNaN(triangleBValue) || triangleBValue < 0 || triangleHValue == '' || isNaN(triangleHValue) || triangleHValue < 0) {
        popupFunction();
    }
    else {

        const rendomTriangleValue = 0.5;
        const bhMultipication = parseInt(triangleBValue) * parseInt(triangleHValue);
        const areaTriangleCalculation = rendomTriangleValue * bhMultipication;

        const twoNumberFixedValuetriangleTotal = areaTriangleCalculation.toFixed(2);
        // show the data 
        displayData(serialNumber, triangleTittleElement, twoNumberFixedValuetriangleTotal);

    }

});

// ------------- Rectangle 2------------
// get the data from using id 

document.getElementById('rectangle-calculate').addEventListener('click', function () {

    serialNumber += 1;

    const rectangleTittleElement = document.getElementById('Rectangle-Title').innerText;
    const rectangleWValue = document.getElementById('rectangleWinput').value;
    const rectangleIValue = document.getElementById('rectangleIinput').value;

    if (rectangleWValue == '' || isNaN(rectangleWValue) || rectangleWValue < 0 || rectangleIValue == '' || isNaN(rectangleIValue) || rectangleIValue < 0) {
        popupFunction();
    }
    else {


        const wiMultipication = parseInt(rectangleWValue) * parseInt(rectangleIValue);

        const twoNumberFixedValueRectangleTotal = wiMultipication.toFixed(2);


        // show the data 
        displayData(serialNumber, rectangleTittleElement, twoNumberFixedValueRectangleTotal);

    }

});


// ------------- Parallelogram 3------------
// get the data from using id 


document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    serialNumber += 1;

    const parallelogramTittleElement = document.getElementById('Parallelogram-Title').innerText;
    const parallelogramOneValue = document.getElementById('ParallelogrambValue').innerText;
    const parallelogramTwoValue = document.getElementById('ParallelogramhValue').innerText;


    const bhValueMultipication = parseInt(parallelogramOneValue) * parseInt(parallelogramTwoValue);

    const twoNumberFixedValueparallelogramTotal = bhValueMultipication.toFixed(2);

    // show the data 
    displayData(serialNumber, parallelogramTittleElement, twoNumberFixedValueparallelogramTotal);


});


// ------------- Rhombus 4------------
// get the data from using id 

document.getElementById('rhombus-calculate').addEventListener('click', function () {

    serialNumber += 1;


    const rhombusTittleElement = document.getElementById('Rhombus-Title').innerText;
    const rhombusdOneValue = document.getElementById('RhombusDOne').innerText;
    const rhombusdTwoValue = document.getElementById('RhombusDTwo').innerText;


    const rendomRhombusValue = 0.5;
    const dOnedTwoValueMultipication = parseInt(rhombusdOneValue) * parseInt(rhombusdTwoValue);
    const areaRhombusCalculation = rendomRhombusValue * dOnedTwoValueMultipication;

    const twoNumberFixedValueRhombusTotal = areaRhombusCalculation.toFixed(2);


    // show the data 
    displayData(serialNumber, rhombusTittleElement, twoNumberFixedValueRhombusTotal);


});


// ------------- Pentagon 5------------
// get the data from using id 


document.getElementById('pentagon-calculate').addEventListener('click', function () {

    serialNumber += 1;

    const pentagonTitleElement = document.getElementById('Pentagon-Title').innerText;
    const pentagonaValue = document.getElementById('PentagonAInput').innerText;
    const pentagonbValue = document.getElementById('PentagonBInput').innerText;


    // calculation 
    const rendomPentagonValue = 0.5;
    const pbValueMultipication = parseInt(pentagonaValue) * parseInt(pentagonbValue);
    const areaPentagonCalculation = rendomPentagonValue * pbValueMultipication;

    const twoNumberFixedValuePentagonTotal = areaPentagonCalculation.toFixed(2);

    // show the data 
    displayData(serialNumber, pentagonTitleElement, twoNumberFixedValuePentagonTotal);

});
// ------------- Ellipse 6------------

// get the data from using id 

document.getElementById('eliiplse-calculate').addEventListener('click', function () {
    serialNumber += 1;

    const eliiplseTitleElement = document.getElementById('Ellipse-Title').innerText;
    const eliiplseaValue = document.getElementById('EllipseAInput').innerText;
    const eliiplsebValue = document.getElementById('EllipseBInput').innerText;

    // calculation 
    const pi = 3.1416;
    const abValueMultipication = parseInt(eliiplseaValue) * parseInt(eliiplsebValue);
    const areaEllipseCalculation = pi * abValueMultipication;

    // string to number convert
    const twoNumberFixedValueEllipseTotal = areaEllipseCalculation.toFixed(2)

    // show the data 
    displayData(serialNumber, eliiplseTitleElement, twoNumberFixedValueEllipseTotal);

});

// common function to display data 
function displayData(serialNumber, eliiplseTitleElement, twoNumberFixedValueEllipseTotal) {
    // table row create 
    const container = document.getElementById('table-container');

    const tr = document.createElement("tr");
    tr.innerHTML = `
       <td>${serialNumber}</td>
       <td>${eliiplseTitleElement}</td>
       <td>${twoNumberFixedValueEllipseTotal}cm<sup>2</sup></td>
       <td><button class="btn btn-info text-white "><span>Convert to M<sup>2</sup></span></button></td>
      
   
       `;
    container.appendChild(tr);
};

// random-bg color
function triangleRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round(Math.random() * 100) / 100;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById('triangle-random-bg').style.backgroundColor = rgba;
}
function rectangleRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round(Math.random() * 100) / 100;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById('rectangle-random-bg').style.backgroundColor = rgba;
}
function paralleRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round(Math.random() * 100) / 100;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById('paralle-random-bg').style.backgroundColor = rgba;
}
function rhombusRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round(Math.random() * 100) / 100;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById('rhombus-random-bg').style.backgroundColor = rgba;
}
function pentagonRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round(Math.random() * 100) / 100;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById('pentagon-random-bg').style.backgroundColor = rgba;
}
function ellipseRandomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round(Math.random() * 100) / 100;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById('ellipse-random-bg').style.backgroundColor = rgba;
}

