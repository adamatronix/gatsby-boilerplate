import { SiteProvider } from "../src/context/site-context"
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from '../src/utils/global';
import '../src/components/Layout/fonts/fonts.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <SiteProvider>
    <GlobalStyle />
    {story()}
  </SiteProvider>
));