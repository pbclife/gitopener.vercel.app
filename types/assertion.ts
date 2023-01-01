export type AssertHasProps = <T, Prop extends keyof T>(
  value: object,
  // eslint-disable-next-line no-unused-vars
  props: ReadonlyArray<Prop>
) => asserts value is Record<Prop, unknown>;

export type AssertIsString = (
  value: unknown,
  // eslint-disable-next-line no-unused-vars
  errorMsg: string
) => asserts value is string;
