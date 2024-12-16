import { ObjectLiteral, Repository } from "typeorm";
export declare class ScopeRepository<T extends ObjectLiteral> extends Repository<T> {
    scoped(...scopes: string[]): this;
    unscoped(...defaultScopes: string[]): this;
}
