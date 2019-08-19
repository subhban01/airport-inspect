import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/container/Dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
    it('should render with defaults', () => {
        const component = shallow(<Dashboard />);
        expect(component.hasClass('container')).toBeTruthy();
    });
});
