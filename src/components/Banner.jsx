import React from 'react'
import dataBanner from '../data/CallToAction.json'
// export default function Banner() {
//   return (
//     <div>
//       <div className='bg-white p-5 text-center'>
//         <div style={{ fontSize: '80px', fontWeight: 'bold' }}>HEY DEVELOPERS ..!</div>
//         <div style={{ fontSize: '30px' }}>Conoce los nuevos curso RollingCode!</div>
//         <div style={{ marginTop: '20px' }}>
//           <button className='btn btn-primary'>Comprar Ahora!</button>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Banner() {
  return (
    <>
      {
        dataBanner.forEach(element => {
          setTimeout(() => {
            console.log(element)
          }, 5000)
        })
      }

      <div className='bg-white p-5 text-center'>
        <div style={{ fontSize: '80px', fontWeight: 'bold' }}>HEY DEVELOPERS ..!</div>
        <div style={{ fontSize: '30px' }}>Conoce los nuevos curso RollingCode!</div>
        <div style={{ marginTop: '20px' }}>
          <button className='btn btn-primary'>Comprar Ahora!</button>
        </div>
      </div>
    </>
  )
}
