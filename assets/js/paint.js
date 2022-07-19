function configureListeners() {
    let images = document.getElementsByTagName('img');
    // select img elements  

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById('img').addEventListener('mouseover', addOpacity, false);
        document.getElementById('img').addEventListener('mouseout', removeOpacity, false);
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    //addEventListener.
    if (!this.classlist.contains('dim')) {
        this.classlist.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    if (this.classlist.contains('dim')) {
        this.classlist.remove('dim');
    }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '14.99';
            colorName = 'Lime-Green'; 
            updatePrice(price, colorName);
            break;           
        case 'pn2':
            price = '11.14';
            colorName = 'Medium Brown';
            updatePrice(price, colorName);
            break;            
        case 'pn3':
            price = '22.99';
            colorName = 'Royal blue';
            updatePrice(price, colorName);
            break;   
        case 'pn4':
            price = '4.99';
            colorName = 'Solid Black';
            updatePrice(price, colorName);
            break;   
        case 'pn5':
            price = '8.22';
            colorName = 'Solid Cyan';
            updatePrice(price, colorName);      
            break;   
        case 'pn6':
            price = '11.99';
            colorName = 'Solid Purple';
            updatePrice(price, colorName);
            break;   
        case 'pn7':
            price = '13.42';
            colorName = 'Solid Red';
            updatePrice(price, colorName);
            break;   
        case 'pn8':
            price = '21.98';
            colorName = 'Solid White';
            updatePrice(price, colorName);
            break;   
        case 'pn9':
            price = '14.99';
            colorName = 'Solid Yellow';
            updatePrice(price, colorName); 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        colorPrice.textcontent = price;// display price
        
        let color = document.getElemenyById('color-name');// select element with corresponding id
        color.textcontent = colorName;//display color name
    }
    
}
