import React from "react";
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const form = rtl.render(<CheckoutForm />);
  const header = form.getByTestId('header');
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {
    // declare elements
  const form = rtl.render(<CheckoutForm />);
  const fname = form.getByTestId('fname');
  const lname = form.getByTestId('name');
  const address = form.getByTestId('address');
  const city = form.getByTestId('city');
  const state = form.getByTestId('state');
  const zip = form.getByTestId('zip');
  const submit = form.getByTestId('submit');

  // change input of elements
  await rtl.waitFor(() => {
    rtl.fireEvent.change(fname, {target: {value: 'Derek'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(lname, {target: {value: 'Cornelison'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(address, {target: {value: '1234 S. Fake St.'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(city, {target: {value: 'Philadelphia'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(state, {target: {value: 'PA'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(zip, {target: {value: '12345'}})
  })

  // submit form
  await rtl.waitFor(() => {
    rtl.fireEvent.click(submit)
  })

  // get results
  const results = form.getByTestId('successMessage');

  // test results
  expect(results).toBeInTheDocument();

});
