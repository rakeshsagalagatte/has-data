"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has_data = void 0;
function has_data(object) {
    if (!object || (object && typeof object === 'string' && object.trim().length === 0)) {
        return false;
    }
    if (Array.isArray(object) && object.length === 0) {
        return false;
    }
    if (typeof object === 'object' && !Array.isArray(object) && (object instanceof Map || object instanceof Set) && object.size === 0) {
        return false;
    }
    return true;
}
exports.has_data = has_data;
//# sourceMappingURL=index.js.map