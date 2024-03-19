// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Data.css"; // Import your CSS file here

// function Data() {
//   const [rev, setRev] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [showCount, setShowCount] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:4000/getdata')
//       .then((response) => {
//         setRev(response.data.reservedata);
//       });
//   }, []);

//   const handleShowTable = () => {
//     setShowTable(true);
//     setShowCount(false);
//   }

//   const handleShowCount = () => {
//     setShowTable(false);
//     setShowCount(true);
//   }

//   return (
//     <div className="data-container">
//       <div className="data-links" style={{float:"left"}}>
//         <img src="graphs.png" alt="" style={{height:"200px",width:"300px"}}/>
//         <ul>
//           <li><a onClick={handleShowTable} href="#"><h3>Show Table</h3></a></li>
//           <li><a onClick={handleShowCount} href="#"><h3>Show Count of Reservations</h3></a></li>
//         </ul>
//       </div>
//       <div className="data-content" style={{float:"left"}}>
//         {showTable && (
//           <table align="center" cellPadding={10} border={1}>
//             <tr>
//               <th>Sno.</th>
//               <th>Username</th>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Table Type</th>
//             </tr>
//             {rev.map((ele, obj, arr) => (
//               <tr key={obj}>
//                 <td>{obj + 1}</td>
//                 <td>{ele.username}</td>
//                 <td>{ele.name}</td>
//                 <td>{ele.phone}</td>
//                 <td>{ele.date}</td>
//                 <td>{ele.time}</td>
//                 <td>{ele.selectedTableType}</td>
//               </tr>
//             ))}
//           </table>
//         )}
//         {showCount && (
//           <div>
//             <h1><center style={{color:"red",marginTop:"300px",marginLeft:"400px"}}>Total Number of Reservations: {rev.length}</center></h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Data;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Data.css"; // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Data() {
  const [data,setData] = useState([])
  const [showTable, setShowTable] = useState(false);
  // const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/getcheckout')
      .then((response) => {
        setData(response.data)
      });
  }, []);

  const handleShowTable = () => {
    setShowTable(true);
    // setShowCount(false);
  }

  // const handleShowCount = () => {
  //   setShowTable(false);
  //   setShowCount(true);
  // }

  return (
    <div className="container-fluid data-container">
      <div className="row">
        <div className="col-md-4 data-links">
          <img src="graphs.png" alt="" className="img-fluid" style={{ height: "200px", width: "300px" }} />
          <ul className="list-unstyled">
            <li><a onClick={handleShowTable} href="#"><h4>Show Table</h4></a></li>
            {/* <li><a onClick={handleShowCount} href="#"><h4>Show Count of Reservations</h4></a></li> */}
          </ul>
        </div>
        <div className="col-md-8 data-content">
          {showTable && (
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>Lastname</th>
                  <th>email</th>
                  <th>Address</th>
                  <th>address2</th>
                  <th>Totalsprize</th>
                  <th>zip</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele,i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{ele.FirstName}</td>
                    <td>{ele.Lastname}</td>
                    <td>{ele.email}</td>
                    <td>{ele.Address}</td>
                    <td>{ele.address2}</td>
                    <td>{ele.TotalPrize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* {showCount && (
            <div>
              <h1 className="text-center text-danger" style={{marginTop:"350px"}}>Total Number of Reservations: {rev.length}</h1>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Data;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Data.css"; // Import your CSS file here
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function Data() {
//   const [rev, setRev] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [showCount, setShowCount] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:4000/getdata')
//       .then((response) => {
//         setRev(response.data.reservedata);
//       });
//   }, []);

//   const handleShowTable = () => {
//     setShowTable(true);
//     setShowCount(false);
//   }

//   const handleShowCount = () => {
//     setShowTable(false);
//     setShowCount(true);
//   }

//   return (
//     <div className="container-fluid data-container">
//       <div className="row">
//         <div className="col-md-4 data-links">
//           <img src="graphs.png" alt="" className="img-fluid" style={{ height: "200px", width: "300px" }} />
//           <ul className="list-unstyled">
//             <li><a onClick={handleShowTable} href="#"><h4>Show Table</h4></a></li>
//             <li><a onClick={handleShowCount} href="#"><h4>Show Count of Reservations</h4></a></li>
//           </ul>
//         </div>
//         <div className="col-md-8 data-content">
//           {showTable && (
//             <table className="table table-bordered table-hover">
//               <thead>
//                 <tr>
//                   <th>Sno.</th>
//                   <th>Username</th>
//                   <th>Name</th>
//                   <th>Phone</th>
//                   <th>Date</th>
//                   <th>Time</th>
//                   <th>Table Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rev.map((ele, obj, arr) => (
//                   <tr key={obj}>
//                     <td>{obj + 1}</td>
//                     <td>{ele.username}</td>
//                     <td>{ele.name}</td>
//                     <td>{ele.phone}</td>
//                     <td>{ele.date}</td>
//                     <td>{ele.time}</td>
//                     <td>{ele.selectedTableType}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//           {showCount && (
//             <div className="text-center mt-5"> {/* Added text-center and increased margin top */}
//               <h1 className="text-danger">Total Number of Reservations: {rev.length}</h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Data;

