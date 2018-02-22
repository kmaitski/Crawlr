import SearchItem from './SearchItem.jsx';

// this.props.newbar might be wrong?
const SearchList = (props) => {
return (
    <ul>
      {props.videos.map((bar, i) =>
         <SearchItem key={i} bar={bar} />
      )}
    </ul>
)
};

export default SearchList;