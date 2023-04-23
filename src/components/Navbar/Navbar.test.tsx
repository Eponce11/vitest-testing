
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from ".";


describe("Render Navbar Component", () => {

    it('Navbar is in document', () => {
        render(<Navbar/>);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    })

    
});