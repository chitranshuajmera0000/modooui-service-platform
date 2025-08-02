
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model QuotationRequest
 * 
 */
export type QuotationRequest = $Result.DefaultSelection<Prisma.$QuotationRequestPayload>
/**
 * Model Quotation
 * 
 */
export type Quotation = $Result.DefaultSelection<Prisma.$QuotationPayload>
/**
 * Model Consultation
 * 
 */
export type Consultation = $Result.DefaultSelection<Prisma.$ConsultationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  PENDING: 'PENDING',
  RESPONDED: 'RESPONDED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const QuotationStatus: {
  SENT: 'SENT',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type QuotationStatus = (typeof QuotationStatus)[keyof typeof QuotationStatus]


export const ConsultationStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ConsultationStatus = (typeof ConsultationStatus)[keyof typeof ConsultationStatus]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type QuotationStatus = $Enums.QuotationStatus

export const QuotationStatus: typeof $Enums.QuotationStatus

export type ConsultationStatus = $Enums.ConsultationStatus

export const ConsultationStatus: typeof $Enums.ConsultationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotationRequest`: Exposes CRUD operations for the **QuotationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotationRequests
    * const quotationRequests = await prisma.quotationRequest.findMany()
    * ```
    */
  get quotationRequest(): Prisma.QuotationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultation`: Exposes CRUD operations for the **Consultation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultations
    * const consultations = await prisma.consultation.findMany()
    * ```
    */
  get consultation(): Prisma.ConsultationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Service: 'Service',
    QuotationRequest: 'QuotationRequest',
    Quotation: 'Quotation',
    Consultation: 'Consultation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "service" | "quotationRequest" | "quotation" | "consultation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      QuotationRequest: {
        payload: Prisma.$QuotationRequestPayload<ExtArgs>
        fields: Prisma.QuotationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>
          }
          findFirst: {
            args: Prisma.QuotationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>
          }
          findMany: {
            args: Prisma.QuotationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>[]
          }
          create: {
            args: Prisma.QuotationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>
          }
          createMany: {
            args: Prisma.QuotationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>[]
          }
          delete: {
            args: Prisma.QuotationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>
          }
          update: {
            args: Prisma.QuotationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>
          }
          deleteMany: {
            args: Prisma.QuotationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>[]
          }
          upsert: {
            args: Prisma.QuotationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationRequestPayload>
          }
          aggregate: {
            args: Prisma.QuotationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotationRequest>
          }
          groupBy: {
            args: Prisma.QuotationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationRequestCountAggregateOutputType> | number
          }
        }
      }
      Quotation: {
        payload: Prisma.$QuotationPayload<ExtArgs>
        fields: Prisma.QuotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findFirst: {
            args: Prisma.QuotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findMany: {
            args: Prisma.QuotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          create: {
            args: Prisma.QuotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          createMany: {
            args: Prisma.QuotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          delete: {
            args: Prisma.QuotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          update: {
            args: Prisma.QuotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          deleteMany: {
            args: Prisma.QuotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          upsert: {
            args: Prisma.QuotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          aggregate: {
            args: Prisma.QuotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotation>
          }
          groupBy: {
            args: Prisma.QuotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationCountAggregateOutputType> | number
          }
        }
      }
      Consultation: {
        payload: Prisma.$ConsultationPayload<ExtArgs>
        fields: Prisma.ConsultationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findFirst: {
            args: Prisma.ConsultationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findMany: {
            args: Prisma.ConsultationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          create: {
            args: Prisma.ConsultationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          createMany: {
            args: Prisma.ConsultationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          delete: {
            args: Prisma.ConsultationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          update: {
            args: Prisma.ConsultationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          aggregate: {
            args: Prisma.ConsultationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultation>
          }
          groupBy: {
            args: Prisma.ConsultationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    service?: ServiceOmit
    quotationRequest?: QuotationRequestOmit
    quotation?: QuotationOmit
    consultation?: ConsultationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quotationRequests: number
    quotations: number
    consultations: number
    services: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotationRequests?: boolean | UserCountOutputTypeCountQuotationRequestsArgs
    quotations?: boolean | UserCountOutputTypeCountQuotationsArgs
    consultations?: boolean | UserCountOutputTypeCountConsultationsArgs
    services?: boolean | UserCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuotationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    quotationRequests: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotationRequests?: boolean | ServiceCountOutputTypeCountQuotationRequestsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountQuotationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationRequestWhereInput
  }


  /**
   * Count Type QuotationRequestCountOutputType
   */

  export type QuotationRequestCountOutputType = {
    quotations: number
  }

  export type QuotationRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotations?: boolean | QuotationRequestCountOutputTypeCountQuotationsArgs
  }

  // Custom InputTypes
  /**
   * QuotationRequestCountOutputType without action
   */
  export type QuotationRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequestCountOutputType
     */
    select?: QuotationRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotationRequestCountOutputType without action
   */
  export type QuotationRequestCountOutputTypeCountQuotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
  }


  /**
   * Count Type QuotationCountOutputType
   */

  export type QuotationCountOutputType = {
    consultations: number
  }

  export type QuotationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultations?: boolean | QuotationCountOutputTypeCountConsultationsArgs
  }

  // Custom InputTypes
  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCountOutputType
     */
    select?: QuotationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    location: string | null
    profileImage: string | null
    bio: string | null
    isServiceProvider: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    location: string | null
    profileImage: string | null
    bio: string | null
    isServiceProvider: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    location: number
    profileImage: number
    bio: number
    isServiceProvider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    location?: true
    profileImage?: true
    bio?: true
    isServiceProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    location?: true
    profileImage?: true
    bio?: true
    isServiceProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    location?: true
    profileImage?: true
    bio?: true
    isServiceProvider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    phone: string | null
    location: string | null
    profileImage: string | null
    bio: string | null
    isServiceProvider: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    profileImage?: boolean
    bio?: boolean
    isServiceProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotationRequests?: boolean | User$quotationRequestsArgs<ExtArgs>
    quotations?: boolean | User$quotationsArgs<ExtArgs>
    consultations?: boolean | User$consultationsArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    profileImage?: boolean
    bio?: boolean
    isServiceProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    profileImage?: boolean
    bio?: boolean
    isServiceProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    location?: boolean
    profileImage?: boolean
    bio?: boolean
    isServiceProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phone" | "location" | "profileImage" | "bio" | "isServiceProvider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotationRequests?: boolean | User$quotationRequestsArgs<ExtArgs>
    quotations?: boolean | User$quotationsArgs<ExtArgs>
    consultations?: boolean | User$consultationsArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quotationRequests: Prisma.$QuotationRequestPayload<ExtArgs>[]
      quotations: Prisma.$QuotationPayload<ExtArgs>[]
      consultations: Prisma.$ConsultationPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      phone: string | null
      location: string | null
      profileImage: string | null
      bio: string | null
      isServiceProvider: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotationRequests<T extends User$quotationRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$quotationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quotations<T extends User$quotationsArgs<ExtArgs> = {}>(args?: Subset<T, User$quotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultations<T extends User$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, User$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly isServiceProvider: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.quotationRequests
   */
  export type User$quotationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    where?: QuotationRequestWhereInput
    orderBy?: QuotationRequestOrderByWithRelationInput | QuotationRequestOrderByWithRelationInput[]
    cursor?: QuotationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationRequestScalarFieldEnum | QuotationRequestScalarFieldEnum[]
  }

  /**
   * User.quotations
   */
  export type User$quotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    cursor?: QuotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * User.consultations
   */
  export type User$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    basePrice: number | null
  }

  export type ServiceSumAggregateOutputType = {
    basePrice: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    basePrice: number | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    basePrice: number | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    category: number
    description: number
    basePrice: number
    providerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    basePrice?: true
  }

  export type ServiceSumAggregateInputType = {
    basePrice?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    basePrice?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    basePrice?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    basePrice?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    category: string
    description: string
    basePrice: number
    providerId: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    basePrice?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
    quotationRequests?: boolean | Service$quotationRequestsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    basePrice?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    basePrice?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    basePrice?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "description" | "basePrice" | "providerId" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
    quotationRequests?: boolean | Service$quotationRequestsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      provider: Prisma.$UserPayload<ExtArgs>
      quotationRequests: Prisma.$QuotationRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      description: string
      basePrice: number
      providerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quotationRequests<T extends Service$quotationRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Service$quotationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly category: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly basePrice: FieldRef<"Service", 'Float'>
    readonly providerId: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.quotationRequests
   */
  export type Service$quotationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    where?: QuotationRequestWhereInput
    orderBy?: QuotationRequestOrderByWithRelationInput | QuotationRequestOrderByWithRelationInput[]
    cursor?: QuotationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationRequestScalarFieldEnum | QuotationRequestScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model QuotationRequest
   */

  export type AggregateQuotationRequest = {
    _count: QuotationRequestCountAggregateOutputType | null
    _avg: QuotationRequestAvgAggregateOutputType | null
    _sum: QuotationRequestSumAggregateOutputType | null
    _min: QuotationRequestMinAggregateOutputType | null
    _max: QuotationRequestMaxAggregateOutputType | null
  }

  export type QuotationRequestAvgAggregateOutputType = {
    budget: number | null
  }

  export type QuotationRequestSumAggregateOutputType = {
    budget: number | null
  }

  export type QuotationRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    description: string | null
    budget: number | null
    location: string | null
    status: $Enums.RequestStatus | null
    requestedAt: Date | null
    respondedAt: Date | null
  }

  export type QuotationRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    description: string | null
    budget: number | null
    location: string | null
    status: $Enums.RequestStatus | null
    requestedAt: Date | null
    respondedAt: Date | null
  }

  export type QuotationRequestCountAggregateOutputType = {
    id: number
    userId: number
    serviceId: number
    description: number
    budget: number
    location: number
    status: number
    requestedAt: number
    respondedAt: number
    _all: number
  }


  export type QuotationRequestAvgAggregateInputType = {
    budget?: true
  }

  export type QuotationRequestSumAggregateInputType = {
    budget?: true
  }

  export type QuotationRequestMinAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    description?: true
    budget?: true
    location?: true
    status?: true
    requestedAt?: true
    respondedAt?: true
  }

  export type QuotationRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    description?: true
    budget?: true
    location?: true
    status?: true
    requestedAt?: true
    respondedAt?: true
  }

  export type QuotationRequestCountAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    description?: true
    budget?: true
    location?: true
    status?: true
    requestedAt?: true
    respondedAt?: true
    _all?: true
  }

  export type QuotationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationRequest to aggregate.
     */
    where?: QuotationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationRequests to fetch.
     */
    orderBy?: QuotationRequestOrderByWithRelationInput | QuotationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotationRequests
    **/
    _count?: true | QuotationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationRequestMaxAggregateInputType
  }

  export type GetQuotationRequestAggregateType<T extends QuotationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotationRequest[P]>
      : GetScalarType<T[P], AggregateQuotationRequest[P]>
  }




  export type QuotationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationRequestWhereInput
    orderBy?: QuotationRequestOrderByWithAggregationInput | QuotationRequestOrderByWithAggregationInput[]
    by: QuotationRequestScalarFieldEnum[] | QuotationRequestScalarFieldEnum
    having?: QuotationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationRequestCountAggregateInputType | true
    _avg?: QuotationRequestAvgAggregateInputType
    _sum?: QuotationRequestSumAggregateInputType
    _min?: QuotationRequestMinAggregateInputType
    _max?: QuotationRequestMaxAggregateInputType
  }

  export type QuotationRequestGroupByOutputType = {
    id: string
    userId: string
    serviceId: string
    description: string
    budget: number | null
    location: string
    status: $Enums.RequestStatus
    requestedAt: Date
    respondedAt: Date | null
    _count: QuotationRequestCountAggregateOutputType | null
    _avg: QuotationRequestAvgAggregateOutputType | null
    _sum: QuotationRequestSumAggregateOutputType | null
    _min: QuotationRequestMinAggregateOutputType | null
    _max: QuotationRequestMaxAggregateOutputType | null
  }

  type GetQuotationRequestGroupByPayload<T extends QuotationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationRequestGroupByOutputType[P]>
        }
      >
    >


  export type QuotationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    status?: boolean
    requestedAt?: boolean
    respondedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    quotations?: boolean | QuotationRequest$quotationsArgs<ExtArgs>
    _count?: boolean | QuotationRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationRequest"]>

  export type QuotationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    status?: boolean
    requestedAt?: boolean
    respondedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationRequest"]>

  export type QuotationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    status?: boolean
    requestedAt?: boolean
    respondedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationRequest"]>

  export type QuotationRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    status?: boolean
    requestedAt?: boolean
    respondedAt?: boolean
  }

  export type QuotationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceId" | "description" | "budget" | "location" | "status" | "requestedAt" | "respondedAt", ExtArgs["result"]["quotationRequest"]>
  export type QuotationRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    quotations?: boolean | QuotationRequest$quotationsArgs<ExtArgs>
    _count?: boolean | QuotationRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotationRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type QuotationRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $QuotationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotationRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      quotations: Prisma.$QuotationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serviceId: string
      description: string
      budget: number | null
      location: string
      status: $Enums.RequestStatus
      requestedAt: Date
      respondedAt: Date | null
    }, ExtArgs["result"]["quotationRequest"]>
    composites: {}
  }

  type QuotationRequestGetPayload<S extends boolean | null | undefined | QuotationRequestDefaultArgs> = $Result.GetResult<Prisma.$QuotationRequestPayload, S>

  type QuotationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotationRequestCountAggregateInputType | true
    }

  export interface QuotationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotationRequest'], meta: { name: 'QuotationRequest' } }
    /**
     * Find zero or one QuotationRequest that matches the filter.
     * @param {QuotationRequestFindUniqueArgs} args - Arguments to find a QuotationRequest
     * @example
     * // Get one QuotationRequest
     * const quotationRequest = await prisma.quotationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationRequestFindUniqueArgs>(args: SelectSubset<T, QuotationRequestFindUniqueArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuotationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationRequestFindUniqueOrThrowArgs} args - Arguments to find a QuotationRequest
     * @example
     * // Get one QuotationRequest
     * const quotationRequest = await prisma.quotationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestFindFirstArgs} args - Arguments to find a QuotationRequest
     * @example
     * // Get one QuotationRequest
     * const quotationRequest = await prisma.quotationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationRequestFindFirstArgs>(args?: SelectSubset<T, QuotationRequestFindFirstArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestFindFirstOrThrowArgs} args - Arguments to find a QuotationRequest
     * @example
     * // Get one QuotationRequest
     * const quotationRequest = await prisma.quotationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuotationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotationRequests
     * const quotationRequests = await prisma.quotationRequest.findMany()
     * 
     * // Get first 10 QuotationRequests
     * const quotationRequests = await prisma.quotationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationRequestWithIdOnly = await prisma.quotationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationRequestFindManyArgs>(args?: SelectSubset<T, QuotationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuotationRequest.
     * @param {QuotationRequestCreateArgs} args - Arguments to create a QuotationRequest.
     * @example
     * // Create one QuotationRequest
     * const QuotationRequest = await prisma.quotationRequest.create({
     *   data: {
     *     // ... data to create a QuotationRequest
     *   }
     * })
     * 
     */
    create<T extends QuotationRequestCreateArgs>(args: SelectSubset<T, QuotationRequestCreateArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuotationRequests.
     * @param {QuotationRequestCreateManyArgs} args - Arguments to create many QuotationRequests.
     * @example
     * // Create many QuotationRequests
     * const quotationRequest = await prisma.quotationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationRequestCreateManyArgs>(args?: SelectSubset<T, QuotationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotationRequests and returns the data saved in the database.
     * @param {QuotationRequestCreateManyAndReturnArgs} args - Arguments to create many QuotationRequests.
     * @example
     * // Create many QuotationRequests
     * const quotationRequest = await prisma.quotationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotationRequests and only return the `id`
     * const quotationRequestWithIdOnly = await prisma.quotationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuotationRequest.
     * @param {QuotationRequestDeleteArgs} args - Arguments to delete one QuotationRequest.
     * @example
     * // Delete one QuotationRequest
     * const QuotationRequest = await prisma.quotationRequest.delete({
     *   where: {
     *     // ... filter to delete one QuotationRequest
     *   }
     * })
     * 
     */
    delete<T extends QuotationRequestDeleteArgs>(args: SelectSubset<T, QuotationRequestDeleteArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuotationRequest.
     * @param {QuotationRequestUpdateArgs} args - Arguments to update one QuotationRequest.
     * @example
     * // Update one QuotationRequest
     * const quotationRequest = await prisma.quotationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationRequestUpdateArgs>(args: SelectSubset<T, QuotationRequestUpdateArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuotationRequests.
     * @param {QuotationRequestDeleteManyArgs} args - Arguments to filter QuotationRequests to delete.
     * @example
     * // Delete a few QuotationRequests
     * const { count } = await prisma.quotationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationRequestDeleteManyArgs>(args?: SelectSubset<T, QuotationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotationRequests
     * const quotationRequest = await prisma.quotationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationRequestUpdateManyArgs>(args: SelectSubset<T, QuotationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationRequests and returns the data updated in the database.
     * @param {QuotationRequestUpdateManyAndReturnArgs} args - Arguments to update many QuotationRequests.
     * @example
     * // Update many QuotationRequests
     * const quotationRequest = await prisma.quotationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuotationRequests and only return the `id`
     * const quotationRequestWithIdOnly = await prisma.quotationRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuotationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuotationRequest.
     * @param {QuotationRequestUpsertArgs} args - Arguments to update or create a QuotationRequest.
     * @example
     * // Update or create a QuotationRequest
     * const quotationRequest = await prisma.quotationRequest.upsert({
     *   create: {
     *     // ... data to create a QuotationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotationRequest we want to update
     *   }
     * })
     */
    upsert<T extends QuotationRequestUpsertArgs>(args: SelectSubset<T, QuotationRequestUpsertArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuotationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestCountArgs} args - Arguments to filter QuotationRequests to count.
     * @example
     * // Count the number of QuotationRequests
     * const count = await prisma.quotationRequest.count({
     *   where: {
     *     // ... the filter for the QuotationRequests we want to count
     *   }
     * })
    **/
    count<T extends QuotationRequestCountArgs>(
      args?: Subset<T, QuotationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuotationRequestAggregateArgs>(args: Subset<T, QuotationRequestAggregateArgs>): Prisma.PrismaPromise<GetQuotationRequestAggregateType<T>>

    /**
     * Group by QuotationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuotationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationRequestGroupByArgs['orderBy'] }
        : { orderBy?: QuotationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotationRequest model
   */
  readonly fields: QuotationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quotations<T extends QuotationRequest$quotationsArgs<ExtArgs> = {}>(args?: Subset<T, QuotationRequest$quotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuotationRequest model
   */
  interface QuotationRequestFieldRefs {
    readonly id: FieldRef<"QuotationRequest", 'String'>
    readonly userId: FieldRef<"QuotationRequest", 'String'>
    readonly serviceId: FieldRef<"QuotationRequest", 'String'>
    readonly description: FieldRef<"QuotationRequest", 'String'>
    readonly budget: FieldRef<"QuotationRequest", 'Float'>
    readonly location: FieldRef<"QuotationRequest", 'String'>
    readonly status: FieldRef<"QuotationRequest", 'RequestStatus'>
    readonly requestedAt: FieldRef<"QuotationRequest", 'DateTime'>
    readonly respondedAt: FieldRef<"QuotationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuotationRequest findUnique
   */
  export type QuotationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuotationRequest to fetch.
     */
    where: QuotationRequestWhereUniqueInput
  }

  /**
   * QuotationRequest findUniqueOrThrow
   */
  export type QuotationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuotationRequest to fetch.
     */
    where: QuotationRequestWhereUniqueInput
  }

  /**
   * QuotationRequest findFirst
   */
  export type QuotationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuotationRequest to fetch.
     */
    where?: QuotationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationRequests to fetch.
     */
    orderBy?: QuotationRequestOrderByWithRelationInput | QuotationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationRequests.
     */
    cursor?: QuotationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationRequests.
     */
    distinct?: QuotationRequestScalarFieldEnum | QuotationRequestScalarFieldEnum[]
  }

  /**
   * QuotationRequest findFirstOrThrow
   */
  export type QuotationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuotationRequest to fetch.
     */
    where?: QuotationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationRequests to fetch.
     */
    orderBy?: QuotationRequestOrderByWithRelationInput | QuotationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationRequests.
     */
    cursor?: QuotationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationRequests.
     */
    distinct?: QuotationRequestScalarFieldEnum | QuotationRequestScalarFieldEnum[]
  }

  /**
   * QuotationRequest findMany
   */
  export type QuotationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuotationRequests to fetch.
     */
    where?: QuotationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationRequests to fetch.
     */
    orderBy?: QuotationRequestOrderByWithRelationInput | QuotationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotationRequests.
     */
    cursor?: QuotationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationRequests.
     */
    skip?: number
    distinct?: QuotationRequestScalarFieldEnum | QuotationRequestScalarFieldEnum[]
  }

  /**
   * QuotationRequest create
   */
  export type QuotationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a QuotationRequest.
     */
    data: XOR<QuotationRequestCreateInput, QuotationRequestUncheckedCreateInput>
  }

  /**
   * QuotationRequest createMany
   */
  export type QuotationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotationRequests.
     */
    data: QuotationRequestCreateManyInput | QuotationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotationRequest createManyAndReturn
   */
  export type QuotationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many QuotationRequests.
     */
    data: QuotationRequestCreateManyInput | QuotationRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationRequest update
   */
  export type QuotationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a QuotationRequest.
     */
    data: XOR<QuotationRequestUpdateInput, QuotationRequestUncheckedUpdateInput>
    /**
     * Choose, which QuotationRequest to update.
     */
    where: QuotationRequestWhereUniqueInput
  }

  /**
   * QuotationRequest updateMany
   */
  export type QuotationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotationRequests.
     */
    data: XOR<QuotationRequestUpdateManyMutationInput, QuotationRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuotationRequests to update
     */
    where?: QuotationRequestWhereInput
    /**
     * Limit how many QuotationRequests to update.
     */
    limit?: number
  }

  /**
   * QuotationRequest updateManyAndReturn
   */
  export type QuotationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * The data used to update QuotationRequests.
     */
    data: XOR<QuotationRequestUpdateManyMutationInput, QuotationRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuotationRequests to update
     */
    where?: QuotationRequestWhereInput
    /**
     * Limit how many QuotationRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationRequest upsert
   */
  export type QuotationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the QuotationRequest to update in case it exists.
     */
    where: QuotationRequestWhereUniqueInput
    /**
     * In case the QuotationRequest found by the `where` argument doesn't exist, create a new QuotationRequest with this data.
     */
    create: XOR<QuotationRequestCreateInput, QuotationRequestUncheckedCreateInput>
    /**
     * In case the QuotationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationRequestUpdateInput, QuotationRequestUncheckedUpdateInput>
  }

  /**
   * QuotationRequest delete
   */
  export type QuotationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
    /**
     * Filter which QuotationRequest to delete.
     */
    where: QuotationRequestWhereUniqueInput
  }

  /**
   * QuotationRequest deleteMany
   */
  export type QuotationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationRequests to delete
     */
    where?: QuotationRequestWhereInput
    /**
     * Limit how many QuotationRequests to delete.
     */
    limit?: number
  }

  /**
   * QuotationRequest.quotations
   */
  export type QuotationRequest$quotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    cursor?: QuotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * QuotationRequest without action
   */
  export type QuotationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationRequest
     */
    select?: QuotationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationRequest
     */
    omit?: QuotationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationRequestInclude<ExtArgs> | null
  }


  /**
   * Model Quotation
   */

  export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  export type QuotationAvgAggregateOutputType = {
    price: number | null
  }

  export type QuotationSumAggregateOutputType = {
    price: number | null
  }

  export type QuotationMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    providerId: string | null
    price: number | null
    description: string | null
    estimatedDuration: string | null
    status: $Enums.QuotationStatus | null
    validUntil: Date | null
    createdAt: Date | null
  }

  export type QuotationMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    providerId: string | null
    price: number | null
    description: string | null
    estimatedDuration: string | null
    status: $Enums.QuotationStatus | null
    validUntil: Date | null
    createdAt: Date | null
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    requestId: number
    providerId: number
    price: number
    description: number
    estimatedDuration: number
    status: number
    validUntil: number
    createdAt: number
    _all: number
  }


  export type QuotationAvgAggregateInputType = {
    price?: true
  }

  export type QuotationSumAggregateInputType = {
    price?: true
  }

  export type QuotationMinAggregateInputType = {
    id?: true
    requestId?: true
    providerId?: true
    price?: true
    description?: true
    estimatedDuration?: true
    status?: true
    validUntil?: true
    createdAt?: true
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    requestId?: true
    providerId?: true
    price?: true
    description?: true
    estimatedDuration?: true
    status?: true
    validUntil?: true
    createdAt?: true
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    requestId?: true
    providerId?: true
    price?: true
    description?: true
    estimatedDuration?: true
    status?: true
    validUntil?: true
    createdAt?: true
    _all?: true
  }

  export type QuotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType
  }

  export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotation[P]>
      : GetScalarType<T[P], AggregateQuotation[P]>
  }




  export type QuotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithAggregationInput | QuotationOrderByWithAggregationInput[]
    by: QuotationScalarFieldEnum[] | QuotationScalarFieldEnum
    having?: QuotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCountAggregateInputType | true
    _avg?: QuotationAvgAggregateInputType
    _sum?: QuotationSumAggregateInputType
    _min?: QuotationMinAggregateInputType
    _max?: QuotationMaxAggregateInputType
  }

  export type QuotationGroupByOutputType = {
    id: string
    requestId: string
    providerId: string
    price: number
    description: string
    estimatedDuration: string
    status: $Enums.QuotationStatus
    validUntil: Date | null
    createdAt: Date
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationGroupByOutputType[P]>
        }
      >
    >


  export type QuotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    providerId?: boolean
    price?: boolean
    description?: boolean
    estimatedDuration?: boolean
    status?: boolean
    validUntil?: boolean
    createdAt?: boolean
    request?: boolean | QuotationRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
    consultations?: boolean | Quotation$consultationsArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    providerId?: boolean
    price?: boolean
    description?: boolean
    estimatedDuration?: boolean
    status?: boolean
    validUntil?: boolean
    createdAt?: boolean
    request?: boolean | QuotationRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    providerId?: boolean
    price?: boolean
    description?: boolean
    estimatedDuration?: boolean
    status?: boolean
    validUntil?: boolean
    createdAt?: boolean
    request?: boolean | QuotationRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectScalar = {
    id?: boolean
    requestId?: boolean
    providerId?: boolean
    price?: boolean
    description?: boolean
    estimatedDuration?: boolean
    status?: boolean
    validUntil?: boolean
    createdAt?: boolean
  }

  export type QuotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "providerId" | "price" | "description" | "estimatedDuration" | "status" | "validUntil" | "createdAt", ExtArgs["result"]["quotation"]>
  export type QuotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | QuotationRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
    consultations?: boolean | Quotation$consultationsArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | QuotationRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuotationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | QuotationRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quotation"
    objects: {
      request: Prisma.$QuotationRequestPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs>
      consultations: Prisma.$ConsultationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      providerId: string
      price: number
      description: string
      estimatedDuration: string
      status: $Enums.QuotationStatus
      validUntil: Date | null
      createdAt: Date
    }, ExtArgs["result"]["quotation"]>
    composites: {}
  }

  type QuotationGetPayload<S extends boolean | null | undefined | QuotationDefaultArgs> = $Result.GetResult<Prisma.$QuotationPayload, S>

  type QuotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotationCountAggregateInputType | true
    }

  export interface QuotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quotation'], meta: { name: 'Quotation' } }
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationFindUniqueArgs>(args: SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quotation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationFindFirstArgs>(args?: SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     * 
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationFindManyArgs>(args?: SelectSubset<T, QuotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     * 
     */
    create<T extends QuotationCreateArgs>(args: SelectSubset<T, QuotationCreateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quotations.
     * @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationCreateManyArgs>(args?: SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotations and returns the data saved in the database.
     * @param {QuotationCreateManyAndReturnArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     * 
     */
    delete<T extends QuotationDeleteArgs>(args: SelectSubset<T, QuotationDeleteArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationUpdateArgs>(args: SelectSubset<T, QuotationUpdateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationDeleteManyArgs>(args?: SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationUpdateManyArgs>(args: SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations and returns the data updated in the database.
     * @param {QuotationUpdateManyAndReturnArgs} args - Arguments to update many Quotations.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuotationUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
     */
    upsert<T extends QuotationUpsertArgs>(args: SelectSubset<T, QuotationUpsertArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(
      args?: Subset<T, QuotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuotationAggregateArgs>(args: Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>

    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationGroupByArgs['orderBy'] }
        : { orderBy?: QuotationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quotation model
   */
  readonly fields: QuotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends QuotationRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationRequestDefaultArgs<ExtArgs>>): Prisma__QuotationRequestClient<$Result.GetResult<Prisma.$QuotationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultations<T extends Quotation$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, Quotation$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quotation model
   */
  interface QuotationFieldRefs {
    readonly id: FieldRef<"Quotation", 'String'>
    readonly requestId: FieldRef<"Quotation", 'String'>
    readonly providerId: FieldRef<"Quotation", 'String'>
    readonly price: FieldRef<"Quotation", 'Float'>
    readonly description: FieldRef<"Quotation", 'String'>
    readonly estimatedDuration: FieldRef<"Quotation", 'String'>
    readonly status: FieldRef<"Quotation", 'QuotationStatus'>
    readonly validUntil: FieldRef<"Quotation", 'DateTime'>
    readonly createdAt: FieldRef<"Quotation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quotation findUnique
   */
  export type QuotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findUniqueOrThrow
   */
  export type QuotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findFirst
   */
  export type QuotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findFirstOrThrow
   */
  export type QuotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findMany
   */
  export type QuotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotations to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation create
   */
  export type QuotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Quotation.
     */
    data: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
  }

  /**
   * Quotation createMany
   */
  export type QuotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation createManyAndReturn
   */
  export type QuotationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quotation update
   */
  export type QuotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Quotation.
     */
    data: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
    /**
     * Choose, which Quotation to update.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation updateMany
   */
  export type QuotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to update.
     */
    limit?: number
  }

  /**
   * Quotation updateManyAndReturn
   */
  export type QuotationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quotation upsert
   */
  export type QuotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: QuotationWhereUniqueInput
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
  }

  /**
   * Quotation delete
   */
  export type QuotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter which Quotation to delete.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation deleteMany
   */
  export type QuotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: QuotationWhereInput
    /**
     * Limit how many Quotations to delete.
     */
    limit?: number
  }

  /**
   * Quotation.consultations
   */
  export type Quotation$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Quotation without action
   */
  export type QuotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quotation
     */
    omit?: QuotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
  }


  /**
   * Model Consultation
   */

  export type AggregateConsultation = {
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  export type ConsultationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quotationId: string | null
    scheduledDate: Date | null
    status: $Enums.ConsultationStatus | null
    notes: string | null
    meetingType: string | null
    createdAt: Date | null
  }

  export type ConsultationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quotationId: string | null
    scheduledDate: Date | null
    status: $Enums.ConsultationStatus | null
    notes: string | null
    meetingType: string | null
    createdAt: Date | null
  }

  export type ConsultationCountAggregateOutputType = {
    id: number
    userId: number
    quotationId: number
    scheduledDate: number
    status: number
    notes: number
    meetingType: number
    createdAt: number
    _all: number
  }


  export type ConsultationMinAggregateInputType = {
    id?: true
    userId?: true
    quotationId?: true
    scheduledDate?: true
    status?: true
    notes?: true
    meetingType?: true
    createdAt?: true
  }

  export type ConsultationMaxAggregateInputType = {
    id?: true
    userId?: true
    quotationId?: true
    scheduledDate?: true
    status?: true
    notes?: true
    meetingType?: true
    createdAt?: true
  }

  export type ConsultationCountAggregateInputType = {
    id?: true
    userId?: true
    quotationId?: true
    scheduledDate?: true
    status?: true
    notes?: true
    meetingType?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultation to aggregate.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultations
    **/
    _count?: true | ConsultationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMaxAggregateInputType
  }

  export type GetConsultationAggregateType<T extends ConsultationAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultation[P]>
      : GetScalarType<T[P], AggregateConsultation[P]>
  }




  export type ConsultationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithAggregationInput | ConsultationOrderByWithAggregationInput[]
    by: ConsultationScalarFieldEnum[] | ConsultationScalarFieldEnum
    having?: ConsultationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationCountAggregateInputType | true
    _min?: ConsultationMinAggregateInputType
    _max?: ConsultationMaxAggregateInputType
  }

  export type ConsultationGroupByOutputType = {
    id: string
    userId: string
    quotationId: string
    scheduledDate: Date
    status: $Enums.ConsultationStatus
    notes: string | null
    meetingType: string | null
    createdAt: Date
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  type GetConsultationGroupByPayload<T extends ConsultationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quotationId?: boolean
    scheduledDate?: boolean
    status?: boolean
    notes?: boolean
    meetingType?: boolean
    createdAt?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quotationId?: boolean
    scheduledDate?: boolean
    status?: boolean
    notes?: boolean
    meetingType?: boolean
    createdAt?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quotationId?: boolean
    scheduledDate?: boolean
    status?: boolean
    notes?: boolean
    meetingType?: boolean
    createdAt?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectScalar = {
    id?: boolean
    userId?: boolean
    quotationId?: boolean
    scheduledDate?: boolean
    status?: boolean
    notes?: boolean
    meetingType?: boolean
    createdAt?: boolean
  }

  export type ConsultationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quotationId" | "scheduledDate" | "status" | "notes" | "meetingType" | "createdAt", ExtArgs["result"]["consultation"]>
  export type ConsultationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsultationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsultationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsultationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultation"
    objects: {
      quotation: Prisma.$QuotationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quotationId: string
      scheduledDate: Date
      status: $Enums.ConsultationStatus
      notes: string | null
      meetingType: string | null
      createdAt: Date
    }, ExtArgs["result"]["consultation"]>
    composites: {}
  }

  type ConsultationGetPayload<S extends boolean | null | undefined | ConsultationDefaultArgs> = $Result.GetResult<Prisma.$ConsultationPayload, S>

  type ConsultationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationCountAggregateInputType | true
    }

  export interface ConsultationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultation'], meta: { name: 'Consultation' } }
    /**
     * Find zero or one Consultation that matches the filter.
     * @param {ConsultationFindUniqueArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationFindUniqueArgs>(args: SelectSubset<T, ConsultationFindUniqueArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationFindUniqueOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationFindFirstArgs>(args?: SelectSubset<T, ConsultationFindFirstArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultation.findMany()
     * 
     * // Get first 10 Consultations
     * const consultations = await prisma.consultation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationWithIdOnly = await prisma.consultation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationFindManyArgs>(args?: SelectSubset<T, ConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultation.
     * @param {ConsultationCreateArgs} args - Arguments to create a Consultation.
     * @example
     * // Create one Consultation
     * const Consultation = await prisma.consultation.create({
     *   data: {
     *     // ... data to create a Consultation
     *   }
     * })
     * 
     */
    create<T extends ConsultationCreateArgs>(args: SelectSubset<T, ConsultationCreateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultations.
     * @param {ConsultationCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationCreateManyArgs>(args?: SelectSubset<T, ConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultations and returns the data saved in the database.
     * @param {ConsultationCreateManyAndReturnArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultation.
     * @param {ConsultationDeleteArgs} args - Arguments to delete one Consultation.
     * @example
     * // Delete one Consultation
     * const Consultation = await prisma.consultation.delete({
     *   where: {
     *     // ... filter to delete one Consultation
     *   }
     * })
     * 
     */
    delete<T extends ConsultationDeleteArgs>(args: SelectSubset<T, ConsultationDeleteArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultation.
     * @param {ConsultationUpdateArgs} args - Arguments to update one Consultation.
     * @example
     * // Update one Consultation
     * const consultation = await prisma.consultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationUpdateArgs>(args: SelectSubset<T, ConsultationUpdateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultations.
     * @param {ConsultationDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationDeleteManyArgs>(args?: SelectSubset<T, ConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationUpdateManyArgs>(args: SelectSubset<T, ConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations and returns the data updated in the database.
     * @param {ConsultationUpdateManyAndReturnArgs} args - Arguments to update many Consultations.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultation.
     * @param {ConsultationUpsertArgs} args - Arguments to update or create a Consultation.
     * @example
     * // Update or create a Consultation
     * const consultation = await prisma.consultation.upsert({
     *   create: {
     *     // ... data to create a Consultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultation we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationUpsertArgs>(args: SelectSubset<T, ConsultationUpsertArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultation.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCountArgs>(
      args?: Subset<T, ConsultationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationAggregateArgs>(args: Subset<T, ConsultationAggregateArgs>): Prisma.PrismaPromise<GetConsultationAggregateType<T>>

    /**
     * Group by Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultation model
   */
  readonly fields: ConsultationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotation<T extends QuotationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationDefaultArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultation model
   */
  interface ConsultationFieldRefs {
    readonly id: FieldRef<"Consultation", 'String'>
    readonly userId: FieldRef<"Consultation", 'String'>
    readonly quotationId: FieldRef<"Consultation", 'String'>
    readonly scheduledDate: FieldRef<"Consultation", 'DateTime'>
    readonly status: FieldRef<"Consultation", 'ConsultationStatus'>
    readonly notes: FieldRef<"Consultation", 'String'>
    readonly meetingType: FieldRef<"Consultation", 'String'>
    readonly createdAt: FieldRef<"Consultation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consultation findUnique
   */
  export type ConsultationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findUniqueOrThrow
   */
  export type ConsultationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findFirst
   */
  export type ConsultationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findFirstOrThrow
   */
  export type ConsultationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findMany
   */
  export type ConsultationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation create
   */
  export type ConsultationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultation.
     */
    data: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
  }

  /**
   * Consultation createMany
   */
  export type ConsultationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultation createManyAndReturn
   */
  export type ConsultationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultation update
   */
  export type ConsultationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultation.
     */
    data: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
    /**
     * Choose, which Consultation to update.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation updateMany
   */
  export type ConsultationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultation updateManyAndReturn
   */
  export type ConsultationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultation upsert
   */
  export type ConsultationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultation to update in case it exists.
     */
    where: ConsultationWhereUniqueInput
    /**
     * In case the Consultation found by the `where` argument doesn't exist, create a new Consultation with this data.
     */
    create: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
    /**
     * In case the Consultation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
  }

  /**
   * Consultation delete
   */
  export type ConsultationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter which Consultation to delete.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation deleteMany
   */
  export type ConsultationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number
  }

  /**
   * Consultation without action
   */
  export type ConsultationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    location: 'location',
    profileImage: 'profileImage',
    bio: 'bio',
    isServiceProvider: 'isServiceProvider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    description: 'description',
    basePrice: 'basePrice',
    providerId: 'providerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const QuotationRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    description: 'description',
    budget: 'budget',
    location: 'location',
    status: 'status',
    requestedAt: 'requestedAt',
    respondedAt: 'respondedAt'
  };

  export type QuotationRequestScalarFieldEnum = (typeof QuotationRequestScalarFieldEnum)[keyof typeof QuotationRequestScalarFieldEnum]


  export const QuotationScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    providerId: 'providerId',
    price: 'price',
    description: 'description',
    estimatedDuration: 'estimatedDuration',
    status: 'status',
    validUntil: 'validUntil',
    createdAt: 'createdAt'
  };

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const ConsultationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quotationId: 'quotationId',
    scheduledDate: 'scheduledDate',
    status: 'status',
    notes: 'notes',
    meetingType: 'meetingType',
    createdAt: 'createdAt'
  };

  export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'QuotationStatus'
   */
  export type EnumQuotationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuotationStatus'>
    


  /**
   * Reference to a field of type 'QuotationStatus[]'
   */
  export type ListEnumQuotationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuotationStatus[]'>
    


  /**
   * Reference to a field of type 'ConsultationStatus'
   */
  export type EnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus'>
    


  /**
   * Reference to a field of type 'ConsultationStatus[]'
   */
  export type ListEnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isServiceProvider?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quotationRequests?: QuotationRequestListRelationFilter
    quotations?: QuotationListRelationFilter
    consultations?: ConsultationListRelationFilter
    services?: ServiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isServiceProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quotationRequests?: QuotationRequestOrderByRelationAggregateInput
    quotations?: QuotationOrderByRelationAggregateInput
    consultations?: ConsultationOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isServiceProvider?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quotationRequests?: QuotationRequestListRelationFilter
    quotations?: QuotationListRelationFilter
    consultations?: ConsultationListRelationFilter
    services?: ServiceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isServiceProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    isServiceProvider?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    category?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    basePrice?: FloatFilter<"Service"> | number
    providerId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    quotationRequests?: QuotationRequestListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: UserOrderByWithRelationInput
    quotationRequests?: QuotationRequestOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    category?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    basePrice?: FloatFilter<"Service"> | number
    providerId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    quotationRequests?: QuotationRequestListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    category?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    basePrice?: FloatWithAggregatesFilter<"Service"> | number
    providerId?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type QuotationRequestWhereInput = {
    AND?: QuotationRequestWhereInput | QuotationRequestWhereInput[]
    OR?: QuotationRequestWhereInput[]
    NOT?: QuotationRequestWhereInput | QuotationRequestWhereInput[]
    id?: StringFilter<"QuotationRequest"> | string
    userId?: StringFilter<"QuotationRequest"> | string
    serviceId?: StringFilter<"QuotationRequest"> | string
    description?: StringFilter<"QuotationRequest"> | string
    budget?: FloatNullableFilter<"QuotationRequest"> | number | null
    location?: StringFilter<"QuotationRequest"> | string
    status?: EnumRequestStatusFilter<"QuotationRequest"> | $Enums.RequestStatus
    requestedAt?: DateTimeFilter<"QuotationRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"QuotationRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    quotations?: QuotationListRelationFilter
  }

  export type QuotationRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    budget?: SortOrderInput | SortOrder
    location?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    quotations?: QuotationOrderByRelationAggregateInput
  }

  export type QuotationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationRequestWhereInput | QuotationRequestWhereInput[]
    OR?: QuotationRequestWhereInput[]
    NOT?: QuotationRequestWhereInput | QuotationRequestWhereInput[]
    userId?: StringFilter<"QuotationRequest"> | string
    serviceId?: StringFilter<"QuotationRequest"> | string
    description?: StringFilter<"QuotationRequest"> | string
    budget?: FloatNullableFilter<"QuotationRequest"> | number | null
    location?: StringFilter<"QuotationRequest"> | string
    status?: EnumRequestStatusFilter<"QuotationRequest"> | $Enums.RequestStatus
    requestedAt?: DateTimeFilter<"QuotationRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"QuotationRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    quotations?: QuotationListRelationFilter
  }, "id">

  export type QuotationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    budget?: SortOrderInput | SortOrder
    location?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    _count?: QuotationRequestCountOrderByAggregateInput
    _avg?: QuotationRequestAvgOrderByAggregateInput
    _max?: QuotationRequestMaxOrderByAggregateInput
    _min?: QuotationRequestMinOrderByAggregateInput
    _sum?: QuotationRequestSumOrderByAggregateInput
  }

  export type QuotationRequestScalarWhereWithAggregatesInput = {
    AND?: QuotationRequestScalarWhereWithAggregatesInput | QuotationRequestScalarWhereWithAggregatesInput[]
    OR?: QuotationRequestScalarWhereWithAggregatesInput[]
    NOT?: QuotationRequestScalarWhereWithAggregatesInput | QuotationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuotationRequest"> | string
    userId?: StringWithAggregatesFilter<"QuotationRequest"> | string
    serviceId?: StringWithAggregatesFilter<"QuotationRequest"> | string
    description?: StringWithAggregatesFilter<"QuotationRequest"> | string
    budget?: FloatNullableWithAggregatesFilter<"QuotationRequest"> | number | null
    location?: StringWithAggregatesFilter<"QuotationRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"QuotationRequest"> | $Enums.RequestStatus
    requestedAt?: DateTimeWithAggregatesFilter<"QuotationRequest"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"QuotationRequest"> | Date | string | null
  }

  export type QuotationWhereInput = {
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    id?: StringFilter<"Quotation"> | string
    requestId?: StringFilter<"Quotation"> | string
    providerId?: StringFilter<"Quotation"> | string
    price?: FloatFilter<"Quotation"> | number
    description?: StringFilter<"Quotation"> | string
    estimatedDuration?: StringFilter<"Quotation"> | string
    status?: EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus
    validUntil?: DateTimeNullableFilter<"Quotation"> | Date | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
    request?: XOR<QuotationRequestScalarRelationFilter, QuotationRequestWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultations?: ConsultationListRelationFilter
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    request?: QuotationRequestOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
    consultations?: ConsultationOrderByRelationAggregateInput
  }

  export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    requestId?: StringFilter<"Quotation"> | string
    providerId?: StringFilter<"Quotation"> | string
    price?: FloatFilter<"Quotation"> | number
    description?: StringFilter<"Quotation"> | string
    estimatedDuration?: StringFilter<"Quotation"> | string
    status?: EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus
    validUntil?: DateTimeNullableFilter<"Quotation"> | Date | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
    request?: XOR<QuotationRequestScalarRelationFilter, QuotationRequestWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultations?: ConsultationListRelationFilter
  }, "id">

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuotationCountOrderByAggregateInput
    _avg?: QuotationAvgOrderByAggregateInput
    _max?: QuotationMaxOrderByAggregateInput
    _min?: QuotationMinOrderByAggregateInput
    _sum?: QuotationSumOrderByAggregateInput
  }

  export type QuotationScalarWhereWithAggregatesInput = {
    AND?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    OR?: QuotationScalarWhereWithAggregatesInput[]
    NOT?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quotation"> | string
    requestId?: StringWithAggregatesFilter<"Quotation"> | string
    providerId?: StringWithAggregatesFilter<"Quotation"> | string
    price?: FloatWithAggregatesFilter<"Quotation"> | number
    description?: StringWithAggregatesFilter<"Quotation"> | string
    estimatedDuration?: StringWithAggregatesFilter<"Quotation"> | string
    status?: EnumQuotationStatusWithAggregatesFilter<"Quotation"> | $Enums.QuotationStatus
    validUntil?: DateTimeNullableWithAggregatesFilter<"Quotation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quotation"> | Date | string
  }

  export type ConsultationWhereInput = {
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    id?: StringFilter<"Consultation"> | string
    userId?: StringFilter<"Consultation"> | string
    quotationId?: StringFilter<"Consultation"> | string
    scheduledDate?: DateTimeFilter<"Consultation"> | Date | string
    status?: EnumConsultationStatusFilter<"Consultation"> | $Enums.ConsultationStatus
    notes?: StringNullableFilter<"Consultation"> | string | null
    meetingType?: StringNullableFilter<"Consultation"> | string | null
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    quotation?: XOR<QuotationScalarRelationFilter, QuotationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConsultationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quotationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    meetingType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    quotation?: QuotationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    userId?: StringFilter<"Consultation"> | string
    quotationId?: StringFilter<"Consultation"> | string
    scheduledDate?: DateTimeFilter<"Consultation"> | Date | string
    status?: EnumConsultationStatusFilter<"Consultation"> | $Enums.ConsultationStatus
    notes?: StringNullableFilter<"Consultation"> | string | null
    meetingType?: StringNullableFilter<"Consultation"> | string | null
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    quotation?: XOR<QuotationScalarRelationFilter, QuotationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConsultationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quotationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    meetingType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConsultationCountOrderByAggregateInput
    _max?: ConsultationMaxOrderByAggregateInput
    _min?: ConsultationMinOrderByAggregateInput
  }

  export type ConsultationScalarWhereWithAggregatesInput = {
    AND?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    OR?: ConsultationScalarWhereWithAggregatesInput[]
    NOT?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultation"> | string
    userId?: StringWithAggregatesFilter<"Consultation"> | string
    quotationId?: StringWithAggregatesFilter<"Consultation"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    status?: EnumConsultationStatusWithAggregatesFilter<"Consultation"> | $Enums.ConsultationStatus
    notes?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    meetingType?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestCreateNestedManyWithoutUserInput
    quotations?: QuotationCreateNestedManyWithoutProviderInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    services?: ServiceCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestUncheckedCreateNestedManyWithoutUserInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutProviderInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUpdateManyWithoutUserNestedInput
    quotations?: QuotationUpdateManyWithoutProviderNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUncheckedUpdateManyWithoutUserNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutProviderNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: UserCreateNestedOneWithoutServicesInput
    quotationRequests?: QuotationRequestCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutServicesNestedInput
    quotationRequests?: QuotationRequestUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationRequestCreateInput = {
    id?: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQuotationRequestsInput
    service: ServiceCreateNestedOneWithoutQuotationRequestsInput
    quotations?: QuotationCreateNestedManyWithoutRequestInput
  }

  export type QuotationRequestUncheckedCreateInput = {
    id?: string
    userId: string
    serviceId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    quotations?: QuotationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type QuotationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQuotationRequestsNestedInput
    service?: ServiceUpdateOneRequiredWithoutQuotationRequestsNestedInput
    quotations?: QuotationUpdateManyWithoutRequestNestedInput
  }

  export type QuotationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotations?: QuotationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type QuotationRequestCreateManyInput = {
    id?: string
    userId: string
    serviceId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type QuotationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotationCreateInput = {
    id?: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    request: QuotationRequestCreateNestedOneWithoutQuotationsInput
    provider: UserCreateNestedOneWithoutQuotationsInput
    consultations?: ConsultationCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateInput = {
    id?: string
    requestId: string
    providerId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    consultations?: ConsultationUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: QuotationRequestUpdateOneRequiredWithoutQuotationsNestedInput
    provider?: UserUpdateOneRequiredWithoutQuotationsNestedInput
    consultations?: ConsultationUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationCreateManyInput = {
    id?: string
    requestId: string
    providerId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type QuotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateInput = {
    id?: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
    quotation: QuotationCreateNestedOneWithoutConsultationsInput
    user: UserCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateInput = {
    id?: string
    userId: string
    quotationId: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
  }

  export type ConsultationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotation?: QuotationUpdateOneRequiredWithoutConsultationsNestedInput
    user?: UserUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateManyInput = {
    id?: string
    userId: string
    quotationId: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
  }

  export type ConsultationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuotationRequestListRelationFilter = {
    every?: QuotationRequestWhereInput
    some?: QuotationRequestWhereInput
    none?: QuotationRequestWhereInput
  }

  export type QuotationListRelationFilter = {
    every?: QuotationWhereInput
    some?: QuotationWhereInput
    none?: QuotationWhereInput
  }

  export type ConsultationListRelationFilter = {
    every?: ConsultationWhereInput
    some?: ConsultationWhereInput
    none?: ConsultationWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuotationRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    isServiceProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    isServiceProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    isServiceProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type QuotationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    location?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type QuotationRequestAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type QuotationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    location?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type QuotationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    location?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type QuotationRequestSumOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumQuotationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusFilter<$PrismaModel> | $Enums.QuotationStatus
  }

  export type QuotationRequestScalarRelationFilter = {
    is?: QuotationRequestWhereInput
    isNot?: QuotationRequestWhereInput
  }

  export type QuotationCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type QuotationMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type QuotationSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumQuotationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuotationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuotationStatusFilter<$PrismaModel>
    _max?: NestedEnumQuotationStatusFilter<$PrismaModel>
  }

  export type EnumConsultationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusFilter<$PrismaModel> | $Enums.ConsultationStatus
  }

  export type QuotationScalarRelationFilter = {
    is?: QuotationWhereInput
    isNot?: QuotationWhereInput
  }

  export type ConsultationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quotationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    meetingType?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quotationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    meetingType?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quotationId?: SortOrder
    scheduledDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    meetingType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumConsultationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultationStatusFilter<$PrismaModel>
  }

  export type QuotationRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<QuotationRequestCreateWithoutUserInput, QuotationRequestUncheckedCreateWithoutUserInput> | QuotationRequestCreateWithoutUserInput[] | QuotationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutUserInput | QuotationRequestCreateOrConnectWithoutUserInput[]
    createMany?: QuotationRequestCreateManyUserInputEnvelope
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
  }

  export type QuotationCreateNestedManyWithoutProviderInput = {
    create?: XOR<QuotationCreateWithoutProviderInput, QuotationUncheckedCreateWithoutProviderInput> | QuotationCreateWithoutProviderInput[] | QuotationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutProviderInput | QuotationCreateOrConnectWithoutProviderInput[]
    createMany?: QuotationCreateManyProviderInputEnvelope
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
  }

  export type ConsultationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type QuotationRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuotationRequestCreateWithoutUserInput, QuotationRequestUncheckedCreateWithoutUserInput> | QuotationRequestCreateWithoutUserInput[] | QuotationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutUserInput | QuotationRequestCreateOrConnectWithoutUserInput[]
    createMany?: QuotationRequestCreateManyUserInputEnvelope
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
  }

  export type QuotationUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<QuotationCreateWithoutProviderInput, QuotationUncheckedCreateWithoutProviderInput> | QuotationCreateWithoutProviderInput[] | QuotationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutProviderInput | QuotationCreateOrConnectWithoutProviderInput[]
    createMany?: QuotationCreateManyProviderInputEnvelope
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuotationRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuotationRequestCreateWithoutUserInput, QuotationRequestUncheckedCreateWithoutUserInput> | QuotationRequestCreateWithoutUserInput[] | QuotationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutUserInput | QuotationRequestCreateOrConnectWithoutUserInput[]
    upsert?: QuotationRequestUpsertWithWhereUniqueWithoutUserInput | QuotationRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuotationRequestCreateManyUserInputEnvelope
    set?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    disconnect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    delete?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    update?: QuotationRequestUpdateWithWhereUniqueWithoutUserInput | QuotationRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuotationRequestUpdateManyWithWhereWithoutUserInput | QuotationRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuotationRequestScalarWhereInput | QuotationRequestScalarWhereInput[]
  }

  export type QuotationUpdateManyWithoutProviderNestedInput = {
    create?: XOR<QuotationCreateWithoutProviderInput, QuotationUncheckedCreateWithoutProviderInput> | QuotationCreateWithoutProviderInput[] | QuotationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutProviderInput | QuotationCreateOrConnectWithoutProviderInput[]
    upsert?: QuotationUpsertWithWhereUniqueWithoutProviderInput | QuotationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: QuotationCreateManyProviderInputEnvelope
    set?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    disconnect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    delete?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    update?: QuotationUpdateWithWhereUniqueWithoutProviderInput | QuotationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: QuotationUpdateManyWithWhereWithoutProviderInput | QuotationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
  }

  export type ConsultationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutUserInput | ConsultationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutUserInput | ConsultationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutUserInput | ConsultationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProviderInput | ServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProviderInput | ServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProviderInput | ServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type QuotationRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuotationRequestCreateWithoutUserInput, QuotationRequestUncheckedCreateWithoutUserInput> | QuotationRequestCreateWithoutUserInput[] | QuotationRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutUserInput | QuotationRequestCreateOrConnectWithoutUserInput[]
    upsert?: QuotationRequestUpsertWithWhereUniqueWithoutUserInput | QuotationRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuotationRequestCreateManyUserInputEnvelope
    set?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    disconnect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    delete?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    update?: QuotationRequestUpdateWithWhereUniqueWithoutUserInput | QuotationRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuotationRequestUpdateManyWithWhereWithoutUserInput | QuotationRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuotationRequestScalarWhereInput | QuotationRequestScalarWhereInput[]
  }

  export type QuotationUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<QuotationCreateWithoutProviderInput, QuotationUncheckedCreateWithoutProviderInput> | QuotationCreateWithoutProviderInput[] | QuotationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutProviderInput | QuotationCreateOrConnectWithoutProviderInput[]
    upsert?: QuotationUpsertWithWhereUniqueWithoutProviderInput | QuotationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: QuotationCreateManyProviderInputEnvelope
    set?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    disconnect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    delete?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    update?: QuotationUpdateWithWhereUniqueWithoutProviderInput | QuotationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: QuotationUpdateManyWithWhereWithoutProviderInput | QuotationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutUserInput | ConsultationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutUserInput | ConsultationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutUserInput | ConsultationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProviderInput | ServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProviderInput | ServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProviderInput | ServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type QuotationRequestCreateNestedManyWithoutServiceInput = {
    create?: XOR<QuotationRequestCreateWithoutServiceInput, QuotationRequestUncheckedCreateWithoutServiceInput> | QuotationRequestCreateWithoutServiceInput[] | QuotationRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutServiceInput | QuotationRequestCreateOrConnectWithoutServiceInput[]
    createMany?: QuotationRequestCreateManyServiceInputEnvelope
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
  }

  export type QuotationRequestUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<QuotationRequestCreateWithoutServiceInput, QuotationRequestUncheckedCreateWithoutServiceInput> | QuotationRequestCreateWithoutServiceInput[] | QuotationRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutServiceInput | QuotationRequestCreateOrConnectWithoutServiceInput[]
    createMany?: QuotationRequestCreateManyServiceInputEnvelope
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type QuotationRequestUpdateManyWithoutServiceNestedInput = {
    create?: XOR<QuotationRequestCreateWithoutServiceInput, QuotationRequestUncheckedCreateWithoutServiceInput> | QuotationRequestCreateWithoutServiceInput[] | QuotationRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutServiceInput | QuotationRequestCreateOrConnectWithoutServiceInput[]
    upsert?: QuotationRequestUpsertWithWhereUniqueWithoutServiceInput | QuotationRequestUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: QuotationRequestCreateManyServiceInputEnvelope
    set?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    disconnect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    delete?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    update?: QuotationRequestUpdateWithWhereUniqueWithoutServiceInput | QuotationRequestUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: QuotationRequestUpdateManyWithWhereWithoutServiceInput | QuotationRequestUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: QuotationRequestScalarWhereInput | QuotationRequestScalarWhereInput[]
  }

  export type QuotationRequestUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<QuotationRequestCreateWithoutServiceInput, QuotationRequestUncheckedCreateWithoutServiceInput> | QuotationRequestCreateWithoutServiceInput[] | QuotationRequestUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutServiceInput | QuotationRequestCreateOrConnectWithoutServiceInput[]
    upsert?: QuotationRequestUpsertWithWhereUniqueWithoutServiceInput | QuotationRequestUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: QuotationRequestCreateManyServiceInputEnvelope
    set?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    disconnect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    delete?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    connect?: QuotationRequestWhereUniqueInput | QuotationRequestWhereUniqueInput[]
    update?: QuotationRequestUpdateWithWhereUniqueWithoutServiceInput | QuotationRequestUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: QuotationRequestUpdateManyWithWhereWithoutServiceInput | QuotationRequestUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: QuotationRequestScalarWhereInput | QuotationRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuotationRequestsInput = {
    create?: XOR<UserCreateWithoutQuotationRequestsInput, UserUncheckedCreateWithoutQuotationRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotationRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutQuotationRequestsInput = {
    create?: XOR<ServiceCreateWithoutQuotationRequestsInput, ServiceUncheckedCreateWithoutQuotationRequestsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutQuotationRequestsInput
    connect?: ServiceWhereUniqueInput
  }

  export type QuotationCreateNestedManyWithoutRequestInput = {
    create?: XOR<QuotationCreateWithoutRequestInput, QuotationUncheckedCreateWithoutRequestInput> | QuotationCreateWithoutRequestInput[] | QuotationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutRequestInput | QuotationCreateOrConnectWithoutRequestInput[]
    createMany?: QuotationCreateManyRequestInputEnvelope
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
  }

  export type QuotationUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<QuotationCreateWithoutRequestInput, QuotationUncheckedCreateWithoutRequestInput> | QuotationCreateWithoutRequestInput[] | QuotationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutRequestInput | QuotationCreateOrConnectWithoutRequestInput[]
    createMany?: QuotationCreateManyRequestInputEnvelope
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutQuotationRequestsNestedInput = {
    create?: XOR<UserCreateWithoutQuotationRequestsInput, UserUncheckedCreateWithoutQuotationRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotationRequestsInput
    upsert?: UserUpsertWithoutQuotationRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuotationRequestsInput, UserUpdateWithoutQuotationRequestsInput>, UserUncheckedUpdateWithoutQuotationRequestsInput>
  }

  export type ServiceUpdateOneRequiredWithoutQuotationRequestsNestedInput = {
    create?: XOR<ServiceCreateWithoutQuotationRequestsInput, ServiceUncheckedCreateWithoutQuotationRequestsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutQuotationRequestsInput
    upsert?: ServiceUpsertWithoutQuotationRequestsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutQuotationRequestsInput, ServiceUpdateWithoutQuotationRequestsInput>, ServiceUncheckedUpdateWithoutQuotationRequestsInput>
  }

  export type QuotationUpdateManyWithoutRequestNestedInput = {
    create?: XOR<QuotationCreateWithoutRequestInput, QuotationUncheckedCreateWithoutRequestInput> | QuotationCreateWithoutRequestInput[] | QuotationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutRequestInput | QuotationCreateOrConnectWithoutRequestInput[]
    upsert?: QuotationUpsertWithWhereUniqueWithoutRequestInput | QuotationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: QuotationCreateManyRequestInputEnvelope
    set?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    disconnect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    delete?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    update?: QuotationUpdateWithWhereUniqueWithoutRequestInput | QuotationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: QuotationUpdateManyWithWhereWithoutRequestInput | QuotationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
  }

  export type QuotationUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<QuotationCreateWithoutRequestInput, QuotationUncheckedCreateWithoutRequestInput> | QuotationCreateWithoutRequestInput[] | QuotationUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: QuotationCreateOrConnectWithoutRequestInput | QuotationCreateOrConnectWithoutRequestInput[]
    upsert?: QuotationUpsertWithWhereUniqueWithoutRequestInput | QuotationUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: QuotationCreateManyRequestInputEnvelope
    set?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    disconnect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    delete?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    connect?: QuotationWhereUniqueInput | QuotationWhereUniqueInput[]
    update?: QuotationUpdateWithWhereUniqueWithoutRequestInput | QuotationUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: QuotationUpdateManyWithWhereWithoutRequestInput | QuotationUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
  }

  export type QuotationRequestCreateNestedOneWithoutQuotationsInput = {
    create?: XOR<QuotationRequestCreateWithoutQuotationsInput, QuotationRequestUncheckedCreateWithoutQuotationsInput>
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutQuotationsInput
    connect?: QuotationRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuotationsInput = {
    create?: XOR<UserCreateWithoutQuotationsInput, UserUncheckedCreateWithoutQuotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotationsInput
    connect?: UserWhereUniqueInput
  }

  export type ConsultationCreateNestedManyWithoutQuotationInput = {
    create?: XOR<ConsultationCreateWithoutQuotationInput, ConsultationUncheckedCreateWithoutQuotationInput> | ConsultationCreateWithoutQuotationInput[] | ConsultationUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutQuotationInput | ConsultationCreateOrConnectWithoutQuotationInput[]
    createMany?: ConsultationCreateManyQuotationInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutQuotationInput = {
    create?: XOR<ConsultationCreateWithoutQuotationInput, ConsultationUncheckedCreateWithoutQuotationInput> | ConsultationCreateWithoutQuotationInput[] | ConsultationUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutQuotationInput | ConsultationCreateOrConnectWithoutQuotationInput[]
    createMany?: ConsultationCreateManyQuotationInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type EnumQuotationStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuotationStatus
  }

  export type QuotationRequestUpdateOneRequiredWithoutQuotationsNestedInput = {
    create?: XOR<QuotationRequestCreateWithoutQuotationsInput, QuotationRequestUncheckedCreateWithoutQuotationsInput>
    connectOrCreate?: QuotationRequestCreateOrConnectWithoutQuotationsInput
    upsert?: QuotationRequestUpsertWithoutQuotationsInput
    connect?: QuotationRequestWhereUniqueInput
    update?: XOR<XOR<QuotationRequestUpdateToOneWithWhereWithoutQuotationsInput, QuotationRequestUpdateWithoutQuotationsInput>, QuotationRequestUncheckedUpdateWithoutQuotationsInput>
  }

  export type UserUpdateOneRequiredWithoutQuotationsNestedInput = {
    create?: XOR<UserCreateWithoutQuotationsInput, UserUncheckedCreateWithoutQuotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotationsInput
    upsert?: UserUpsertWithoutQuotationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuotationsInput, UserUpdateWithoutQuotationsInput>, UserUncheckedUpdateWithoutQuotationsInput>
  }

  export type ConsultationUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<ConsultationCreateWithoutQuotationInput, ConsultationUncheckedCreateWithoutQuotationInput> | ConsultationCreateWithoutQuotationInput[] | ConsultationUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutQuotationInput | ConsultationCreateOrConnectWithoutQuotationInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutQuotationInput | ConsultationUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: ConsultationCreateManyQuotationInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutQuotationInput | ConsultationUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutQuotationInput | ConsultationUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<ConsultationCreateWithoutQuotationInput, ConsultationUncheckedCreateWithoutQuotationInput> | ConsultationCreateWithoutQuotationInput[] | ConsultationUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutQuotationInput | ConsultationCreateOrConnectWithoutQuotationInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutQuotationInput | ConsultationUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: ConsultationCreateManyQuotationInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutQuotationInput | ConsultationUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutQuotationInput | ConsultationUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type QuotationCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<QuotationCreateWithoutConsultationsInput, QuotationUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutConsultationsInput
    connect?: QuotationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConsultationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConsultationStatus
  }

  export type QuotationUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<QuotationCreateWithoutConsultationsInput, QuotationUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutConsultationsInput
    upsert?: QuotationUpsertWithoutConsultationsInput
    connect?: QuotationWhereUniqueInput
    update?: XOR<XOR<QuotationUpdateToOneWithWhereWithoutConsultationsInput, QuotationUpdateWithoutConsultationsInput>, QuotationUncheckedUpdateWithoutConsultationsInput>
  }

  export type UserUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationsInput
    upsert?: UserUpsertWithoutConsultationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultationsInput, UserUpdateWithoutConsultationsInput>, UserUncheckedUpdateWithoutConsultationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuotationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusFilter<$PrismaModel> | $Enums.QuotationStatus
  }

  export type NestedEnumQuotationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuotationStatus | EnumQuotationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuotationStatus[] | ListEnumQuotationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuotationStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuotationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuotationStatusFilter<$PrismaModel>
    _max?: NestedEnumQuotationStatusFilter<$PrismaModel>
  }

  export type NestedEnumConsultationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusFilter<$PrismaModel> | $Enums.ConsultationStatus
  }

  export type NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultationStatusFilter<$PrismaModel>
  }

  export type QuotationRequestCreateWithoutUserInput = {
    id?: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutQuotationRequestsInput
    quotations?: QuotationCreateNestedManyWithoutRequestInput
  }

  export type QuotationRequestUncheckedCreateWithoutUserInput = {
    id?: string
    serviceId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    quotations?: QuotationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type QuotationRequestCreateOrConnectWithoutUserInput = {
    where: QuotationRequestWhereUniqueInput
    create: XOR<QuotationRequestCreateWithoutUserInput, QuotationRequestUncheckedCreateWithoutUserInput>
  }

  export type QuotationRequestCreateManyUserInputEnvelope = {
    data: QuotationRequestCreateManyUserInput | QuotationRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuotationCreateWithoutProviderInput = {
    id?: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    request: QuotationRequestCreateNestedOneWithoutQuotationsInput
    consultations?: ConsultationCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateWithoutProviderInput = {
    id?: string
    requestId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    consultations?: ConsultationUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationCreateOrConnectWithoutProviderInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutProviderInput, QuotationUncheckedCreateWithoutProviderInput>
  }

  export type QuotationCreateManyProviderInputEnvelope = {
    data: QuotationCreateManyProviderInput | QuotationCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationCreateWithoutUserInput = {
    id?: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
    quotation: QuotationCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateWithoutUserInput = {
    id?: string
    quotationId: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
  }

  export type ConsultationCreateOrConnectWithoutUserInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput>
  }

  export type ConsultationCreateManyUserInputEnvelope = {
    data: ConsultationCreateManyUserInput | ConsultationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutProviderInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput>
  }

  export type ServiceCreateManyProviderInputEnvelope = {
    data: ServiceCreateManyProviderInput | ServiceCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type QuotationRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: QuotationRequestWhereUniqueInput
    update: XOR<QuotationRequestUpdateWithoutUserInput, QuotationRequestUncheckedUpdateWithoutUserInput>
    create: XOR<QuotationRequestCreateWithoutUserInput, QuotationRequestUncheckedCreateWithoutUserInput>
  }

  export type QuotationRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: QuotationRequestWhereUniqueInput
    data: XOR<QuotationRequestUpdateWithoutUserInput, QuotationRequestUncheckedUpdateWithoutUserInput>
  }

  export type QuotationRequestUpdateManyWithWhereWithoutUserInput = {
    where: QuotationRequestScalarWhereInput
    data: XOR<QuotationRequestUpdateManyMutationInput, QuotationRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type QuotationRequestScalarWhereInput = {
    AND?: QuotationRequestScalarWhereInput | QuotationRequestScalarWhereInput[]
    OR?: QuotationRequestScalarWhereInput[]
    NOT?: QuotationRequestScalarWhereInput | QuotationRequestScalarWhereInput[]
    id?: StringFilter<"QuotationRequest"> | string
    userId?: StringFilter<"QuotationRequest"> | string
    serviceId?: StringFilter<"QuotationRequest"> | string
    description?: StringFilter<"QuotationRequest"> | string
    budget?: FloatNullableFilter<"QuotationRequest"> | number | null
    location?: StringFilter<"QuotationRequest"> | string
    status?: EnumRequestStatusFilter<"QuotationRequest"> | $Enums.RequestStatus
    requestedAt?: DateTimeFilter<"QuotationRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"QuotationRequest"> | Date | string | null
  }

  export type QuotationUpsertWithWhereUniqueWithoutProviderInput = {
    where: QuotationWhereUniqueInput
    update: XOR<QuotationUpdateWithoutProviderInput, QuotationUncheckedUpdateWithoutProviderInput>
    create: XOR<QuotationCreateWithoutProviderInput, QuotationUncheckedCreateWithoutProviderInput>
  }

  export type QuotationUpdateWithWhereUniqueWithoutProviderInput = {
    where: QuotationWhereUniqueInput
    data: XOR<QuotationUpdateWithoutProviderInput, QuotationUncheckedUpdateWithoutProviderInput>
  }

  export type QuotationUpdateManyWithWhereWithoutProviderInput = {
    where: QuotationScalarWhereInput
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyWithoutProviderInput>
  }

  export type QuotationScalarWhereInput = {
    AND?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
    OR?: QuotationScalarWhereInput[]
    NOT?: QuotationScalarWhereInput | QuotationScalarWhereInput[]
    id?: StringFilter<"Quotation"> | string
    requestId?: StringFilter<"Quotation"> | string
    providerId?: StringFilter<"Quotation"> | string
    price?: FloatFilter<"Quotation"> | number
    description?: StringFilter<"Quotation"> | string
    estimatedDuration?: StringFilter<"Quotation"> | string
    status?: EnumQuotationStatusFilter<"Quotation"> | $Enums.QuotationStatus
    validUntil?: DateTimeNullableFilter<"Quotation"> | Date | string | null
    createdAt?: DateTimeFilter<"Quotation"> | Date | string
  }

  export type ConsultationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutUserInput, ConsultationUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutUserInput, ConsultationUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutUserInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsultationScalarWhereInput = {
    AND?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    OR?: ConsultationScalarWhereInput[]
    NOT?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    id?: StringFilter<"Consultation"> | string
    userId?: StringFilter<"Consultation"> | string
    quotationId?: StringFilter<"Consultation"> | string
    scheduledDate?: DateTimeFilter<"Consultation"> | Date | string
    status?: EnumConsultationStatusFilter<"Consultation"> | $Enums.ConsultationStatus
    notes?: StringNullableFilter<"Consultation"> | string | null
    meetingType?: StringNullableFilter<"Consultation"> | string | null
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutProviderInput, ServiceUncheckedUpdateWithoutProviderInput>
    create: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutProviderInput, ServiceUncheckedUpdateWithoutProviderInput>
  }

  export type ServiceUpdateManyWithWhereWithoutProviderInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    category?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    basePrice?: FloatFilter<"Service"> | number
    providerId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type UserCreateWithoutServicesInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestCreateNestedManyWithoutUserInput
    quotations?: QuotationCreateNestedManyWithoutProviderInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestUncheckedCreateNestedManyWithoutUserInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutProviderInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type QuotationRequestCreateWithoutServiceInput = {
    id?: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQuotationRequestsInput
    quotations?: QuotationCreateNestedManyWithoutRequestInput
  }

  export type QuotationRequestUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    quotations?: QuotationUncheckedCreateNestedManyWithoutRequestInput
  }

  export type QuotationRequestCreateOrConnectWithoutServiceInput = {
    where: QuotationRequestWhereUniqueInput
    create: XOR<QuotationRequestCreateWithoutServiceInput, QuotationRequestUncheckedCreateWithoutServiceInput>
  }

  export type QuotationRequestCreateManyServiceInputEnvelope = {
    data: QuotationRequestCreateManyServiceInput | QuotationRequestCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUpdateManyWithoutUserNestedInput
    quotations?: QuotationUpdateManyWithoutProviderNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUncheckedUpdateManyWithoutUserNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutProviderNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuotationRequestUpsertWithWhereUniqueWithoutServiceInput = {
    where: QuotationRequestWhereUniqueInput
    update: XOR<QuotationRequestUpdateWithoutServiceInput, QuotationRequestUncheckedUpdateWithoutServiceInput>
    create: XOR<QuotationRequestCreateWithoutServiceInput, QuotationRequestUncheckedCreateWithoutServiceInput>
  }

  export type QuotationRequestUpdateWithWhereUniqueWithoutServiceInput = {
    where: QuotationRequestWhereUniqueInput
    data: XOR<QuotationRequestUpdateWithoutServiceInput, QuotationRequestUncheckedUpdateWithoutServiceInput>
  }

  export type QuotationRequestUpdateManyWithWhereWithoutServiceInput = {
    where: QuotationRequestScalarWhereInput
    data: XOR<QuotationRequestUpdateManyMutationInput, QuotationRequestUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutQuotationRequestsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotations?: QuotationCreateNestedManyWithoutProviderInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    services?: ServiceCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateWithoutQuotationRequestsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotations?: QuotationUncheckedCreateNestedManyWithoutProviderInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
  }

  export type UserCreateOrConnectWithoutQuotationRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuotationRequestsInput, UserUncheckedCreateWithoutQuotationRequestsInput>
  }

  export type ServiceCreateWithoutQuotationRequestsInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: UserCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutQuotationRequestsInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutQuotationRequestsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutQuotationRequestsInput, ServiceUncheckedCreateWithoutQuotationRequestsInput>
  }

  export type QuotationCreateWithoutRequestInput = {
    id?: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    provider: UserCreateNestedOneWithoutQuotationsInput
    consultations?: ConsultationCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateWithoutRequestInput = {
    id?: string
    providerId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    consultations?: ConsultationUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationCreateOrConnectWithoutRequestInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutRequestInput, QuotationUncheckedCreateWithoutRequestInput>
  }

  export type QuotationCreateManyRequestInputEnvelope = {
    data: QuotationCreateManyRequestInput | QuotationCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuotationRequestsInput = {
    update: XOR<UserUpdateWithoutQuotationRequestsInput, UserUncheckedUpdateWithoutQuotationRequestsInput>
    create: XOR<UserCreateWithoutQuotationRequestsInput, UserUncheckedCreateWithoutQuotationRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuotationRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuotationRequestsInput, UserUncheckedUpdateWithoutQuotationRequestsInput>
  }

  export type UserUpdateWithoutQuotationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotations?: QuotationUpdateManyWithoutProviderNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutQuotationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotations?: QuotationUncheckedUpdateManyWithoutProviderNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceUpsertWithoutQuotationRequestsInput = {
    update: XOR<ServiceUpdateWithoutQuotationRequestsInput, ServiceUncheckedUpdateWithoutQuotationRequestsInput>
    create: XOR<ServiceCreateWithoutQuotationRequestsInput, ServiceUncheckedCreateWithoutQuotationRequestsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutQuotationRequestsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutQuotationRequestsInput, ServiceUncheckedUpdateWithoutQuotationRequestsInput>
  }

  export type ServiceUpdateWithoutQuotationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutQuotationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationUpsertWithWhereUniqueWithoutRequestInput = {
    where: QuotationWhereUniqueInput
    update: XOR<QuotationUpdateWithoutRequestInput, QuotationUncheckedUpdateWithoutRequestInput>
    create: XOR<QuotationCreateWithoutRequestInput, QuotationUncheckedCreateWithoutRequestInput>
  }

  export type QuotationUpdateWithWhereUniqueWithoutRequestInput = {
    where: QuotationWhereUniqueInput
    data: XOR<QuotationUpdateWithoutRequestInput, QuotationUncheckedUpdateWithoutRequestInput>
  }

  export type QuotationUpdateManyWithWhereWithoutRequestInput = {
    where: QuotationScalarWhereInput
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyWithoutRequestInput>
  }

  export type QuotationRequestCreateWithoutQuotationsInput = {
    id?: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQuotationRequestsInput
    service: ServiceCreateNestedOneWithoutQuotationRequestsInput
  }

  export type QuotationRequestUncheckedCreateWithoutQuotationsInput = {
    id?: string
    userId: string
    serviceId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type QuotationRequestCreateOrConnectWithoutQuotationsInput = {
    where: QuotationRequestWhereUniqueInput
    create: XOR<QuotationRequestCreateWithoutQuotationsInput, QuotationRequestUncheckedCreateWithoutQuotationsInput>
  }

  export type UserCreateWithoutQuotationsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestCreateNestedManyWithoutUserInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    services?: ServiceCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateWithoutQuotationsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestUncheckedCreateNestedManyWithoutUserInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
  }

  export type UserCreateOrConnectWithoutQuotationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuotationsInput, UserUncheckedCreateWithoutQuotationsInput>
  }

  export type ConsultationCreateWithoutQuotationInput = {
    id?: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateWithoutQuotationInput = {
    id?: string
    userId: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
  }

  export type ConsultationCreateOrConnectWithoutQuotationInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutQuotationInput, ConsultationUncheckedCreateWithoutQuotationInput>
  }

  export type ConsultationCreateManyQuotationInputEnvelope = {
    data: ConsultationCreateManyQuotationInput | ConsultationCreateManyQuotationInput[]
    skipDuplicates?: boolean
  }

  export type QuotationRequestUpsertWithoutQuotationsInput = {
    update: XOR<QuotationRequestUpdateWithoutQuotationsInput, QuotationRequestUncheckedUpdateWithoutQuotationsInput>
    create: XOR<QuotationRequestCreateWithoutQuotationsInput, QuotationRequestUncheckedCreateWithoutQuotationsInput>
    where?: QuotationRequestWhereInput
  }

  export type QuotationRequestUpdateToOneWithWhereWithoutQuotationsInput = {
    where?: QuotationRequestWhereInput
    data: XOR<QuotationRequestUpdateWithoutQuotationsInput, QuotationRequestUncheckedUpdateWithoutQuotationsInput>
  }

  export type QuotationRequestUpdateWithoutQuotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQuotationRequestsNestedInput
    service?: ServiceUpdateOneRequiredWithoutQuotationRequestsNestedInput
  }

  export type QuotationRequestUncheckedUpdateWithoutQuotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutQuotationsInput = {
    update: XOR<UserUpdateWithoutQuotationsInput, UserUncheckedUpdateWithoutQuotationsInput>
    create: XOR<UserCreateWithoutQuotationsInput, UserUncheckedCreateWithoutQuotationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuotationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuotationsInput, UserUncheckedUpdateWithoutQuotationsInput>
  }

  export type UserUpdateWithoutQuotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutQuotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUncheckedUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ConsultationUpsertWithWhereUniqueWithoutQuotationInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutQuotationInput, ConsultationUncheckedUpdateWithoutQuotationInput>
    create: XOR<ConsultationCreateWithoutQuotationInput, ConsultationUncheckedCreateWithoutQuotationInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutQuotationInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutQuotationInput, ConsultationUncheckedUpdateWithoutQuotationInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutQuotationInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutQuotationInput>
  }

  export type QuotationCreateWithoutConsultationsInput = {
    id?: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
    request: QuotationRequestCreateNestedOneWithoutQuotationsInput
    provider: UserCreateNestedOneWithoutQuotationsInput
  }

  export type QuotationUncheckedCreateWithoutConsultationsInput = {
    id?: string
    requestId: string
    providerId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type QuotationCreateOrConnectWithoutConsultationsInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutConsultationsInput, QuotationUncheckedCreateWithoutConsultationsInput>
  }

  export type UserCreateWithoutConsultationsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestCreateNestedManyWithoutUserInput
    quotations?: QuotationCreateNestedManyWithoutProviderInput
    services?: ServiceCreateNestedManyWithoutProviderInput
  }

  export type UserUncheckedCreateWithoutConsultationsInput = {
    id?: string
    email: string
    password: string
    name: string
    phone?: string | null
    location?: string | null
    profileImage?: string | null
    bio?: string | null
    isServiceProvider?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationRequests?: QuotationRequestUncheckedCreateNestedManyWithoutUserInput
    quotations?: QuotationUncheckedCreateNestedManyWithoutProviderInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
  }

  export type UserCreateOrConnectWithoutConsultationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
  }

  export type QuotationUpsertWithoutConsultationsInput = {
    update: XOR<QuotationUpdateWithoutConsultationsInput, QuotationUncheckedUpdateWithoutConsultationsInput>
    create: XOR<QuotationCreateWithoutConsultationsInput, QuotationUncheckedCreateWithoutConsultationsInput>
    where?: QuotationWhereInput
  }

  export type QuotationUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: QuotationWhereInput
    data: XOR<QuotationUpdateWithoutConsultationsInput, QuotationUncheckedUpdateWithoutConsultationsInput>
  }

  export type QuotationUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: QuotationRequestUpdateOneRequiredWithoutQuotationsNestedInput
    provider?: UserUpdateOneRequiredWithoutQuotationsNestedInput
  }

  export type QuotationUncheckedUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutConsultationsInput = {
    update: XOR<UserUpdateWithoutConsultationsInput, UserUncheckedUpdateWithoutConsultationsInput>
    create: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultationsInput, UserUncheckedUpdateWithoutConsultationsInput>
  }

  export type UserUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUpdateManyWithoutUserNestedInput
    quotations?: QuotationUpdateManyWithoutProviderNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isServiceProvider?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUncheckedUpdateManyWithoutUserNestedInput
    quotations?: QuotationUncheckedUpdateManyWithoutProviderNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type QuotationRequestCreateManyUserInput = {
    id?: string
    serviceId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type QuotationCreateManyProviderInput = {
    id?: string
    requestId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ConsultationCreateManyUserInput = {
    id?: string
    quotationId: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
  }

  export type ServiceCreateManyProviderInput = {
    id?: string
    name: string
    category: string
    description: string
    basePrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuotationRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutQuotationRequestsNestedInput
    quotations?: QuotationUpdateManyWithoutRequestNestedInput
  }

  export type QuotationRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotations?: QuotationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type QuotationRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotationUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: QuotationRequestUpdateOneRequiredWithoutQuotationsNestedInput
    consultations?: ConsultationUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotation?: QuotationUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationRequests?: QuotationRequestUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationRequestCreateManyServiceInput = {
    id?: string
    userId: string
    description: string
    budget?: number | null
    location: string
    status?: $Enums.RequestStatus
    requestedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type QuotationRequestUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQuotationRequestsNestedInput
    quotations?: QuotationUpdateManyWithoutRequestNestedInput
  }

  export type QuotationRequestUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quotations?: QuotationUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type QuotationRequestUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuotationCreateManyRequestInput = {
    id?: string
    providerId: string
    price: number
    description: string
    estimatedDuration: string
    status?: $Enums.QuotationStatus
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type QuotationUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutQuotationsNestedInput
    consultations?: ConsultationUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: StringFieldUpdateOperationsInput | string
    status?: EnumQuotationStatusFieldUpdateOperationsInput | $Enums.QuotationStatus
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateManyQuotationInput = {
    id?: string
    userId: string
    scheduledDate: Date | string
    status?: $Enums.ConsultationStatus
    notes?: string | null
    meetingType?: string | null
    createdAt?: Date | string
  }

  export type ConsultationUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}