//npm i @primer/react-brand
import '@primer/react-brand/lib/css/main.css';
import '@primer/react-brand/fonts/fonts.css';
import { Hero, Pillar, MinimalFooter } from '@primer/react-brand';
import { CopilotIcon } from '@primer/octicons-react';
function App() {
  return (
    <>
      <Hero align="center">
        <Hero.Label>Label</Hero.Label>
        <Hero.Heading>Проект на ReactJS</Hero.Heading>
        <Hero.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit
          ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar risus
          elementum.
        </Hero.Description>
        <Hero.PrimaryAction href="#">Primary action</Hero.PrimaryAction>
        <Hero.SecondaryAction href="#">Secondary action</Hero.SecondaryAction>
      </Hero>
      <Pillar>
        <Pillar.Icon icon={<CopilotIcon />} color="purple" />
        <Pillar.Heading>Code search & code view</Pillar.Heading>
        <Pillar.Description>
          Enables you to rapidly search, navigate, and understand code, right
          from GitHub.com.
        </Pillar.Description>
      </Pillar>
      <MinimalFooter>
        <MinimalFooter.Link href="https://github.com/organizations/enterprise_plan">
          Try GitHub for free
        </MinimalFooter.Link>
        <MinimalFooter.Link href="https://github.com/enterprise">
          Enterprise
        </MinimalFooter.Link>
        <MinimalFooter.Link href="https://github.com/enterprise/contact">
          Email us
        </MinimalFooter.Link>
      </MinimalFooter>
    </>
  );
}

export default App;
