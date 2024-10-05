import {
  Hero,
  MyProjects,
  Layout,
  InfiniteScroll,
  NewHero,
} from "../../components";

const Home = () => {
  return (
    <Layout>
      {/* <Hero /> */}
      <NewHero />
      <InfiniteScroll title="Core Technologies" />
      <MyProjects />
    </Layout>
  );
};

export { Home };
