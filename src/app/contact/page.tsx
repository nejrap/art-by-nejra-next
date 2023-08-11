

export default function Contact(){
    return (

        <div className="contact">
        <form>
        
        <h1>Kontaktirajte nas</h1>
        <input type="text" className="input" name="Ime i prezime" id="ime" placeholder="Ime i prezime"/>
        <input type="email" className="input" name="Email"  placeholder="primjer@yahoo.com" required/>
        <textarea  id="textarea" name="Poruka" placeholder="Upiši poruku/pitanje za nas"></textarea>
        <button id="button" type="submit">Pošalji</button>
        </form>
        </div>
    )
}