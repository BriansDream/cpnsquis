
// define behavior of HTMLElement
class ButtonCalculation extends HTMLElement {

    // Konfigurasi awal saat element dibuat
    constructor() {
        super();

 
    }

    // Callback Method yang akan terpanggil saat element di add kedalam DOM
    connectedCallback(){
      
    }

    set eventClick(value) {
        this._eventClick = value;
        this.render();
    }

    render() {
        
        this.innerHTML = `
        <style>
        button {
           
            padding: 10px;
            border-radius: 30px;
            background-color: rgb(255, 64, 64);
            color: white;
            border: none;
            font-size: 1.3em;
            cursor:pointer;
        }
        </style>

        <button type="click"> ✔ finish </button> 
        
        `;
        this.querySelector('button').addEventListener('click',this._eventClick);

    }
    
}

// Define tag custom Element
customElements.define('button-calculation',ButtonCalculation)