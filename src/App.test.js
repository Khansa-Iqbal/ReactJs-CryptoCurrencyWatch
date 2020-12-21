// // 
// /* Dependencies */
// import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// /* Components */
// import {NavBar} from '../src/Components/NavBar';
// import AppBar from '@material-ui/core/AppBar'
// import Typography from '@material-ui/core/Typography'

// // Configure enzyme for react 16
// Enzyme.configure({ adapter: new Adapter() })

// describe('AppBar', () => {
//   it('should render children inside AppBar tag', () => {
//     const wrapper = shallow(<AppBar>This is my first test</AppBar>)
//     const appBar = wrapper.find('AppBar')
//     expect(appBar).toHaveLength(0)
//     //expect(appBar.text()).toEqual('This is my first test')
//   })
// })

// describe('NavBar', () => {
//     it('should render children inside Typography tag', () => {
//       const wrapper = shallow(<NavBar>Crypto Currencies Watch</NavBar>)
//       const typography = wrapper.find('Typography')
//       expect(typography).toHaveLength(1)
//       expect(typography.text()).toEqual('Crypto Currencies Watch')
//     })
//   })
