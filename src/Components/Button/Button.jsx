/* eslint-disable */  //it will disable eslint in my file 
import styles from './Button.module.css';

const Button = ({ icon, text, Email_Button, ...rest }) => {
  return (
    <button
      {...rest}
      className={Email_Button ? styles.secondary_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;



// /* eslint-disable */  //it will disable eslint in my file 

// // import React from 'react';
// // import PropTypes from 'prop-types'; //method1(for production {eslint})
// import styles from './Button.module.css';
// const Button = (icon,text,...rest) => {
//   return (
//     <>
//         <button 
//         {...rest}
//         className={ props.Email_Button?styles.secondary_btn:styles.primary_btn}>
//             {icon}
//             {text}
//         </button>
//     </>
//   )
// //   const Button = ({icon,text}) => {
// //     return (
// //       <>
// //           <button className={styles.Button}>
// //               {icon}
// //               {text}
// //           </button>
// //       </>
// //     )  //method 2(for production eslint)
// }
// // Button.propTypes = {
// //     icon: PropTypes.element,
// //     text: PropTypes.string.isRequired,
// //   };   //method1(for production eslint)
// export default Button
