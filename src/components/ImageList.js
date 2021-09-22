import React from 'react'

function ImageList(props) {
    //console.log(images)
    const listOfImages = props.images.map((list) => {  // we can destructure  ({description, id, urls})
        return <img slt={list.description} key={list.id} src={list.urls.regular} alt="images"/> // add key property to root element check console
    });

    return (
        <div>
            {listOfImages}
        </div>
    )
}

export default ImageList
