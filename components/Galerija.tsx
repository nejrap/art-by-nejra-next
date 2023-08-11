import Image from "next/image"
import styles from "./styles.module.css";
export default function Galerija({brojSlika}:{brojSlika: number | null}){
    
    const slike = [
        {id:1, naziv: '/vodopad', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2021'},
        {id:2, naziv: '/kuca', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2021'},
        {id:3, naziv: '/more', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2020'},
        {id:4, naziv: '/proljece', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2022'},
        {id:5, naziv: '/priroda', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2020'},
        {id:6, naziv: '/jesen', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2021'},
        {id:7, naziv: '/mrtvapr', ekstenzija: '.png', naslov: 'Akrilik na platnu 2017'},
        {id:8, naziv: '/2016', ekstenzija: '.jpg', naslov: 'Akrilik na platnu 2016'},
      ]

       const start = Math.floor(Math.random()*(slike.length-brojSlika!));
       const end = start+brojSlika!

    return (

        <>
        
             <h2 className={styles.clr}>Galerija</h2>

             <div className="galerija">
            { brojSlika === null ? 
                slike.map(slika =>  <div className="flex flex-row justify-center"><Image
                    src={slika.naziv+slika.ekstenzija}
                    width={550}
                    height={500}
                    alt={slika.naziv}/>   <div className="instagram-post-caption">
                    <p>{slika.naslov}</p>
                    </div></div>)
                    :
                    

                slike.slice(start, end).map(slika =>  <div className="flex flex-row justify-center"> <Image
                    src={slika.naziv+slika.ekstenzija}
                    width={550}
                    height={500}
                    alt={slika.naziv}/>   <div className="instagram-post-caption">
                    <p>{slika.naslov}</p>
                    </div></div>
                    )
            }
              

        </div>
        </>
    )
}