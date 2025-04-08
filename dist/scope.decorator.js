"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultScopes = DefaultScopes;
exports.Scopes = Scopes;
const typeorm_1 = require("typeorm");
function DefaultScopes(defaultScopes) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        const table = (0, typeorm_1.getMetadataArgsStorage)().tables.find((table) => table.target === target);
        if (table) {
            table.defaultScopes = {};
            Object.entries(defaultScopes).forEach(([key, scopeFunc]) => {
                table.defaultScopes[key] = {
                    scopeFunc: (qb, alias) => {
                        return scopeFunc(qb, alias);
                    },
                    enabled: true,
                };
            });
        }
        else {
            throw new Error('Could not find current entity in metadata store, maybe put @Scope() before @Entity()?');
        }
    };
}
function Scopes(scopes) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        const table = (0, typeorm_1.getMetadataArgsStorage)().tables.find((table) => table.target === target);
        if (table) {
            table.scopes = {};
            Object.entries(scopes).forEach(([key, scopeFunc]) => {
                table.scopes[key] = {
                    scopeFunc: (qb, alias, context) => {
                        return scopeFunc(qb, alias, context);
                    },
                    enabled: false,
                };
            });
        }
        else {
            throw new Error('Could not find current entity in metadata store, maybe put @Scope() before @Entity()?');
        }
    };
}
//# sourceMappingURL=scope.decorator.js.map