import SearchForm from "../components/SearchForm";
export default async function Home({searchParams} : {
    searchParams: Promise<{query: string}>} ) {

        const query = (await searchParams).query;
    
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
    </>
  );
}
