import PropsType from 'prop-types'
import NewWebseries from './NewWebseries';
export default function Relatedseries({relativeseries}) {
    console.log(relativeseries);
  return (
    <>
     <NewWebseries WebseriesData={relativeseries}/>
    </>
  )
}

Relatedseries.propsTypes = {
    setrelated:PropsType.array,
}
