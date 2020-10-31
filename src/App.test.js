import { render } from "react-testing-library";
import React from "react";
import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "../src/components/Search";
import SearchMovie from "../src/components/SearchMovie";

Enzyme.configure({ adapter: new Adapter() });

describe("First 3 components render", () => {
  it("renders App", () => {
    render(<App />);
  });
  it("should render Search component", () => {
    render(<Search />);
  });
  it("renders SearchMovie", () => {
    let wrapper = shallow(<SearchMovie />);
    expect(wrapper).toBeDefined();
  });
});
