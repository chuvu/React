var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // const { render } = ReactDOM
var ColorPicker = function (_React$Component) {_inherits(ColorPicker, _React$Component);
  function ColorPicker(props) {_classCallCheck(this, ColorPicker);var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this,
    props));
    _this.state = {
      red: 165,
      green: 57,
      blue: 230,
      alpha: 1 };return _this;

  }_createClass(ColorPicker, [{ key: "update", value: function update(
    e) {
      this.setState({
        red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
        green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
        blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,
        alpha: ReactDOM.findDOMNode(this.refs.alpha.refs.input).value });

    } }, { key: "render", value: function render()
    {var _this2 = this;
      var bgc = this.state.alpha == 1 ? "rgb(" +
      this.state.red + ", " + this.state.green + ", " + this.state.blue + ")" : "rgba(" +
      this.state.red + ", " + this.state.green + ", " + this.state.blue + ", " + this.state.alpha + ")";
      var body = document.body;
      var myStyle = {
        backgroundColor: bgc };

      body.style.backgroundColor = bgc;

      return (
        React.createElement("div", { className: "color-picker" },
          React.createElement("div", { className: "color", style: myStyle }),
          React.createElement("div", { className: "result" }, bgc),
          React.createElement(Slider, { ref: "red", min: "0", max: "255", col: "red", val: this.state.red, update: function update() {return _this2.update();} }, this.state.red),
          React.createElement(Slider, { ref: "green", min: "0", max: "255", col: "green", val: this.state.green, update: function update() {return _this2.update();} }, this.state.green),
          React.createElement(Slider, { ref: "blue", min: "0", max: "255", col: "blue", val: this.state.blue, update: function update() {return _this2.update();} }, this.state.blue),
          React.createElement(Slider, { ref: "alpha", min: "0", max: "1", col: "alpha", step: "0.01", val: this.state.alpha, update: function update() {return _this2.update();} }, this.state.alpha)));


    } }]);return ColorPicker;}(React.Component);var


Slider = function (_React$Component2) {_inherits(Slider, _React$Component2);function Slider() {_classCallCheck(this, Slider);return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));}_createClass(Slider, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement("input", { ref: "input",
            value: this.props.val,
            type: "range",
            min: this.props.min,
            max: this.props.max,
            step: this.props.step,
            onChange: this.props.update }),

          React.createElement("div", null, this.props.col, ": ", this.props.children)));


    } }]);return Slider;}(React.Component);


ReactDOM.render(React.createElement(ColorPicker, null), document.getElementById('app'));