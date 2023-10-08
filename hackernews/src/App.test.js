import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import App, { Search, Button, Table } from "./App";

describe("Table", () => {
  const props = {
    list: [
      { title: "1", author: "1", num_comments: 1, points: 2, objectID: "y" },
      { title: "2", author: "2", num_comments: 1, points: 2, objectID: "z" },
    ],
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Table {...props} />, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
