

import { useState, useEffect } from "react";

import NeuigkeitsListe from "./Listen/NeuigkeitsListe";
import "../Styles/Neuigkeiten.css";





const Neuigkeiten = () => {
    
    const [news, setNews] = useState([
      { title: '29.07.2025 - dwb-premium-bau.de', body: 'Neuer Aufbau der Internetpräsenz!', author: 'Calvin', id: 1 },
      { title: '06.07.2025 - dwb-premium-bau.de', body: 'Hier entsteht eine Internetpräsenz!', author: 'Calvin', id: 2 }
     
    ])

    useEffect(() => {
      document.title = "dwb-premium-bau | Neuigkeiten";
  
      console.log(
        "Console > Neuigkeiten!"
      );
  
    }, []);


  
    return (
      <div className="News">
        <div className="Content">
        <NeuigkeitsListe news={news} title="All News" />
        </div>
      </div>
    );
  }
   
  export default Neuigkeiten;