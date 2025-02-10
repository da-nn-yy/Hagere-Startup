import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
export default async function Home({searchParams} : {
    searchParams: Promise<{query: string}>} ) {

        const query = (await searchParams).query;
        const posts = [{
            _createdAt: new Date(),
            views: 100,
            author: {_id:1 , name: "Hagere"},
            _id:1,
            description: "A platform for connecting with entrepreneurs",
            image:"https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            catagory: "Tech",
            title: "Hagere Startup",
        }]

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
