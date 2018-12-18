const SearchBar = new mdc.textField.MDCTextField(
  document.querySelector(".mdc-text-field")
);
const SearchButton = new mdc.ripple.MDCRipple(
  document.querySelector(".mdc-button")
);

// Debugging.
window.mdc = mdc;
