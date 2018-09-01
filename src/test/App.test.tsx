import React from 'react';
import App from "../app/App";
import { shallow } from "enzyme";
import 'jest-styled-components';

describe("App", () => {
  test("<App />", () => {
    const app = shallow(<App />);
    console.log('TODO', app);
  });
});
