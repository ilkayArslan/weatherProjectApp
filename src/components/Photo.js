import { Image } from '@chakra-ui/react'

function Photo() {
    return (
        <div className='row mt-3'>
            <div className="photos p-3 col">
                <Image

                    boxSize='250px'
                    src="https://picsum.photos/id/336/200/300"
                    alt='Dan Abramov'

                />

            </div>
            <div className="photos p-3 col">
                <Image
                    borderRadius='full'
                    boxSize='250px'
                    src="https://picsum.photos/id/222/200/300"
                    alt='Dan Abramov'
                />

            </div>
            <div className="photos p-3 col">
                <Image

                    boxSize='250px'
                    src="https://picsum.photos/id/111/200/300"
                    alt='Dan Abramov'
                />

            </div>
        </div>
    )
}

export default Photo