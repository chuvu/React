import React, { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from '../../src/chrome/Button';

describe('<Button />', () => {
    it('should render correctly', () => {
        const button = shallow(<Button text="Connect Four" />);

        expect(button.length).to.equal(1);
        expect(button.contains(TouchableOpacity)).to.equal(true);
        expect(button.contains(Text)).to.equal(true);
        expect(button.find(Text).props().children).to.equal('Connect Four');
    });

    it('should handle button presses', () => {
        const onPress = sinon.spy();
        const button = shallow(<Button text="C4" onPress={onPress} />);

        // button.simulate('press');
        // We should test to simulate the press event on the button itself but enzyme event simulation does not propagate this way and we have to find the actual node that has the event handler set
        // http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html#common-gotchas
        button.find(TouchableOpacity).simulate('press');
        expect(onPress.calledOnce).to.equal(true);
    });
});
