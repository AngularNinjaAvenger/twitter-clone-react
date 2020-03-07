import React from 'react';
import ResultNav from './ResultNav';
import SearchInput from './SearchButon';
import Item from './list-item/item';

function ResultHeader() {
    return (
        <header className="result-header">
            <ResultNav />
            <SearchInput />
                <div className="tabs">
                    {
                        ["All","Images","News","Videos","Maps"].map(
                        (item,idx)=> <div>
                                        <Item text={item} index={idx}/>
                                    </div>)
                    }
                </div>
        </header>
    )
}

export default ResultHeader;
