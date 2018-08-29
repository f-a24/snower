import React from 'react';
import App from "../app/App";
import { shallow } from "enzyme";
import 'jest-styled-components';

describe("App", () => {
  test("<App />", () => {
    const app = shallow(<App name="Welcome to React" color="skyblue" />);
    expect(app.find("Title").children().text()).toBe("Welcome to React");
    expect(app).toHaveStyleRule('color', 'skyblue');
  });
});
