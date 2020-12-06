import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardComp from './shared/Card.component';
import actionTypes from '../sagas/actionTypes';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SearchResultComp = (props) => {
  useEffect(() => {
    props.fetchSearchResults('Mallorca,%20Spanien');
  }, [])
  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-cols-12 bg-white ">
        <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start">
          <a href="#" className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</a>
          <a href="#" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Information</a>
          <a href="#" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Something</a>
        </div>
        <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10 px-5">
          <ul className="flex items-center text-sm mb-2 mt-1">
            <li><a href="#" className="text-blue-500">Spain</a></li>
            <FontAwesomeIcon icon={faAngleRight} className="mx-2 text-gray-500" />
            <li><a href="#" className="text-blue-500">Balearic Islands</a></li>
            <FontAwesomeIcon icon={faAngleRight} className="mx-2 text-gray-500" />
            <li>Majorca</li>
          </ul>
          <h1 className="text-2xl mb-2"><span className="font-semibold">Majorca, Spain: 5,092</span> accommodations found</h1>
          <div className="container my-3 mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {
                props.isFetchingSearchResults ? 'Loading...' :
                _.isEmpty(props.searchResults.offers) ? 'No results found' :
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
    isFetchingSearchResults: state.getIn('v6/search/offers.get.isFetching'.split('.'), false),
    searchResults: state.getIn('v6/search/offers.get.response'.split('.'), {})
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