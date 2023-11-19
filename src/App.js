import React, { useState, useEffect } from 'react';
import ListElements from './List';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import sampleFile from './sample.md';

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
  Link,
  SubNav,
  NavList,
  ButtonGroup,
  PageLayout,
} from '@primer/react';

import { PageHeader, Blankslate } from '@primer/react/drafts';
import {
  MarkGithubIcon,
  GitCommitIcon,
  BookIcon,
  CodeIcon,
  FeedMergedIcon,
  FlameIcon,
} from '@primer/octicons-react';

function App() {
  //const markdown = '# Hi, *Pluto*!';
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    fetch(sampleFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <ThemeProvider>
      <BaseStyles>
        <Header
          sx={{
            bg: '#f6f8fa',
            color: 'black',
            // '&:hover, &:focus': {
            //   color: 'green',
            // },
            '&:hover': {
              color: 'black',
            },
          }}
        >
          <Header.Item>
            <Header.Link
              href="#"
              sx={{
                fontSize: 2,
                color: 'black',
                // '&:hover, &:focus': {
                //   color: 'green',
                // },
                '&:hover': {
                  color: 'black',
                },
              }}
            >
              <Octicon
                icon={FeedMergedIcon}
                size={28}
                sx={{
                  mr: 2,
                }}
              />
              <span>wmCheck</span>
            </Header.Link>
          </Header.Item>
          <Header.Item full className="link">
            Menu
          </Header.Item>

          <Header.Item>
            <Header.Link href="#" className="link">
              About
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link href="#" className="link">
              Releases
            </Header.Link>
          </Header.Item>
          <Header.Item>
            <Header.Link href="#" className="link">
              Team
            </Header.Link>
          </Header.Item>

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
        <div
          style={{
            background: '#f6f8fa',
            boxShadow:
              'inset 0 calc(var(max(1px, 0.0625rem), 1px)*-1) var(max(1px, 0.0625rem), var(#d0d7de))',
          }}
        >
          <UnderlineNav aria-label="Main">
            <UnderlineNav.Item
              key="1"
              href="/"
              aria-current="page"
              icon={CodeIcon}
            >
              Home
            </UnderlineNav.Item>

            <UnderlineNav.Item
              key="2"
              href="#documentation"
              icon={MarkGithubIcon}
              counter="3"
              date
            >
              Documentation
            </UnderlineNav.Item>
            <UnderlineNav.Item key="3" href="#support5" icon={FlameIcon}>
              Contact name
            </UnderlineNav.Item>
            <UnderlineNav.Item key="4" href="#documentation4">
              asdf
            </UnderlineNav.Item>
            <UnderlineNav.Item key="5" href="#support3" counter="399">
              Contact
            </UnderlineNav.Item>
          </UnderlineNav>
        </div>

        <PageLayout containerWidth="full">
          <PageLayout.Content sx={{ bg: 'white' }}>
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
            {/* <Markdown>{markdown}</Markdown> */}
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} />
            <ListElements />
          </PageLayout.Content>
          <PageLayout.Footer divider="line">Footer</PageLayout.Footer>
        </PageLayout>
      </BaseStyles>
    </ThemeProvider>
  );
}
export default App;
