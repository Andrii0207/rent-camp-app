import {
  ContactItem,
  ContactList,
  Container,
  Footer,
  FooterWrapper,
  Hero,
  MainSection,
  Name,
  NameWrapper,
  Position,
  SpanIcon,
} from './Home.styled';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { HomeGallery } from './HomeGallery';

export default function Home() {
  return (
    <Container>
      <MainSection>
        <Hero></Hero>
        <HomeGallery />
      </MainSection>

      <Footer>
        <FooterWrapper>
          <NameWrapper>
            <Position>developer</Position>
            <Name>Andrii Popov</Name>
          </NameWrapper>
          <ContactList>
            <ContactItem>
              <SpanIcon>
                <a
                  href="https://github.com/Andrii0207/rent-camp-app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <FaGithub size={32} color="#475467" />
                </a>
              </SpanIcon>
            </ContactItem>
            <ContactItem>
              <SpanIcon>
                <a
                  href="https://www.linkedin.com/in/andrii-popov-63b6a225b/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Linkedin"
                >
                  <FaLinkedin size={32} color="#475467" />
                </a>
              </SpanIcon>
            </ContactItem>
          </ContactList>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
