import { ERROR_CODES, ERROR_TYPES } from "src/domain/error/constant";
import { convertXxxApiError2ErrorModel } from "src/domain/error/converter";

describe("convertXxxApiError2ErrorModel", () => {
  test.each<{
    args: Parameters<typeof convertXxxApiError2ErrorModel>;
    expected: ReturnType<typeof convertXxxApiError2ErrorModel>;
  }>([
    {
      args: [{}],
      expected: {
        type: ERROR_TYPES.XXX_API,
        code: ERROR_CODES.UNKNWON,
        message: "",
        detail: {},
      },
    },
  ])("%o", ({ args, expected }) => {
    const actual = convertXxxApiError2ErrorModel(...args);
    expect(actual).toMatchObject(expected);
  });
});
