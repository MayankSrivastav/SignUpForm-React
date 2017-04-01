"use strict";

var Input = React.createClass({
   displayName: "Input",

   render: function render() {
      return React.createElement(
         "div",
         { className: "Input" },
         React.createElement("input", { id: this.props.name, type: this.props.type, placeholder: this.props.placeholder }),
         React.createElement("label", { "for": this.props.name })
      );
   }
});

var Modal = React.createClass({
   displayName: "Modal",

   render: function render() {
      return React.createElement(
         "div",
         { className: "Modal" },
         React.createElement(
            "form",
            { onSubmit: this.props.onSubmit, className: "ModalForm" },
            React.createElement(Input, { id: "name", type: "text", placeholder: "Mayank Srivastav" }),
            React.createElement(Input, { id: "username", type: "email", placeholder: "mayanksri18@yahoo.in" }),
            React.createElement(Input, { id: "password", type: "password", placeholder: "password" }),
            React.createElement(
               "button",
               null,
               "Log in ",
               React.createElement("i", { className: "fa fa-fw fa-chevron-right" })
            )
         )
      );
   }
});