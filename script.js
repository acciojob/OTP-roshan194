//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const value = input.value;
    if (value.length > 0 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    } else if (e.key >= 0 && e.key <= 9) {
      input.value = ""; // clear before typing
    }
  });
});

// Autofocus first input on load
inputs[0].focus();
