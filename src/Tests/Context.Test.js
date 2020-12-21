import React from 'react'
import {BaseContext, BaseProvider} from '../Components/BaseContext';
import {mount} from 'enzyme'

describe("ChangeBase", ()=>{
    it("sets base to ETH", ()=>{
        const TestComponent =() =>{
            const{base, setBase} = React.useContext(BaseContext)
            return(
            <>
            <div data-testid="value">
            <select
            onChange={setBase}
            >
                <option value="USD">USD</option>     
                 <option value="EUR">EUR</option>
                 <option value="JPY">JPY</option>
                 <option value="BTC">BTC</option>
                 <option value="ETH">ETH</option>
            </select>
            </div>
            </>
            );
        };
        const wrapper = mount(
          <BaseProvider>
          <TestComponent />
          </BaseProvider>  
        );
        expect(wrapper.find('[data-testid="value"]').text()).toEqual("ETH")
        wrapper.find('select').simulate('change')
    })
})