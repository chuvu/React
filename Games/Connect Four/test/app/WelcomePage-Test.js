import React, { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import WelcomePage from '../../src/app/WelcomePage';

describe('<WelcomePage />', () => {
    it('should render correctly', () => {
        const welcomePage = shallow(<WelcomePage />);

        expect(welcomePage.length).to.equal(1);
        expect(welcomePage.contains(Text)).to.equal(true);
    });
});
