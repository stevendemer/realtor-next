import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ imageSrc, purpose, title, title2, description, buttonText, linkName }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageSrc} width={500} height={300} alt="Banner" /> 
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text color="gray.500" fontSize="3xl" fontWeight="bold">{title}<br/>{title2}</Text>
        <Text fontSize="lg" paddingBottom="3" color="gray.700">{description}</Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default function Home({ propertiesForSale, propertiesForRent }) {

  return (
    <Box>
      <Banner 
        imageSrc='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        purpose="RENT A HOME"
        title="Rental homes for"
        title2="Everyone"
        description="Explore Apartments, Villas, Flats"
        buttonText="Explore renting"
        linkName="/search?purpose=for-rent"
        />
        <Flex flexWrap="wrap">
          {/* fetch the properties and map over them  */}
          {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
      <Banner 
        imageSrc='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        purpose="BUY A HOME"
        title="Find, Buy and Own Your"
        title2="Dream Home"
        description="Explore Apartments, Villas, Flats"
        buttonText="Explore buying"
        linkName="/search?purpose=for-sale"
        />
        <Flex flexWrap="wrap">
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
    </Box>    
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}