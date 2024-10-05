import {
  MyProjects,
  Layout,
  InfiniteScroll,
  NewHero,
  Technologies,
} from "../../components";

const Home = () => {
  return (
    <Layout>
      <NewHero />
      {/* <InfiniteScroll title="Core Technologies" /> */}
      <Technologies />
      <MyProjects />
    </Layout>
  );
};

export { Home };
