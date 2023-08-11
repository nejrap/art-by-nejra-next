export default function Contact() {
    return (
      <div className="contact">
        <h1>Budite u toku sa našim slikama <br/> i aktivnostima</h1>
        <img
          id="email"
          src="/email2.png"
          width={500}
          height={300}
          alt="Email ikona"
        />
        <div>
          <form>
            <input type="email" placeholder="Vaša email adresa" required/><br/>
            <button id="button" type="submit">POTVRDI</button>
          </form>
        </div>
      </div>
    );
  }