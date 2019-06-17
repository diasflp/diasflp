import React from "react";
import Main from "./main.component";
import { shallow } from "enzyme";
import Skills from "../skills.component/skills.component";

it("check skills component is exits", () => {
  const wrapper = shallow(<Main />);
  expect(wrapper.find(Skills).exists()).toEqual(true);
});
