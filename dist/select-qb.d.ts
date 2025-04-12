import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
export declare const GET_QUERY_COPY = "___scope_getQuery_copy___";
export declare class SelectQB<T extends ObjectLiteral> extends SelectQueryBuilder<T> {
    getQuery(): string;
    protected ___patchScopes___(): void;
}
