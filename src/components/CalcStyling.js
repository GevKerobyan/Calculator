import { createUseStyles } from 'react-jss'

// backgroundColor: 'rgba(32, 33, 66, 0.2)',
// boxShadow: '1px 1px 5px rgb(32, 33, 66)',

const calcStyles = createUseStyles({
   calcItemWrapper: {
      width: '250px',
      padding: '25px',
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '0.5px solid black',
      borderRadius: '10px',
      boxShadow: '2px 2px 5px rgb(32, 33, 66)',
      margin: '0 20px',
      marginBottom: '20px',
   },

   screen: {
      width: '200px',
      height: '50px',
      padding: '0 15px',
      border: '1px solid #000',
      borderRadius: '10px',
      backgroundColor: 'rgba(32, 33, 66, 0.5)',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      overflow: 'hidden',
   },

   calcNumButtonContainer: {
      backgroundColor: 'rgba(32, 33, 66, 0.6)',
      height: '250px',
      border: '1px solid black',
      borderRadius: '10px',
      marginTop: '20px',
      padding: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
   },

   calcDigitsContainer: {
      width: '70%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
   },

   calcSignContainer: {
      width: '27%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderLeft: '1px solid black'
   }

})

export { calcStyles }