import {
  Link,
  require_main
} from "/build/_shared/chunk-FLWMZKOY.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/juhana/projects/remix/examples/route-modal/app/routes/invoices.tsx?browser
init_react();

// app/routes/invoices.tsx
init_react();
var import_react_router = __toModule(require_main());
function Invoices() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_router.Outlet, null), /* @__PURE__ */ React.createElement(Link, {
    to: "/invoices/add"
  }, "Add"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Id"), /* @__PURE__ */ React.createElement("th", null, "Company"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Amount"), /* @__PURE__ */ React.createElement("th", null, "Date"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "1"), /* @__PURE__ */ React.createElement("td", null, "Remix"), /* @__PURE__ */ React.createElement("td", null, "Invoice for Remix license"), /* @__PURE__ */ React.createElement("td", null, "$200"), /* @__PURE__ */ React.createElement("td", null, "10/10/2021"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/invoices/1/edit"
  }, "Edit"))))));
}
export {
  Invoices as default
};
//# sourceMappingURL=/build/routes/invoices-VFGPMLDB.js.map
