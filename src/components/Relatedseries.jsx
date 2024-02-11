import PropsType from 'prop-types'
import NewWebseries from './NewWebseries';
import { useEffect } from 'react';

export default function Relatedseries({relativeseries}) {
    // console.log(relativeseries);
    window.scrollTo(0,0)

  return (
    <>
     <NewWebseries WebseriesData={relativeseries}/>
    </>
  )
}

Relatedseries.propsTypes = {
    setrelated:PropsType.array,
}
