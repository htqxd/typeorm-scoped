import { ObjectLiteral } from 'typeorm';
import { ScopeObjectKeys } from './scope-types';
export declare function DefaultScopes<T extends ObjectLiteral>(defaultScopes: ScopeObjectKeys<T>): (target: Function) => void;
export declare function Scopes<T extends ObjectLiteral>(scopes: ScopeObjectKeys<T>): (target: Function) => void;
