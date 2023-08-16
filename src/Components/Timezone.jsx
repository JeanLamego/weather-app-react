import React, { useState, useEffect  } from 'react';
import { DateTime } from 'luxon'; // Importe diretamente do pacote


function Timezone() {


  

  const [formattedTime, setFormattedTime] = useState();

  useEffect(() => {
const interval = setInterval(()=>{
  setFormattedTime(DateTime.now().toFormat("HH:mm:ss"));
},1000)
    return ()=>{
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <p className="clock">{formattedTime}</p>
    </div>
  );
}

export default Timezone;
