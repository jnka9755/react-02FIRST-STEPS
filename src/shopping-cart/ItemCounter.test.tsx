import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {

    test('should render with default quantity', () => {

        const itemName = "Test Item";

        render(<ItemCounter itemName={itemName} />);

        expect(screen.getByText(itemName)).toBeDefined();
        expect(screen.getByText(itemName)).not.toBeNull();
    });

    test('should render with custom quantity', () => {

        const itemName = "Test Item";
        const quantity = 5;

        render(<ItemCounter itemName={itemName} quantity={quantity} />);

        expect(screen.getByText(quantity)).toBeDefined();
        expect(screen.getByText(quantity)).not.toBeNull();
    });

    test('should increment quantity when +1 button is clicked', async () => {

        const itemName = "Test Item";
        const quantity = 1;

        render(<ItemCounter itemName={itemName} quantity={quantity} />);
        const [btnIncrement] = screen.getAllByRole('button');

        fireEvent.click(btnIncrement);

        expect(screen.getByText('2')).toBeDefined();
    });

    test('should decrement quantity when -1 button is clicked', async () => {

        const itemName = "Test Item";
        const quantity = 5;

        render(<ItemCounter itemName={itemName} quantity={quantity} />);
        const [, btnDecrement] = screen.getAllByRole('button');

        fireEvent.click(btnDecrement);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrement quantity below 1', async () => {

        const itemName = "Test Item";
        const quantity = 1;

        render(<ItemCounter itemName={itemName} quantity={quantity} />);
        const [, btnDecrement] = screen.getAllByRole('button');

        fireEvent.click(btnDecrement);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change item label color to red when quantity is 1', async () => {

        const itemName = "Test Item";
        const quantity = 1;

        render(<ItemCounter itemName={itemName} quantity={quantity} />);

        const itemLabel = screen.getByText(itemName);

        expect(itemLabel.style).toHaveProperty('color', 'red');
    });

    test('should change item label color to black when quantity is greater than 1', async () => {

        const itemName = "Test Item";
        const quantity = 2;

        render(<ItemCounter itemName={itemName} quantity={quantity} />);

        const itemLabel = screen.getByText(itemName);

        expect(itemLabel.style).toHaveProperty('color', 'black');
    });
});