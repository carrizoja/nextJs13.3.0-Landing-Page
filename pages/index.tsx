import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import InfoCard from "@/components/infoCard";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Learn to Code
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height":"500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
        <Grid xs={12} md={6} alignItems="center" justify="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Next Js</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Platform</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Join for Free</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* Info Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} md={4}>
          <InfoCard
            label="Course"
            title="Learn Next.Js With José"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3,500"
          />
        </Grid>
        <Grid xs={12} md={4}>
          <InfoCard
            label="Course"
            title="Learn Apollo Server With José"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            studentCount="1,000"
          />
        </Grid>
        <Grid xs={12} md={4}>
          <InfoCard
            label="Course"
            title="Learn Javascript With José"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            studentCount="1,500"
          />
        </Grid>

      </Grid.Container>

    </Container>)
};

export default Home;
