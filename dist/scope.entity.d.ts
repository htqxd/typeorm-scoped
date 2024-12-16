import { BaseEntity } from 'typeorm';
export declare class ScopeEntity extends BaseEntity {
    static scoped<T extends typeof BaseEntity>(this: T, ...scopes: string[]): T;
    static unscoped<T extends typeof BaseEntity>(this: T, ...defaultScopes: string[]): T;
}
