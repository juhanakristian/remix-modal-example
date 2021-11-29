import {
  reach_dialog_esm_default,
  styles_default
} from "/build/_shared/chunk-CVVYIOEV.js";
import "/build/_shared/chunk-OQ4VQ54M.js";
import {
  Form,
  import_react_router_dom
} from "/build/_shared/chunk-FLWMZKOY.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/juhana/projects/remix/examples/route-modal/app/routes/invoices/$id/edit.tsx?browser
init_react();

// app/routes/invoices/$id/edit.tsx
init_react();
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function Edit() {
  const navigate = (0, import_react_router_dom.useNavigate)();
  const { id } = (0, import_react_router_dom.useParams)();
  function onDismiss() {
    navigate(-1);
  }
  return /* @__PURE__ */ React.createElement(reach_dialog_esm_default, {
    isOpen: true,
    "aria-label": "Add invoice",
    onDismiss
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    replace: true
  }, /* @__PURE__ */ React.createElement("label", null, "Company ", id), /* @__PURE__ */ React.createElement("input", {
    type: "text"
  }), /* @__PURE__ */ React.createElement("label", null, "Amount"), /* @__PURE__ */ React.createElement("input", {
    type: "text"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: onDismiss
  }, "Cancel")));
}
export {
  Edit as default,
  links
};
//# sourceMappingURL=/build/routes/invoices/$id/edit-FJELZFMD.js.map
