import React from 'react';

const AlbumList = (props) => {

    const showAlbumList = ({ albumList }) => {
        if (albumList) {
            return albumList.map((item, index) => {
                return (
                    <img key={index} src={`/images/albums/${item.cover}.jpg`} />
                )
            })
        }
    }

    return (
        <div className="albums_list">
            {showAlbumList(props)}
        </div>
    )
}

export default AlbumList;