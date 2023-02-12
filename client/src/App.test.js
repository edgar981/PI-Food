import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Landing from "../src/views/Landing/Landing";
import {BrowserRouter} from "react-router-dom";
import videoLanding from "./assets/video_landing.mp4";


describe('Landing component test', () => {

  test('renders content', () => {
      //Rendering the component in a constant.
    const component = render(<BrowserRouter><Landing /></BrowserRouter>);
    expect(component.container).toHaveTextContent('Transform your kitchen into a culinary adventure');
  });

  test(`'Explore' button should be working`, () => {
      const component = render(<BrowserRouter><Landing /></BrowserRouter>);

      expect(component.getByTestId('home-btn' )).not.toBeDisabled()
  });

  test(`When loading landing view, should show video content as background`, () => {
        let component = render(<BrowserRouter><Landing /></BrowserRouter>)

        const link = component.getByTestId('video-lp');
        expect(link.getAttribute('src')).toBe('video_landing.mp4');

    });

});