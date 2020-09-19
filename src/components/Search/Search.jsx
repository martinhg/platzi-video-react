import React from 'react';

import './Search.scss';

const Search = () => {
    return (
        <section className="search">
            <h2 className="search__title">What do you want to see today?</h2>
            <input type="text" className="search__input" placeholder="Search..."/>
        </section>
    );
};

export default Search;
