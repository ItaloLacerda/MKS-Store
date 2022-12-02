import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { setupStore } from '../../shared/redux/store';
import type {RootState } from '../../shared/redux/store';
import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState> | any
  store?: any
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore,
    ...renderOptions
  }: ExtendedRenderOptions = {},
  badRoute = ['/'],
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <MemoryRouter initialEntries={badRoute}><Provider store={store}>{children}</Provider></MemoryRouter>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}