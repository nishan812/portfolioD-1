import React, { useEffect, useState } from "react";

function Footer() {
  const [date, setDate] = useState(new Date());

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };


  // 01:00:50 AM

  let time = date.toLocaleTimeString(options);
  console.log(time.length);

  const [extra, setExtra] = useState("");

  setInterval(() => {
    setDate(new Date());
    if (
      (time.slice(9, 11) == "AM" && Number(time.slice(0, 2)) >= 12) &&
      Number(time.slice(0, 2)) <= 4
    ) {
      setExtra("Its time to sleep, Are you an OWL?");
    } else if (
      (time.slice(9, 11) == "AM" && Number(time.slice(0, 2)) >= 5) &&
      Number(time.slice(0, 2)) < 9
    ) {
      setExtra("Good Morning!");
    } else if (
      (time.slice(9, 11) == "PM" && Number(time.slice(0, 2)) >= 10) &&
      Number(time.slice(0, 2)) < 12
    ) {
      setExtra("Goodnight, Sweet Dreams!");
    } else setExtra("");
  }, 1000);

  //  console.log(time.slice(0,2));
  // console.log(time.slice(9,11));

  return (
    <footer className="bg-indigo-900 w-full h-[120px] flex items-center justify-center">
      <div
        key={1}
        className="h-full w-full flex flex-col items-center justify-center text-white "
      >
        <h1 className="text-[20px]">{time}</h1>

        <p>{extra}</p>
      </div>
    </footer>
  );
}

export default Footer;
