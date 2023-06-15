import React from 'react';
import Logo from '../../../assets/12.png';

const Header = () => {
  return (
    <div className="column-header">
      <h1>BURGER QUEEN</h1>
      <figure className="content-logo">
        <img src={Logo} alt="logo" />
      </figure>
    </div>
  );
};

export default Header;

// const Header = ({title}) => {
//   return (
//     <div className="column-header">
//       <h1>{title}</h1>
//       <figure className="content-logo">
//         <img src={Logo} alt="logo" />
//       </figure>
//     </div>
//   );
// };

// export default Header;
