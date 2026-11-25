import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {

    test("should render firstName and lastName", () => {

        const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector("h1");
        expect(h1?.innerHTML).toContain("Juan");

        const h3 = container.querySelector("h3");
        expect(h3?.innerHTML).toContain("Santana");
    });

    test("should render firstName and lastName - using screen", () => {

        render(<MyAwesomeApp />);
        screen.debug();


        const h1 = screen.getByTestId("firstName");
        expect(h1.innerHTML).toContain("Juan");

        const h3 = screen.getByText("Santana");
        expect(h3.innerHTML).toContain("Santana");

    });

    test('should macth snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

});