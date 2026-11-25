import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { StoreApp } from "./StoreApp";


const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div data-testid="item-counter" />);
});

vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));


describe('StoreApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {

        const { container } = render(<StoreApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render correctly number of ItemCounter components', () => {

        render(<StoreApp />);

        const itemCounters = screen.getAllByTestId('item-counter');
        expect(itemCounters).toHaveLength(3);
    });


    test('should render ItemCounter with correct props', () => {

        render(<StoreApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            itemName: 'PC Gamer',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            itemName: 'Tablet',
            quantity: 10
        }); expect(mockItemCounter).toHaveBeenCalledWith({
            itemName: 'Smartphone',
            quantity: 20
        });

    });
}); 