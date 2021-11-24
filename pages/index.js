import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { EmailIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container marginTop={10}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("blue.300", "whiteAlpha.300")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Italy!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Churros
          </Heading>
          <p> Digital Developer ( Frontend / Backend / Consulent) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            borderRadius="50px"
            src="/images/me.jpg"
            alt="me"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Alfredo is one of the worst name in the world, but this man its still
          carrying it with honor. He also really likes to read books, and try to
          understand why others still find netflix series interesting. There
          will be a time were all will be digitalized, He is wondering if when
          that time comes we will still have the need to talk. Comunque sono di
          Palermo, e in questo momento lavoro come Salesforce Developer alla
          Deloitte.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Anno di merda in cui nascere, e città.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Sono caduto dalla bici
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Diploma in liceo classico, Palermo
        </BioSection>
        <BioSection>
          <BioYear>2018 - on course</BioYear>
          Corso in ingegneria informatica, Politecnico di Milano
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>
        <Paragraph>
          Art,{" "}
          <Link href="https://www.youtube.com/watch?v=vhYsFIDAt2I&ab_channel=YohKamiyama">
            Music
          </Link>
          , Read , Eat
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Leave a comment
        </Heading>

        <Input
          placeholder="Insert your name"
          borderBottomWidth={0}
          borderBottomRadius={0}
        />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<EmailIcon color="gray.300" />}
          />

          <Input
            placeholder="Insert your comment"
            borderTopWidth={0}
            borderTopRadius={0}
          />
        </InputGroup>
      </Section>
    </Container>
  );
};

export default Page;
