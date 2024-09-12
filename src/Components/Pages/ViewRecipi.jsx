import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ViewRecipi = () => {

  let location = useLocation()
  console.log(location)

  return (
    <div id='main' className=' my-5 text-center'>

<div className="card" style={{width: '25rem'}}>
  <img id='recipiImg' src={location.state.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{location.state.recipe.label}</h5>
    <h5 className="card-title">Quantity:-{Math.round(location.state.recipe.totalWeight)}g</h5>
  </div>
</div>

<div id='card'>
  <h1>{location.state.recipe.cuisineType}</h1>
  {
    location.state.recipe.ingredientLines.map((od)=>{
      // console.log(od)
      return <ol class=" list-group-numbered text-left">
      <li class="list-group-item">{od}</li>
    </ol>
    })
  //  <button type="button" className="btn btn-primary">Primary</button>


}
<Link className="btn btn-primary" to={location.state.recipe.url} target='_blank' role="button">More view</Link>

</div>

<div id='card1'>
{<ol className=" list-group-numbered text-left">
<h1>Total Nutrients</h1>
  <li className="list-group-item">{location.state.recipe.totalNutrients.CA.label} <span>{Math.round(location.state.recipe.totalNutrients.CA.quantity)}</span>{location.state.recipe.totalNutrients.CA.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.CHOCDF.label} <span>{Math.round(location.state.recipe.totalNutrients.CHOCDF.quantity)}</span>{location.state.recipe.totalNutrients.CHOCDF.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.CHOLE.label} <span>{Math.round(location.state.recipe.totalNutrients.CHOLE.quantity)}</span>{location.state.recipe.totalNutrients.CHOLE.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.ENERC_KCAL.label} <span>{Math.round(location.state.recipe.totalNutrients.ENERC_KCAL.quantity)}</span>{location.state.recipe.totalNutrients.ENERC_KCAL.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.FAMS.label} <span>{Math.round(location.state.recipe.totalNutrients.FAMS.quantity)}</span>{location.state.recipe.totalNutrients.FAMS.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.FASAT.label} <span>{Math.round(location.state.recipe.totalNutrients.FASAT.quantity)}</span>{location.state.recipe.totalNutrients.FASAT.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.FAT.label} <span>{Math.round(location.state.recipe.totalNutrients.FAT.quantity)}</span>{location.state.recipe.totalNutrients.FAT.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.FE.label} <span>{Math.round(location.state.recipe.totalNutrients.FE.quantity)}</span>{location.state.recipe.totalNutrients.FE.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.K.label} <span>{Math.round(location.state.recipe.totalNutrients.K.quantity)}</span>{location.state.recipe.totalNutrients.K.unit}</li>
  <li className="list-group-item">{location.state.recipe.totalNutrients.MG.label} <span>{Math.round(location.state.recipe.totalNutrients.MG.quantity)}</span>{location.state.recipe.totalNutrients.MG.unit}</li>
</ol>}
</div>

<div id='card2'>
  


  <h1>Digest</h1>

  <table className="table">
  <thead>
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">Digest</th>
      <th scope="col">Quantity</th>
      <th scope="col">Last</th>
      
    </tr>
 { location.state.recipe.digest.map((items,index)=>{
    console.log(items)
    return <tr>
    <th scope="row">{index}</th>
    <td>{items.label}</td>
    <td>{items.total}</td>
    <td>{items.unit}</td>
    
  </tr>
   
})
}
      </thead>
<tbody>
</tbody>
</table>

      
    </div>
</div>
  )
}

export default ViewRecipi





  
