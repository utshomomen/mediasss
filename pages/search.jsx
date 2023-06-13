import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "../components/Loading";
import GridNews from "../components/GridNews";
import ContentList from "../components/ContentList";
import AdvertisementHorizontal from "../components/AdvertisementHorizontal";
import EmptyResults from "../components/EmptyResults";
import { domainApi } from "../requestMethods";

const Search = () => {
  const { query } = useRouter();
  const page = query.page || 1;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    query.q
      ? `${domainApi}/posts/?q=${query.q}&page=${page}&num_results_on_page=10`
      : `${domainApi}/posts?page=${page}&num_results_on_page=10`,
    fetcher
  );
  if (error) return <div className="error">Failed to load</div>;
  if (!data) return <Loading />;

  return (
    <>
      {data.posts.length > 0 ? (
        <>
          <GridNews
            posts={data.posts}
            articles={true}
            page={data.page}
          />
          <ContentList
            posts={data.posts}
            totalPages={data.total_pages}
            page={data.page}
          />
          <AdvertisementHorizontal
            photo="https://res.cloudinary.com/dntchqbzx/image/upload/v1685612012/profiles/ntajtvgvhtrtouk12yri.jpg"
            blurhash="LWF~:ss:?bbaWCj[aya{~pWBM{jZ"
            alt="alt"
          />
        </>
      ) : (
        <EmptyResults />
      )}
    </>
  );
};

export default Search;
