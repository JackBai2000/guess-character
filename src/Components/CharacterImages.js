const CharacterImages = ( {images} ) => {
    <h3>Images: </h3>
    {images.map (image =>   (
        <div key = {image.url}>
        </div>
    )
    )}

}

export default CharacterImages;