import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Login from "../pages/login";

test("it should validate length", async () => {
  const { findByRole, findByText, findByLabelText } = render(<Login />);
  const input = await findByLabelText("Password");

  await act(async () => {
    fireEvent.input(input, { target: { value: "abcd" } });
    fireEvent.submit(await findByRole("button"));

    const error = await findByText("La contraseña debe tener 8 caracteres");
    expect(error).toBeInTheDocument();
  });
});

test("it should validate password", async () => {
  const { findByRole, findByText, findByLabelText } = render(<Login />);
  const input = await findByLabelText("Password");

  await act(async () => {
    fireEvent.input(input, { target: { value: "abcd" } });
    fireEvent.submit(await findByRole("button"));

    const error = await findByText(/contraseña/);
    expect(error).toBeInTheDocument();
  });
});
