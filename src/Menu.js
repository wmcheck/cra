import {
  ThemeProvider,
  BaseStyles,
  Header,
  Button,
  Avatar,
  Octicon,
  Pagehead,
  Box,
  ProgressBar,
  TabNav,
  UnderlineNav,
} from '@primer/react';

() => (
  <UnderlineNav aria-label="Main">
    <UnderlineNav.Link href="#home" selected>
      Home
    </UnderlineNav.Link>
    <UnderlineNav.Link href="#documentation">Documentation</UnderlineNav.Link>
    <UnderlineNav.Link href="#support">Support</UnderlineNav.Link>
  </UnderlineNav>
);
