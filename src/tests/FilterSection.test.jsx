import { render, screen } from "@testing-library/react";
import { FilterSection } from "../components/FilterSection";

test("shows fuel filters", () => {
    // Arrange
    // Act
    render(
        <FilterSection
            filters={{
                fuel: [],
                budget: "",
                car: "",
                city: ""
            }}
            setFilters={jest.fn()}
        />
    );

    // Assert
    expect(
        screen.getByRole("checkbox", { name: "Petrol" })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("checkbox", { name: "Diesel" })
    ).toBeInTheDocument();
});
