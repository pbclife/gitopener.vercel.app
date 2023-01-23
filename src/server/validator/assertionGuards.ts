import { ERR } from '&/errors';
import { AssertHasProps, AssertIsString } from '@/types/server/Assertion';

export const assertHasProps: AssertHasProps = (value, props) => {
  if (typeof value !== 'object')
    throw new ERR.Bad_Request(`Invalid credentials`);
  if (value === undefined || value === null) {
    throw new ERR.Bad_Request(`Body can not be empty`);
  }
  for (const prop of props) {
    if (prop in value === false) {
      throw new ERR.Bad_Request(
        `Contributor's data does not have ${String(prop)} property`
      );
    }
  }
};

export const assertIsString: AssertIsString = (
  value: unknown,
  errorMsg: string
): asserts value is string => {
  if (typeof value !== 'string') {
    throw new ERR.Bad_Request(errorMsg);
  }
};
