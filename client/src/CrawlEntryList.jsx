import CrawlEntry from './CrawlEntry.jsx';

// this.props.newbar might be wrong?
const CrawlEntryList = (props) => {
return (
    <ul>
      <CrawlEntry bar={props.newBar}/>
    </ul>
)
};

export default CrawlEntryList;