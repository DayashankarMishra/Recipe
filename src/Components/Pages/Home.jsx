import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  let searchRef = useRef()
  let [search,setSearch] = useState('pizza')
  console.log(search)

  let [recipi,setRecipi] = useState([])
  console.log(recipi)
    async function getApi() {
        let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=be4d4105&app_key=35c0f7a811c9fe94e761d7aed541cb12`)
        let data = await res.json()
        // console.log(data.hits)
        setRecipi(data.hits)
    }

    useEffect(()=>{
      getApi()
    },[search])

    const handleSearch = (e)=>{
      e.preventDefault();
      // console.log(searchRef.current.value)
      let value = searchRef.current.value
      console.log(value)
      setSearch(value)

    }
    


  return (
   <div>
    <form className="d-flex w-25 m-auto my-3" role="search">
        <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>

     <div className='row my-5 gap-5 justify-content-evenly'>
      


      {
        recipi.map((product)=>{
          // console.log(product)
          return <div className="card" style={{width: '25rem'}}>
        <img id='recipiImg' src={product.recipe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.recipe.label}</h5>
          <Link to="/view" state={product} className="btn btn-primary">Veiw more</Link>
        </div>
      </div>
      
        })
      }
      
          </div>
   </div>
  )
}

export default Home
