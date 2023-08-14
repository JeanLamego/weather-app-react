import React, { useEffect } from 'react';
import { DateTime } from 'luxon'; // Importe diretamente do pacote

function Timezone() {
  const now = DateTime.now();

  useEffect(() => {
    console.log(now);
  }, []);

  return (
    <div>
      <p>Verifique o console para ver o resultado.</p>
    </div>
  );
}

export default Timezone;
