"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CONFIG_FILE_NAME: function() {
        return CONFIG_FILE_NAME;
    },
    DEFAULT_CONFIG: function() {
        return DEFAULT_CONFIG;
    },
    DataSource: function() {
        return RestDataSource;
    },
    SourceType: function() {
        return SourceType;
    },
    Type: function() {
        return Type;
    },
    default: function() {
        return RestDataSource;
    }
});
const _core = require("@godspeedsystems/core");
const _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RestDataSource extends _core.GSDataSource {
    initClient() {
        return _async_to_generator(function*() {
            return _axios.default.create({
                baseURL: this.config.base_url,
                headers: this.config.headers || {}
            });
        }).call(this);
    }
    execute(ctx, args) {
        return _async_to_generator(function*() {
            try {
                var _args_meta, _args_meta1;
                const method = ((_args_meta = args.meta) === null || _args_meta === void 0 ? void 0 : _args_meta.method) || 'get';
                const url = (_args_meta1 = args.meta) === null || _args_meta1 === void 0 ? void 0 : _args_meta1.url;
                const data = args.body || {};
                const response = yield this.client.request({
                    method,
                    url,
                    data: method === 'get' ? undefined : data
                });
                return new _core.GSStatus(true, 200, 'Request successful', response.data);
            } catch (err) {
                var _err_response;
                return new _core.GSStatus(false, ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) || 500, 'Request failed', {
                    error: err.message
                });
            }
        }).call(this);
    }
}
const SourceType = 'DS';
const Type = 'rest';
const CONFIG_FILE_NAME = 'rest'; // optional
const DEFAULT_CONFIG = {
    base_url: '',
    headers: {}
};

//# sourceMappingURL=rest.js.map