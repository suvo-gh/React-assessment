import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [image, setImage] = useState([])

  const getImage =()=>{
    axios.get("https://api.unsplash.com/search/photos?page=1&query=car&client_id=7moVsitIolQZXe1H0WoEBIbV8QWctu4iHNyEEjcJIrA")
    .then((response)=>{
      // console.log(response);
      setImage(response.data.results)
    })
  }
  return (
    <>
      <div className='container my-3'>
        <h2>Abhishek Tomar</h2>
        <h4>Email: Abhisheq1996@gmail.com</h4>
        <h4>Contact No: 7000225015</h4>
        <div className='row'>
          <div className='col-4'>
            <button className='btn btn-primary' onClick={getImage}>Get Image</button>

          </div>

        </div>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-4'>
            {
              image.map((value,index)=>{
                return(
                  <div key={index} className='col-4'>
                    <div className="card" style={{width:"18rem"}}>
                      <img src={value.urls.small} className="card-img-top" alt="image"/>
                
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>
    </>
  )
}

export default App