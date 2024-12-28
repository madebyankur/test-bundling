import { r as reactExports, j as jsxRuntimeExports, F as FormHeader, a as Ft, c as cn, I as It, f as fe, P as Pt, T as Tt } from "./LoginId-ckoVysd4.js";
const TransactionDataContext = reactExports.createContext({
  state: "",
  prompt: "",
  screen: { name: "login-id" },
  client: {},
  captcha: { enabled: false, provider: "auth0" },
  organization: {},
  submitted_form_data: { email: "me@email.com" },
  authorization_params: {},
  screenData: { email: "me@email.com" },
  transaction: {},
  getLink: (_name) => "",
  getAction: (_name) => "",
  getSubmittedFormData: (_name) => "",
  getAuthorizationParam: (_name) => "",
  getValidatedFormData: (_name) => "",
  getPromptErrors: () => [],
  getFieldErrors: (_field) => [],
  getPasskeyConfig: () => ({})
});
function submitForm(formValues) {
  const form = document.createElement("form");
  form.method = "POST";
  form.style.display = "none";
  for (const [key, value] of Object.entries({ ...formValues })) {
    const input = document.createElement("input");
    input.value = value;
    input.name = key;
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}
function LoginPassword() {
  const { state, getLink, getValidatedFormData } = reactExports.useContext(
    TransactionDataContext
  );
  const username = getValidatedFormData("username");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const submitBtn = event.target.querySelector("button#login-id-submit");
    if (submitBtn) submitBtn.setAttribute("disabled", "true");
    const usernameInput = event.target.querySelector(
      "input#username"
    );
    const passwordInput = event.target.querySelector(
      "input#password"
    );
    submitForm({
      state,
      username: usernameInput.value,
      password: passwordInput.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { noValidate: true, onSubmit: formSubmitHandler, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormHeader, { title: "Sign in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ft, { classNames: cn("mt-2 text-gray-600"), children: [
      "Signing in with",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-block font-semibold ml-1"), children: username }),
      ".",
      /* @__PURE__ */ jsxRuntimeExports.jsx(It, { href: getLink("edit_identifier"), classNames: cn("ml-1"), children: "Change" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(fe, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Label, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Input, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(fe.Errors, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "username", id: "username", value: username }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { classNames: "my-8", type: "submit", id: "login-password-submit", children: "Sign In" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: cn("pt-6 border-t border-gray-200"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tt, { level: 2, classNames: cn("mb-1"), children: "Need Help?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ft, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(It, { href: getLink("reset_password"), children: "Reset your Password" }) })
    ] })
  ] });
}
export {
  LoginPassword as L,
  TransactionDataContext as T,
  submitForm as s
};
