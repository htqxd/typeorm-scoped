"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeRepository = void 0;
const typeorm_1 = require("typeorm");
class ScopeRepository extends typeorm_1.Repository {
    scoped(...scopes) {
        scopes = [...new Set(scopes)];
        const metadata = this.metadata.tableMetadataArgs;
        if (metadata && metadata.scopes) {
            for (const scopeName of scopes) {
                if (metadata.scopes[scopeName]) {
                    metadata.scopes[scopeName].enabled = true;
                }
            }
        }
        return this;
    }
    unscoped(...defaultScopes) {
        const metadata = this.metadata.tableMetadataArgs;
        if (metadata && metadata.defaultScopes) {
            for (const key in metadata.defaultScopes) {
                if (!defaultScopes.length) {
                    if (metadata.defaultScopes[key]) {
                        metadata.defaultScopes[key].enabled = false;
                    }
                }
                else {
                    const scopeSet = new Set(defaultScopes);
                    // if the key is in the scopeSet, set enabled to false
                    if (scopeSet.has(key)) {
                        if (metadata.defaultScopes[key]) {
                            metadata.defaultScopes[key].enabled = false;
                        }
                    }
                }
            }
        }
        return this;
    }
}
exports.ScopeRepository = ScopeRepository;
//# sourceMappingURL=scope.repository.js.map