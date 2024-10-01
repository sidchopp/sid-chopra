import { Hero, MyProjects, Layout, InfiniteScroll } from "../../components";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <InfiniteScroll title="Core Technologies" />
      <MyProjects />
    </Layout>
  );
};

export { Home };
