import { MyProjects, Layout, InfiniteScroll, NewHero } from "../../components";

const Home = () => {
  return (
    <Layout>
      <NewHero />
      <InfiniteScroll title="Core Technologies" />
      <MyProjects />
    </Layout>
  );
};

export { Home };
