import { useState } from 'react';
import Link from 'next/link';
import {
    Menu,
    MenuButton,
    Flex,
    MenuItem,
    Box,
    Spacer,
    IconButton,
    MenuList,
    Button,
    ColorModeScript,
    useColorMode
} from '@chakra-ui/react';

import {
    FcMenu,
    FcHome,
    FcAbout
} from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';
import { HiOutlineSun, HiSun } from 'react-icons/hi';


const NavBar = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex width="100"  p="2" borderBottom="1px" borderColor="gray.200">
            <Box fontSize="3xl" color="blue.400" fontWeight="bold">
                <Link href="/" paddingLeft="2">Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                <Button
                    as={IconButton}
                    icon={<HiOutlineSun />}
                    onClick={toggleColorMode}
                    variant="outlined"
                    color="yellow"
                    bgGradient="linear(to-r, #C33764, #1D2671)"
                    mx="4"
                />
                    <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.600" />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )


}


export default NavBar;
