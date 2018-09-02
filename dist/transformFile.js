"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var mime = require("node-mime");
var config_js_1 = require("web-component-tester/runner/config.js");
var getFile_1 = require("./getFile");
var transformHtml_1 = require("./transformHtml");
var transformJs_1 = require("./transformJs");
function transformFile(userAgent, absolutePath, options) {
    return __awaiter(this, void 0, void 0, function () {
        var packageName, content, mimeType, componentDir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    packageName = config_js_1.getPackageName(options);
                    return [4 /*yield*/, getFile_1.getFile(absolutePath)];
                case 1:
                    content = _a.sent();
                    if (!content) {
                        return [2 /*return*/, ""];
                    }
                    mimeType = mime.lookup(path.extname(absolutePath));
                    componentDir = path.join(options.root, options.npm ? "node_modules" : "bower_components");
                    switch (mimeType) {
                        case "text/html":
                            return [2 /*return*/, transformHtml_1.transformHtml(userAgent, content, packageName, absolutePath, options.npm, options.root, componentDir)];
                        case "application/javascript":
                            return [2 /*return*/, transformJs_1.transformJs(userAgent, content, packageName, absolutePath, options.npm, options.root, componentDir)];
                        default:
                            return [2 /*return*/, content];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.transformFile = transformFile;