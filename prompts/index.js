import { L as LoginId, j as jsxRuntimeExports, c as cn } from "./LoginId-ckoVysd4.js";
import { L as LoginPassword } from "./LoginPassword-C6KPOjkv.js";
import SignupId from "./SignupId.js";
import SignupPassword from "./SignupPassword.js";
const promptMap = {
  "login-id": LoginId,
  "login-password": LoginPassword,
  "signup-id": SignupId,
  "signup-password": SignupPassword
};
function getPrompt(prompt, screen) {
  const promptComponent = typeof promptMap[prompt] === "object" && screen ? promptMap[prompt][screen] : promptMap[prompt];
  return promptComponent ? promptComponent() : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: cn("mb-4 text-2xl font-medium"), children: "Not yet implemented!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Prompt: ",
      prompt
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Screen: ",
      screen
    ] })
  ] });
}
export {
  getPrompt,
  promptMap
};
