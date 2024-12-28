import { r as reactExports, j as jsxRuntimeExports, F as FormHeader, A as At, f as fe, P as Pt } from "./LoginId-ckoVysd4.js";
import { T as TransactionDataContext, s as submitForm } from "./LoginPassword-C6KPOjkv.js";
function SignupPassword() {
  const { state, getValidatedFormData } = reactExports.useContext(TransactionDataContext);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const submitBtn = event == null ? void 0 : event.target.querySelector(
      "button#signup-password-submit"
    );
    if (submitBtn) submitBtn.setAttribute("disabled", "true");
    const emailInput = event.target.querySelector(
      "input#email"
    );
    const passwordInput = event.target.querySelector(
      "input#password"
    );
    submitForm({
      state,
      email: emailInput.value,
      password: passwordInput.value
    });
  };
  const backBtnHandler = (event) => {
    event.preventDefault();
    const backBtn = event.target;
    backBtn.disabled = true;
    submitForm({
      state,
      action: "back-action"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { noValidate: true, onSubmit: formSubmitHandler, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormHeader,
      {
        title: "Let's create a password",
        subtitle: "Set your password to finish creating your Breadboard account."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      At,
      {
        type: "email",
        name: "email",
        label: "Email address",
        readOnly: true,
        defaultValue: getValidatedFormData("email")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(fe, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Label, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Policy, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Input, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Strength, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Errors, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { classNames: "mt-8", type: "submit", id: "signup-password-submit", children: "Create Account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { classNames: "mt-2", variant: "tertiary", handleClick: backBtnHandler, children: "Back" })
  ] });
}
export {
  SignupPassword as default
};
