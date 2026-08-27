import { render, screen } from "@testing-library/react";
import { ProductCard } from "../components/ProductCard";

test("renders car name", () => {
    // Arrange
    const product = {
        carName: "Hyundai i20",
        price: "3.5 Lakh"
    };

    // Act
    render(<ProductCard product={product} />);

    // Assert
    expect(screen.getByText("Hyundai i20")).toBeInTheDocument();
});


it("renders seller details button", () => {
    // Arrange
    const product = {
        carName: "Hyundai i20",
        price: "3.5 Lakh"
    };

    // Act
    render(<ProductCard product={product} />);

    // Assert
    expect(
        screen.getByRole("button", {
            name: "Get Seller Details"
        })
    ).toBeInTheDocument();
});
