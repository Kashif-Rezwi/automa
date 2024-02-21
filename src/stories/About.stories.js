import About from '../Pages/AboutPage/About';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Pages/AboutPage/About',
  component: About,
};

export const AboutUs = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('input-name'), 'Samantha', { delay: 200 });
    await userEvent.selectOptions(canvas.getByTestId("select-gender"), ['Female'], { delay: 200 });
    await userEvent.selectOptions(canvas.getByTestId("select-role"), ['FrontEnd Developer'], { delay: 200 });
    await userEvent.click(canvas.getByTestId("check-marital-status"));
    await userEvent.click(canvas.getByTestId("form-submit-button"));
  },
};