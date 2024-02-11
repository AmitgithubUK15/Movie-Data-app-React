
import { useParams } from 'react-router-dom'

export default function Test() {
   const {data} = useParams();
   
  return (
    <div>{data}</div>
  )
}
