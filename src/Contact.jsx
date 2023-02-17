import React from 'react'

function Contact() {
  const display=()=>{
    alert('Your message has been sent to DevSol pvt.ltd');
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={display}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full name :</label>
                <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number :</label>
                <input type="number" required class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address :</label>
                <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" required id="exampleFormControlTextarea1" rows="5" placeholder='Enter your message here'></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact