import {
  createThemedStyles,
  merge,
  stringShortener,
} from './helpers';

import { themes } from '../constants/styleGuide';

describe('helpers: createThemedStyles', () => {
  const styles = {
    common: {
      wrapper: {
        flex: 1,
      },
    },

    [themes.light]: {
      wrapper: {
        backgroundColor: 'white',
      },
    },

    [themes.dark]: {
      common: {
        backgroundColor: 'black',
      },
    },
  };

  it('creates themed styles as expected', () => {
    expect(createThemedStyles(themes.light, styles)).toEqual({
      wrapper: {
        flex: 1,
      },
      theme: {
        wrapper: {
          backgroundColor: 'white',
        },
      },
    });
  });

  it('fills common key with empty object if not present', () => {
    const stylesWithoutCommonKey = Object.assign({}, styles);
    delete stylesWithoutCommonKey.common;

    expect(createThemedStyles(themes.light, stylesWithoutCommonKey)).toEqual({
      theme: {
        wrapper: {
          backgroundColor: 'white',
        },
      },
    });
  });

  it('fills requested theme key with empty object if not present', () => {
    const stylesWithoutThemeKey = Object.assign({}, styles);
    delete stylesWithoutThemeKey[themes.light];
    expect(createThemedStyles(themes.light, stylesWithoutThemeKey)).toEqual({
      wrapper: {
        flex: 1,
      },
      theme: {},
    });
  });

  it('uses light theme by default if noTheme argument is passed', () => {
    expect(createThemedStyles(themes.dark, styles, true)).toEqual({
      wrapper: {
        flex: 1,
      },
      theme: {
        wrapper: {
          backgroundColor: 'white',
        },
      },
    });
  });
});

describe('helpers: merge', () => {
  it('merges the given objects correctly', () => {
    const obj1 = {
      a: '1',
      b: '2',
    };

    const obj2 = {
      a: '0',
      c: '3',
    };

    const result = merge(obj1, obj2);
    const expectedResult = {
      a: '0',
      b: '2',
      c: '3',
    };

    expect(result.a).toBe(expectedResult.a);
    expect(result.b).toBe(expectedResult.b);
    expect(result.c).toBe(expectedResult.c);
    expect(result).toEqual(expectedResult);
  });
});

describe('helpers: stringShortener', () => {
  it('does not modify input if length is less than 15', () => {
    expect(stringShortener('test')).toBe('test');
  });

  it('generates correct output with default params', () => {
    expect(stringShortener('test_test_test_test')).toBe('test_test_...');
  });

  it('generates correct output with given params', () => {
    expect(stringShortener('test_test_test_test', 10, 5)).toBe('test_test_..._test');
  });
});