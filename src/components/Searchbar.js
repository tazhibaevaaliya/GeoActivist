import React from "react";


// const SearchPage = () => {
//   return (
//     <MDBCol md="6">
//       <MDBFormInline className="md-form">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </MDBFormInline>
//     </MDBCol>
//   );
// }

// export default SearchPage;

export default function Searchbar(){
    return(
        <form className = "form" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search social events"
            name="s" 
            // value={searchQuery}
            // onInput={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button> 
        </form>


    );
}

