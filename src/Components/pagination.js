import React from 'react';
import {Pagination} from "@material-ui/lab";

const PaginationComp = ({cardsPerPage, totalCards, paginate, page}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <Pagination page={page} onChange={(event, page) => paginate(page)} count={pageNumbers.length}/>
        </div>
    );
};

export default PaginationComp;
