import React, { useState, useEffect } from "react";

function Clock() {
  //simpan data date, dan set data date
  const [date, setDate] = useState(new Date());

  //membuat fungsi refresh date
  function refresh() {
    setDate(new Date());
  }

  //gunakan useEffect untuk menjalankan efek interval dan clear interval pada component Clock
  useEffect(() => {
    //set interval untuk menjalankan jam setiap detik
    const timerId = setInterval(refresh, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>Sekarang Jam</h1>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
