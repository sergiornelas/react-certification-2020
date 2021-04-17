import { renderHook } from '@testing-library/react-hooks';
import useYoutube from './useYoutube';

describe('useYoutube', () => {
  test('the default state when no initial state', () => {
    const { result } = renderHook(() => useYoutube('wizeline'));
    expect(result.current.videosMetaInfo).toStrictEqual(undefined);
    // ofc the hook testing it's not done yet.
  });
});
