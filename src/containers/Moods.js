
//Remove the state declaration in the container
//extract code from Moods.js into the appropriate files => actions, selectors & reducers 

import React from 'react';
//import Controls from '../components/controls/Controls';
//import Face from '../components/face/Face';
import { useSelector, useDispatch } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/Actions';
import { totalNaps, totalCoffee, totalStudies, totalSnacks, getFace } from '../Selectors/isSelector';



 
//const setState - useDispatch and state -useSelector 



const Moods = () => {
  const dispatch = useDispatch();
  const naps = useSelector(totalNaps);
  const coffees = useSelector(totalCoffee);
  const studies = useSelector(totalStudies);
  const snacks = useSelector(totalSnacks);

  const face = useSelector(getFace);



  switch(action.type) {
    case 'DRINK_COFFEE': 
      dispatch(drinkCoffee());
      break; 

    case 'EAT_SNACK':
      dispatch(eatSnack());
      break;

    case 'TAKE_NAP': 
      dispatch(takeNap());
      break;

    case 'STUDY':
      dispatch(study());
      break;

    default: 
      console.log(`unhandled type: ${action.type}`);   
  }



  return (
    <>
      <Controls>
        <button onClick={() => this.handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
        <button onClick={() => this.handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
        <button onClick={() => this.handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
        <button onClick={() => this.handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};


export default Moods;





// moved into actions and reducer 
// export default class Moods extends Component {
//   state = {
//     coffees: 0,
//     snacks: 0,
//     naps: 0,
//     studies: 0
//   }

//   handleSelection = action => {
//     switch(action.type) {
//       case 'DRINK_COFFEE':
//         this.setState(state => ({ coffees: state.coffees + 1 }));
//         break;
//       case 'EAT_SNACK':
//         this.setState(state => ({ snacks: state.snacks + 1 }));
//         break;
//       case 'TAKE_NAP':
//         this.setState(state => ({ naps: state.naps + 1 }));
//         break;
//       case 'STUDY':
//         this.setState(state => ({ studies: state.studies + 1 }));
//         break;
//       default:
//         console.log(`unhandled type: ${action.type}`);
//     }
//   }

//   render() {
//     const { coffees, snacks, naps, studies } = this.state;
//     const face = getFace(this.state);


