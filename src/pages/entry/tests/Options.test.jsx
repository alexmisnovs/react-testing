import { render, screen } from "@testing-library/react";
import Options from "../Options";
//import userEvent from "@testing-library/user-event";

describe("<Options />", () => {
  test("display image for each scoop option from the server", async () => {
    render(<Options optionType="scoops" />);
    // find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of scoopImages
    const altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]); // arrays and objects have to use toEqual
  });

  test("display toppings options from the server", async () => {
    render(<Options optionType="toppings" />);
    // find images
    const toppingsImages = await screen.findAllByRole("img", { name: /topping$/i });
    expect(toppingsImages).toHaveLength(3);

    // confirm alt text of toppingsImages
    const altText = toppingsImages.map(element => element.alt);
    expect(altText).toEqual(["M&Ms topping", "Hot fudge topping", "Cherries topping"]); // arrays and objects have to use toEqual
  });
});
