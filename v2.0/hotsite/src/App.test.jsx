import React from "react";
import App from "./App";
import Header from "./components/header.component/header.component";
import Main from "./components/main.component/main.component";
import Footer from "./components/footer.component/footer.component";
import { shallow } from "enzyme";

it("check header is exits", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).exists()).toEqual(true);
});

it("check main is exits", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Main).exists()).toEqual(true);
});

it("check footer is exits", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).exists()).toEqual(true);
});
