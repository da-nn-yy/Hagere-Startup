
import Form from 'next/form'
const SearchForm = () => {
    const query = 'Test'


    const reset = () => {
        console.log("by")
    }


  return (
    <Form action ='/' scroll={false} className='search-form'>
        <input
            name="query"
            defaultValue={query}
            className='search-input'
            placeholder='Search for startups'/>

        <div className='flex gap-2'>
            {query && (
                <button type='reset' onClick={reset}>
                </button>)}
        </div>
    </Form>
  )
}
export default SearchForm
