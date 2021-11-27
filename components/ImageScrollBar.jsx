import { useContext } from 'react';
import Image from 'next/image';
import {
    Box,
    Icon,
    Flex
} from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
}

const ImageScrollBar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden'}}>
        {data.map((item) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" padding="1">
                <Image
                alt="property"
                placeholder="blur"
                blurDataURL={item.url}
                src={item.url}
                width={1000}
                sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
                height={500} />
            </Box>
        ))}
    </ScrollMenu>

);


export default ImageScrollBar;



