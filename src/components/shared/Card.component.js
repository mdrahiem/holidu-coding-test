import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import _ from 'lodash';

const CardComp = (props) => {
  const { cardDetails = {} } = props;
  const { photos = [], details = {}, provider = {}, location = {}, rating = {}, price = {}, usps = [] } = cardDetails;
  const getValue = (arr, id) => {
    if (_.find(arr, a => a.id === id)) {
      return _.find(arr, a => a.id === id)['value']
    }
    return '';
  }
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg relative min-h-full flex flex-col">
        <header>
          <a href="#">
            <img alt="" className="block h-auto w-full" src={_.isEmpty(photos) ? '' : photos[0].t} />
          </a>
        </header>
        <div className="flex justify-between leading-tight p-2 md:p-4 flex-grow">
          <div className="text-gray-700 text-sm">
            <h1>
              <a className="no-underline text-black font-semibold block text-lg text-gray-900 card-title pr-4" href="#" title={details.name || ''}>
                {details.name || ''}
              </a>
            </h1>
            <button className="text-sm mt-2 text-primary font-semibold">
              <FontAwesomeIcon icon={faMapMarkerAlt} /><span className="truncate pl-1">{location.name.split(',')[1]}</span>
            </button>
            <p className="text-sm my-4">
              {!isNaN(getValue(usps, 'USP_PEOPLE')) && <>{getValue(usps, 'USP_PEOPLE')} pers.,{' '}</>}
              {!isNaN(getValue(usps, 'USP_BED_ROOM')) && <>{getValue(usps, 'USP_BED_ROOM')} bedrooms,{' '}</>}
              {!isNaN(getValue(usps, 'USP_AREA')) && <>{getValue(usps, 'USP_AREA')} ft²,{' '}</>}
              {!isNaN(getValue(usps, 'USP_BEACH')) && <>{getValue(usps, 'USP_BEACH')} yd to the beach{' '}</>}
            </p>
            <span className="text-primary font-semibold">{(rating.value * 5 / 100).toFixed(1)}/5.0</span>
            <Rating
              initialRating={(rating.value * 5 / 100).toFixed(1)}
              readonly
              emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-300" />}
              fullSymbol={<FontAwesomeIcon icon={faStar} className="text-primary" />}
              className="mx-2"
            />
            ({rating.count} reviews)
          </div>
          <div className="text-sm text-right">
              <div style={{ whiteSpace: 'nowrap' }}>10 nights</div>
              <div className="font-semibold text-2xl whitespace-pre my-1">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'EUR', maximumSignificantDigits: 3 }).format(price.total)}</div>
              <div style={{ whiteSpace: 'nowrap' }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'EUR', maximumSignificantDigits: 3 }).format(price.daily)} / night</div>
          </div>
        </div>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4 border-t">
          <div>
            <a className="items-center no-underline text-black hover:text-gray-700" href="#">
              <p className="ml-2 text-sm">More details <FontAwesomeIcon icon={faAngleRight} /></p>
            </a>
            <p className="ml-2 mt-2 text-xs"><span className="font-semibold">Best price:</span> {provider.shortName}</p>
          </div>
          <button className="bg-primary text-white p-4 uppercase rounded font-semibold">View offer</button>
        </footer>

        {/* <span className="absolute inset-0 right-0 bg-primary text-white z-10">Mountain View</span> */}
      </article>

    </div>
  );
}

export default CardComp;