import React, { ReactElement, ReactText } from 'react';

// eslint-disable-next-line import/order
import { Layout as LayoutAnt } from 'antd';

const { Content } = LayoutAnt;

// eslint-disable-next-line import/order
import {
    Box,
    // eslint-disable-next-line import/named
    BoxProps,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    // eslint-disable-next-line import/named
    FlexProps,
    Icon,
    IconButton,
    Link,
    Text,
    useColorModeValue, useDisclosure
} from '@chakra-ui/react';
// eslint-disable-next-line import/named
import { IconType } from 'react-icons';
import { FiHome, FiMenu } from 'react-icons/fi';
import { GoGitBranch, GoGitCommit, GoGitPullRequest } from 'react-icons/go';

interface IProps {
    children?: ReactElement | ReactElement[];
}
interface SidebarProps extends BoxProps {
    onClose: () => void;
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    href: string;
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Livelists-js-core', icon: GoGitPullRequest, href: 'livelists-js-core' },
    { name: 'Livelists-react-sdk', icon: GoGitBranch, href: 'livelists-react-sdk' },
    { name: 'Livelists-node-js', icon: GoGitCommit, href: 'livelists-node-js' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    LiveLists
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem
                    href={link.href}
                    key={link.name}
                    icon={link.icon}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                Logo
            </Text>
        </Flex>
    );
};

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
}

const Layout:React.FC<IProps> = ({
    children,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <LayoutAnt style={{ minHeight: '100vh' }}>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <SidebarContent
                    onClose={() => onClose}
                    display={{ base: 'none', md: 'block' }}
                />
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="full">
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
                <Box ml={{ base: 0, md: 60 }} p="4">
                    <Content>
                        {children}
                    </Content>
                </Box>
            </Box>
        </LayoutAnt>
    );
};

export default Layout;
