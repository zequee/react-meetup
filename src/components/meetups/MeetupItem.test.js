/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";
// import {store} from "../../index";


test("<MeetupItem/> renders without crashing", () => {
  // const wrapper = shallow(<MeetupItem store={store}/>);
  const wrapper = shallow(<MeetupItem/>);
  expect(wrapper.exists()).toBe(true);
});

// import { meetupItem } from "../../store/Actions/meetupItem";
// import { meetupItem } from "../../store/Reducers/meetupItem";

// describe ('reducer', () =>{
//   it('should return default state',()=>{
//     const newState = meetupItem(undefined,{});
//     expect(newState).toEqual([]);
//   });
// }); 



// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
// // import MeetupItem from "./MeetupItem";

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

// it('Renders without crashing', () => {
//   render(<MeetupItem />);
//   const linkElement = screen.getByText(/MeetupItem App/i);
//   expect(linkElement).toBeInTheDocument();
// });


