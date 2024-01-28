import "./Output.css"
import avatar from "../assets/avatar.png"; 
import location from "../assets/icon-location.svg"; 
import website from "../assets/icon-website.svg"; 
import twitter from "../assets/icon-twitter.svg"; 
import company from "../assets/icon-company.svg"; 


const Output = ({userData}) => {
    let userDataDefault = {
        avatar_url: avatar, 
        name: "The Octocat", 
        login: "@octocat", 
        created_at: `Joined 25 Jan 2011`, 
        bio: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.`, 
        public_repos: 8, 
        followers: 3938, 
        following: 9, 
        location: "San Francisco", 
        blog: "https://github.blog", 
        twitter_username: "Not Available", 
        company: "@github", 
        html_url: "#"
    }; 

    if (userData) {
        userDataDefault = {...userData}; 
    }

    return (
        <section className="output">
            <div className="output_avatar-container output_avatar-container--large"><img src={userDataDefault.avatar_url}/></div>
            <div className="output_heading">
                <div className="output_avatar-container output_avatar-container--small"><img src={userDataDefault.avatar_url}/></div>
                <div className="output_heading-info">
                    <p className="output_name">{userDataDefault.name ? userDataDefault.name : "Not Available"}</p>
                    <a className="output_link"href={userDataDefault.html_url} target="_blank" rel="noopener noreferrer">{userDataDefault.login ? userDataDefault.login : "Not Available"}</a>
                    <p className="output_text output_date">{userDataDefault.created_at}</p>
                </div>
            </div>
            <p className="output_description output_text">{userDataDefault.bio ? userDataDefault.bio : "Not Available"}</p>
            <div className="output_stats">
                <div className="output_stat">
                    <p className="output_stat-heading">Repos</p>
                    <p className="output_stat-number">{userDataDefault.public_repos}</p>
                </div>
                <div className="output_stat">
                    <p className="output_stat-heading">Followers</p>
                    <p className="output_stat-number">{userDataDefault.followers}</p>
                </div>
                <div className="output_stat">
                    <p className="output_stat-heading">Following</p>
                    <p className="output_stat-number">{userDataDefault.following}</p>
                </div>
            </div>
            <div className="output_contact-info">
                <div className="output_contact">
                    <span className="output_contact-icon" role="img"><img src={location} alt="Location icon" /></span>
                    <p className="output_text">{userDataDefault.location ? userDataDefault.location : "Not Available" }</p>
                </div>
                <div className="output_contact">
                    <span className="output_contact-icon" role="img"><img src={website} alt="Blog icon" /></span>
                    <p className="output_text">{userDataDefault.blog ? userDataDefault.blog : "Not Available"}</p>
                </div>
                <div className="output_contact">
                    <span className="output_contact-icon" role="img"><img src={twitter} alt="Twitter icon" /></span>
                    <p className="output_text">{userDataDefault.twitter_username ? userDataDefault.twitter_username : "Not Available"}</p>
                </div>
                <div className="output_contact">
                    <span className="output_contact-icon" role="img"><img src={company} alt="Company Icon" /></span>
                    <p className="output_text">{userDataDefault.company ? userDataDefault.company : "Not Available"}</p>
                </div>
            </div>
        </section>
    )
}

export default Output; 