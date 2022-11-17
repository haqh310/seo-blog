import Link from "next/link"
import { useState } from "react"
import { listSearch } from "../../actions/blog"

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    })

    const {search, results, searched, message} = values

    const searchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white">
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}
                {results.map((blog, i) =>(
                    <div key={i}>
                        <Link href={`/blogs/${blog.slug}`}
                            className="text-primary">{blog.title}</Link>
                    </div>
                ))}
            </div>
        )
    }

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-9">
                    <input type={'search'} className="form-control" placeholder="Search blogs" onChange={handleChange}/>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-block btn-outline-primary" type="submit">Search</button>
                </div>
            </div>
        </form>
    )

    const searchSubmit = (e) => {
        e.preventDefault();
        listSearch({search}).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setValues({...values, results: data, searched: true, message: `${data.length} blogs found.`})
            }
        })
    }

    const handleChange = (e) => {
        setValues({...values, search: e.target.value, searched: false, results: []})
    }

    return (
        <div className="container-fluid">
            <div className="pt-3 pb-5">{searchForm()}</div>
            {searched && <div  style={{ marginTop: '-120px', marginBottom: '-80px' }}>{searchedBlogs(results)}</div>}
        </div>
    )
}

export default Search