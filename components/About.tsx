import Image from 'next/image'




import styles from "./styles.module.css";
export default function AboutUs (){
    return (
        
       <div className='onama'>
         
            <h1 className={styles.clr}>O nama</h1>
            
            <p>Šta pružamo?</p>
    <div className="row">
    
        <div className="col">
            <h3 id="p1">Kreativnost</h3>
            <p>Kreativnost je jedna od urođenih vještina koje se kroz godine iskustva i obrazovanja unaprjeđuju, s
                tim naša stranica ima za cilj posticanje kreativnosti u svakodnevnom životu kroz umjetnost.</p>
        </div>
        <Image id="onama" src="/young-woman-artist-with-palette-and-brush-sits-on-bar-stool-700-223050459.jpg" width={400} height={400} alt=""/>
        <div className="col">
            <h3>Jednostavnost</h3>
            <p>Pronalazak na jednom mjestu mnoštvo umjetničkih slika sa raznim motivima čine samo jedno -
                JEDNOSTAVNOST. </p>
        </div>
    </div>
      
          
    
    </div>
    

       
    )
}
