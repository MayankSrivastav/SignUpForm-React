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