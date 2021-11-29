import {
  reach_dialog_esm_default,
  styles_default
} from "/build/_shared/chunk-CVVYIOEV.js";
import "/build/_shared/chunk-OQ4VQ54M.js";
import {
  Form,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-FLWMZKOY.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/juhana/projects/remix/examples/route-modal/app/routes/invoices/$id/edit.tsx?browser
init_react();

// app/routes/invoices/$id/edit.tsx
init_react();
var React = __toModule(require_react());

// app/styles/invoices/edit.css
var edit_default = "/build/_assets/edit-EM2N4K6Q.css";

// app/routes/invoices/$id/edit.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "stylesheet",
      href: edit_default
    }
  ];
};
function Edit() {
  const navigate = (0, import_react_router_dom.useNavigate)();
  const { id } = (0, import_react_router_dom.useParams)();
  const data = useLoaderData();
  const [formData, setFormData] = React.useState({
    company: data.company,
    description: data.description,
    amount: data.amount,
    date: data.date
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function onDismiss() {
    navigate(-1);
  }
  return /* @__PURE__ */ React.createElement(reach_dialog_esm_default, {
    className: "dialog",
    isOpen: true,
    "aria-label": "Add invoice",
    onDismiss
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    replace: true,
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Company"), /* @__PURE__ */ React.createElement("input", {
    className: "input",
    type: "text",
    name: "company",
    value: formData.company
  }), /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    className: "input",
    name: "description",
    value: formData.description,
    rows: 5
  }), /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Amount"), /* @__PURE__ */ React.createElement("input", {
    className: "input",
    type: "number",
    name: "amount",
    value: formData.amount
  }), /* @__PURE__ */ React.createElement("input", {
    className: "input",
    type: "date",
    name: "date",
    value: formData.date
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: onDismiss
  }, "Cancel"))));
}
export {
  Edit as default,
  links
};
//# sourceMappingURL=/build/routes/invoices/$id/edit-FLE73YAG.js.map
