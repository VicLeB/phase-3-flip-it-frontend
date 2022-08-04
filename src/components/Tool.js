import React from "react";

function Tool({tool, handleSuppliesRender}){

    function handleDeleteClick(){
        fetch(`http://localhost:9292/tools/${tool.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(handleSuppliesRender)
    }

    return(
        <div className='col-sm-12 single-tool'>
            <div className='row'>
                <div className='col-sm-3 tool-image-container'>
                    <img className='tool-image' src={tool.image_url} alt='tool' />
                </div>
                <div className='col-sm-6'>
                    <p>{tool.name}</p>
                </div>
                <div className='col-sm-3'>
                    <button onClick={handleDeleteClick}className="btn btn-primary tools-delete">X</button>
                </div>
            </div>
        </div>
    )
}
export default Tool