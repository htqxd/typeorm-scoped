import { ObjectLiteral, Repository } from 'typeorm';
export declare class ScopeRepository<T extends ObjectLiteral> extends Repository<T> {
    scoped(scope: string, context?: Record<string, any>): this;
    unscoped(...defaultScopes: string[]): this;
}
