import { rest } from "msw";
export const handlers = [
  // Handles a GET /user request
  rest.get("http://locahost:3030/scoops", (res, req, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.jpeg" },
        { name: "Vanilla", imagePath: "/images/vanilla.jpeg" },
      ])
    );
  }),
];
