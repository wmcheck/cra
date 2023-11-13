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
  Timeline,
  StateLabel,
  Breadcrumbs,
} from '@primer/react';

import { PageHeader, Blankslate } from '@primer/react/drafts';
import {
  MarkGithubIcon,
  GitCommitIcon,
  BookIcon,
} from '@primer/octicons-react';

const Line = () => (
  <UnderlineNav aria-label="Main">
    <UnderlineNav.Link href="#home" selected>
      Home
    </UnderlineNav.Link>
    <UnderlineNav.Link href="#documentation">Documentation</UnderlineNav.Link>
    <UnderlineNav.Link href="#support">Support</UnderlineNav.Link>
  </UnderlineNav>
);

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Header>
          <Header.Item>
            <Header.Link
              href="#"
              sx={{
                fontSize: 2,
              }}
            >
              <Octicon
                icon={MarkGithubIcon}
                size={32}
                sx={{
                  mr: 2,
                }}
              />
              <span>GitHub</span>
            </Header.Link>
          </Header.Item>
          <Header.Item full>Menu</Header.Item>
          <Header.Item
            sx={{
              mr: 0,
            }}
          >
            <Avatar
              src="https://github.com/octocat.png"
              size={20}
              square
              alt="@octocat"
            />
          </Header.Item>
        </Header>
        <Box
          sx={{
            padding: 3,
          }}
        >
          <PageHeader>
            <PageHeader.TitleArea>
              <PageHeader.Title>Title</PageHeader.Title>
            </PageHeader.TitleArea>
          </PageHeader>

          <Breadcrumbs>
            <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">About</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#" selected>
              Team
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
export default App;
