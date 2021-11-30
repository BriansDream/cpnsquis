
class BackgroundImage extends HTMLElement {
    
    // Konfigurasi awal saat pertama kali elemen dibuat
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode:"closed"});
       
    }
    // Akan terpanggil setiap custom element ditambahkan melalui DOM
    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML =`
        <style>
        img {
            display: block;
            z-index: 99;
            width: 320px;
            height: 408px;
            
        }

        </style>

        <img src="../../../asset/Profile-Pict.png"
         title="Andesta-Febrianto-Nainggolan" alt="Andesta Febrianto Nainggolan">`;
    }

}
// variable global dan method untuk membuat class tersebut menjadi tag html
customElements.define('backgroundimage-bar', BackgroundImage);

