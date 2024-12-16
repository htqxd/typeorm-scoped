import {ObjectLiteral, SelectQueryBuilder} from 'typeorm';
import {TableMetadataArgs} from 'typeorm/metadata-args/TableMetadataArgs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ScopeObjectKeys<T extends ObjectLiteral> {
  [key: string]: ScopeQB<T>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ScopeQB<T extends ObjectLiteral> = (
  qb: SelectQueryBuilder<T>,
  alias: string,
) => SelectQueryBuilder<T>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ScopeObject<T extends ObjectLiteral> {
  scopeFunc: ScopeQB<T>;
  enabled: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ScopesObjectData<T extends ObjectLiteral> {
  [key: string]: ScopeObject<T>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ScopedTableMetadata<T extends ObjectLiteral> extends TableMetadataArgs {
  scopes: ScopesObjectData<T>;
  defaultScopes: ScopesObjectData<T>;
}
