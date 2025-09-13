class Footer extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback() {
      this.innerHTML = this.getHTML();      
  }

    getHTML(){
        return `           
        <footer>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>                               
            <li><a href="#Contact">Contact</a></li>
          </ul>
          <ul class="social-row">            
            <li><a target="_blank" href="https://www.instagram.com/optimizeherpharmacist/"><i class="fab fa-instagram"></i></a></li>
            <li><a target="_blank" href="https://www.facebook.com/people/Tiffany-Ruder/61560904798359/"><i class="fab fa-facebook"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/dr-tiffany-ruder/"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </footer>
      `;
    }
}
customElements.define("footer-comp", Footer);