import { SelectQueryBuilder } from 'typeorm';
import { TableMetadataArgs } from 'typeorm/metadata-args/TableMetadataArgs';
export declare class ScopeObjectKeys<T> {
    [key: string]: ScopeQB<T>;
}
export type ScopeQB<T> = (qb: SelectQueryBuilder<T>, alias: string, context?: Record<string, any>) => SelectQueryBuilder<T>;
export declare class ScopeObject<T> {
    scopeFunc: ScopeQB<T>;
    enabled: boolean;
    context?: Record<string, any>;
}
export declare class ScopesObjectData<T> {
    [key: string]: ScopeObject<T>;
}
export interface ScopedTableMetadata<T> extends TableMetadataArgs {
    scopes: ScopesObjectData<T>;
    defaultScopes: ScopesObjectData<T>;
}
