import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    return res(ctx.json({ name: "Luke Skywalker" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the heading h1", () => {
  render(<App />);
  const titleElement = screen.getByText(/Star Wars:Testing API Calls/i);
  expect(titleElement).toBeInTheDocument();
});

test("Renders 1st person name", async () => {
  render(<App />);
  const characterElement = await screen.findByText(/Luke Skywalker/i);
  expect(characterElement).toBeInTheDocument();
});

test("Handles 418 status code", async () => {
  server.use(
    rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
      return res(ctx.status(418));
    })
  );
  render(<App />);
  const errorMsgElement = await screen.findByText("I'm a tea pot 🫖, silly");
  expect(errorMsgElement).toBeInTheDocument();
});

test("Handles 500 status code", async () => {
  server.use(
    rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<App />);
  const errorMsgElement = await screen.findByText(
    "Oops... something went wrong, try again 🤕"
  );
  expect(errorMsgElement).toBeInTheDocument();
});
