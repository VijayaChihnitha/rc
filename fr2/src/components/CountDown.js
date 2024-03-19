// import React, { useState, useEffect } from "react";

// const CountDown = () => {
  
//   let difference = +new Date(`10/10/2023`) - +new Date();
//   const [delay, setDelay] = useState(difference);

//   const d = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
//   const m = Math.floor((difference / 1000 / 60) % 60);
//   const s = Math.floor((difference / 1000) % 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDelay(delay - 1);
//     }, 1000);

//     if (delay === 0) {
//       clearInterval(timer);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <span className="font-bold text-5xl text-yellow-300 jk5">
//       {d}:{h}:{m}:{s}
//     </span>
//   );
// };

// export default CountDown;
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("10/10/2023");
  const [difference, setDifference] = useState(targetDate - new Date());

  const calculateTimeLeft = () => {
    const newDifference = targetDate - new Date();
    setDifference(newDifference);
  };

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // Add an empty dependency array to run the effect only once on mount

  return (
    <span className="font-bold text-5xl text-yellow-300 jk5">
      {-d}:{-h}:{-m}:{-s}
    </span>
  );
};

export default CountDown;
