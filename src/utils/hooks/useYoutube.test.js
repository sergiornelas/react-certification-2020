// import { render, screen } from "@testing-library/react";
// import { renderHook } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useYoutube from './useYoutube';

describe('useYoutube', () => {
  test('the initial state', () => {
    const { result } = renderHook(() => useYoutube('wizeline'));
    expect(result.current.history).toHaveLength(5);
  });
});
