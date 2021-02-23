import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./api/fetchShow");

const showData = {
    data: [
        {id: 2993,
            url: "https://www.tvmaze.com/shows/2993/stranger-things",
            name: "Stranger Things"
        },
        {genres: [
            "Drama",
            "Fantasy",
            "Science-Fiction"]
        }
    ]
};