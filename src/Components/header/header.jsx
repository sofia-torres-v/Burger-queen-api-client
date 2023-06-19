import React from 'react';
import Logo from '../../assets/logoBbqfinal.png';

const Header = () => {
  return (
    <div className="column-header">
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
