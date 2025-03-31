import React from 'react'

export default function Exp() {
  return (
    <div className='my-3 w-100 h-100'>
    {/* category title */}
    <div className='d-flex justify-content-between border bg-light px-2 py-1'>
      {/* <h3 className='text-danger'>Trải nghiệm người dùng</h3> */}
      {/* <div className='border border-1 rounded-3 my-1 d-flex align-items-center'>
        <a href="" className='text-decoration-none mx-2 text-danger'>Xem thêm</a>
        <i className='fa fa-angle-right text-danger'></i>
      </div> */}
    </div>
    {/* category product list */}
    <div className='row m-1 px-1 d-flex justify-content-between'style={{height:"300px"}}>
        <div className="col-6 ">
            <iframe src="https://www.youtube.com/embed/6oc22PS0N2s?si=iYhVikx6RDwsUSmQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameborder="0" className='w-100 h-100' >
            </iframe>
        </div>
        <div className="col-6">
            <div className='row'>
                <iframe className="col-6" src="https://www.youtube.com/embed/XZ-KsdZOddw?si=VR7hc0LlkpshMM0o" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameborder="0" >
                </iframe>
                <iframe className="col-6" src="https://www.youtube.com/embed/-nX_fHrr17o?si=5UhJ7AvWAXZWXq6G" allowFullScreen frameborder="0">
                </iframe>
                <iframe className="col-6" src="https://www.youtube.com/embed/ooCCrP4xxVc?si=8mzLmoRxbXFAPMlv" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameborder="0" >
                </iframe>
                <iframe className="col-6" src="https://www.youtube.com/embed/_LvlsujEL_Y?si=4bzo5_sh2aAi3-9Y" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameborder="0">
                </iframe>
            </div>
        </div>
    </div>
  </div>
  )
}
