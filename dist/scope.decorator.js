"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scopes = exports.DefaultScopes = void 0;
const typeorm_1 = require("typeorm");
function DefaultScopes(defaultScopes) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        const table = (0, typeorm_1.getMetadataArgsStorage)().tables.find((table) => table.target === target);
        if (table) {
            table.defaultScopes = {};
            Object.entries(defaultScopes).forEach(([key, scopeFunc]) => {
                table.defaultScopes[key] = { scopeFunc, enabled: true };
            });
        }
        else {
            throw new Error('Could not find current entity in metadata store, maybe put @Scope() before @Entity()?');
        }
    };
}
exports.DefaultScopes = DefaultScopes;
function Scopes(scopes) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        const table = (0, typeorm_1.getMetadataArgsStorage)().tables.find((table) => table.target === target);
        if (table) {
            table.scopes = {};
            Object.entries(scopes).forEach(([key, scopeFunc]) => {
                table.scopes[key] = { scopeFunc, enabled: false };
            });
        }
        else {
            throw new Error('Could not find current entity in metadata store, maybe put @Scope() before @Entity()?');
        }
    };
}
exports.Scopes = Scopes;
//# sourceMappingURL=scope.decorator.js.map