"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// foi utilizando o pacote sucrase para poder ser usado o import e export
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;

_app2.default.listen(port);
