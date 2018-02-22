import React from 'react';
import ReactDOM from 'react-dom'
import SearchItem from './SearchItem.jsx';


const SearchList = (props) => {
return (
    <ul>
      {props.bars.map((bar, i) =>
         <SearchItem key={i} bar={bar} />
      )}
    </ul>
)
};

export default SearchList;