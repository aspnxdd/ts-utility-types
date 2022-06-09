export type UnwrapPromise<T> = T extends Promise<infer Return> ? Return : T;

export type Replace<T, U extends string | number | symbol, V> = Omit<T, U> & {
  [K in U]: V;
};

export type StringToNumber<
  Len extends string,
  Arr extends unknown[] = []
> = `${Len}` extends `${Arr["length"]}`
  ? Arr["length"]
  : StringToNumber<Len, [...Arr, unknown]>;
