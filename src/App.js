import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";

const Shop = () => {
  return <div>I am in the Shop</div>;
};

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}

      {/* //localhost:3000
        //localhost:3000/home
        //localhost:3000/shop 
      */}

      {/* <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route> */}

      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>

      {/* 
            //localhost:3000/ -----> now it render Navigation, home compont both becuase path in not there
        //localhost:3000/shop
      
      */}
    </Routes>
  );
};

export default App;
















//-----------------------------------------------------------

// import { Routes, Route, Outlet } from "react-router-dom";
// import Home from "./routes/home/Home.component";

// import React from "react";

// const Shop = () => {
//   return <div>I am in the Shop</div>;
// };

// const Navigation = () => {
//   return (
//     <div>
//       <h1>I am in the Navigation bar</h1>
//       <Outlet />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<Home/>}/> */}

//       {/* //localhost:3000
//         //localhost:3000/home
//         //localhost:3000/shop 
//       */}

//       {/* <Route path="/" element={<Navigation />}>
//         <Route path="home" element={<Home />} />
//         <Route path="shop" element={<Shop />} />
//       </Route> */}

//       <Route path="/" element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path="shop" element={<Shop />} />
//       </Route>

//       {/* 
//             //localhost:3000/ -----> now it render Navigation, home compont both becuase path in not there
//         //localhost:3000/shop
      
//       */}
//     </Routes>
//   );
// };

// export default App;








