import React from 'react';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
const FlightPagination = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const [page, setPage] = useState(Number(searchParam.get("page")) || 1)
    useEffect(() => {
        let params = {
      page:page
        }
        // setSearchParam(params)
    }, [page])
  return (
    <div>
        <PAGE style={{backgroundColor:"white",borderRadius:"10px",width:"60%"}}>
        <button data-testid="page-prev" onClick={() => setPage(page - 1)} disabled={page == 1} >Previous</button>
        <button>{page}</button>
        <button data-testid="page-next" onClick={() => setPage(page + 1)} disabled={page >= 10}>Next</button>
      </PAGE>
    </div>
  );
}
const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 800px;
    height: 35px;
    margin-bottom: 10px;
    border:1px solid gray;
  }
`;
export default FlightPagination;
