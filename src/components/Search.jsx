import {useState, useRef} from "react"; 
import magnify from "../assets/icon-search.svg"; 
import "./Search.css"; 

const Search = (props) => {
    const [isError, setIsError] = useState(false)
    const username = useRef(); 


    const onSubmitHandler = async (e) => {
        e.preventDefault(); 
        
        try {
            const response = await fetch(`https://api.github.com/users/${username.current.value}`); 
            if (!response.ok) {
                throw new Error(`HTTP Error! status ${response.status}`); 
            }
            const data = await response.json(); 
            console.log(data); 
            let {avatar_url, name, html_url, login, created_at, bio, public_repos, followers, following, location, blog, twitter_username, company } = data; 
            let date = new Date(created_at); 
            let dateString = `Joined ${date.getDate()} ${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`; 
            created_at = dateString; 
            login = `@${login}`; 
            const relevantData = {avatar_url, name, html_url, login, created_at, bio, public_repos, followers, following, location, blog, twitter_username, company}
            props.userSearchHandler(relevantData); 
            setIsError(false) 
        } catch (error) {
            console.log(error.message); 
            setIsError(true); 
        }
    }

    return (
        <form className="search" onSubmit={onSubmitHandler} aria-describedby="error-message">
            <div className="search_icon"><img className="search_icon--img" src={magnify}/></div>
            <div className="search_container">
                <input ref={username} className="search_input" placeholder="Search Github username..." aria-invalid={isError}
        aria-describedby={isError ? "error-message" : null}/> 
                {isError && <p id="error-message" className="search_error">No Results</p>}
            </div>
            <button className="search_submit" type="submit">Search</button>
        </form>
    )
}

export default Search; 