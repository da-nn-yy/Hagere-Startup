
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
import { client } from "@/sanity/lib/client";
export default async function Home({searchParams} : {
    searchParams: Promise<{query: string}>} ) {

        const posts = await client.fetch(STARTUPS_QUERY);

        const query = (await searchParams).query;

        console.log(JSON.stringify(posts,null,2));

  return (
    <>
      <section className="heading_container">
        <p className="tag">Welcome to</p>
        <h1 className="heading">Pitch your startup,connect with enterepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and GetNoticed in Virtual Competitions.
        </p>

        <SearchForm query ={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
            {posts ?. length > 0 ? (
                posts.map((post:StartupCardType) => (
                    <StartupCard key={post?._id} post ={post}/>
            ))):(
                <p className="no-results">No startups found</p>
            )}
        </ul>
      </section>
    </>
  );
}
