/*
 * @Name:     Search Results
 * @Descr:    It's a search results component.
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardComp from './shared/Card.component';
import actionTypes from '../sagas/actionTypes';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import LoadingComp from './shared/Loading.component';
import NoDataComp from './shared/NoData.component';
import SidebarComp from './shared/Sidebar.component';

const SearchResultComp = (props) => {
  useEffect(() => {
    props.fetchSearchResults('Mallorca,%20Spanien');
  }, []);
  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-12 bg-white ">
        <SidebarComp />
        <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10 px-5">
          <ul className="flex items-center text-sm mb-2 mt-1">
            <li><a href="#" className="text-blue-500">Spain</a></li>
            <FontAwesomeIcon icon={faAngleRight} className="mx-2 text-gray-500" />
            <li><a href="#" className="text-blue-500">Balearic Islands</a></li>
            <FontAwesomeIcon icon={faAngleRight} className="mx-2 text-gray-500" />
            <li>Majorca</li>
          </ul>
          <h1 className="text-2xl mb-2"><span className="font-semibold">Majorca, Spain: {!_.isEmpty(props.searchResults) && props.searchResults.offers.length}</span> accommodations found</h1>
          <div className="container my-3 mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {
                props.isFetchingSearchResults ? <LoadingComp /> :
                _.isEmpty(props.searchResults.offers) ? <NoDataComp /> :
                _.map(props.searchResults.offers, result => <CardComp cardDetails={result} key={result.id} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    isFetchingSearchResults: state.getIn('appData.v6/search/offers.get.isFetching'.split('.'), false),
    searchResults: state.getIn('appData.v6/search/offers.get.response'.split('.'), {})
  }),
  dispatch => ({
    fetchSearchResults: searchTerm => {
      dispatch({
        type: actionTypes['Effects/GET_REQUEST'],
        payload: {
          endpoint: 'v6/search/offers',
          params: {
            searchTerm
          }
        }
      })
    }
  })
)(SearchResultComp)