import { ScopeObjectKeys } from './scope-types';
export declare function DefaultScopes<T>(defaultScopes: ScopeObjectKeys<T>): (target: Function) => void;
export declare function Scopes<T>(scopes: ScopeObjectKeys<T>): (target: Function) => void;
