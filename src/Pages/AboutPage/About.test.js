import { render, screen,  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About'; 

describe('About Form', () => {
    beforeEach(() => {
        render(<About />);
    });

    test('1. Initial State Verification', () => {
        expect(screen.getByTestId('input-name')).toHaveValue('');
        expect(screen.getByTestId("select-gender")).toHaveValue('Gender');
        expect(screen.getByTestId("select-role")).toHaveValue('Role');
        expect(screen.getByTestId("check-marital-status")).not.toBeChecked();
    });

    test('2. Form Field Input', () => {
        userEvent.type(screen.getByTestId('input-name'), 'Samantha');
        userEvent.selectOptions(screen.getByTestId("select-gender"), ['Female']);
        userEvent.selectOptions(screen.getByTestId("select-role"), ['FrontEnd Developer']);
        userEvent.click(screen.getByTestId("check-marital-status"));
        
        expect(screen.getByTestId('input-name')).toHaveValue('Samantha');
        expect(screen.getByTestId("select-gender")).toHaveValue('Female');
        expect(screen.getByTestId("select-role")).toHaveValue('FrontEnd Developer');
        expect(screen.getByTestId("check-marital-status")).toBeChecked();
    });
    
    test('3. Form Submission', () => {
        userEvent.type(screen.getByTestId('input-name'), 'Samantha');
        userEvent.selectOptions(screen.getByTestId("select-gender"), ['Female']);
        userEvent.selectOptions(screen.getByTestId("select-role"), ['FrontEnd Developer']);
        userEvent.click(screen.getByTestId("check-marital-status"));
        expect(screen.getByTestId("form-submit-button")).toBeEnabled();
        userEvent.click(screen.getByTestId("form-submit-button"));
        // open modal and check the data
    });
});
