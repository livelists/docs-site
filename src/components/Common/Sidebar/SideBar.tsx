import React from 'react';

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
    IconButton,
    Text,
    Heading,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
// eslint-disable-next-line import/named
import { IconType } from 'react-icons';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FiHome, FiMenu } from 'react-icons/fi';
import { GrReactjs, GrNode } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io5';

import { NS_COMMON } from 'const/app/I18_NAMESPACES';
import {
    DEPLOY_PAGE,
    HOME_PAGE,
    JS_CORE_PAGE,
    NODE_JS_PAGE, REACT_SDK_COMPONENTS_PAGE, REACT_SDK_HOOKS_PAGE,
    REACT_SDK_PAGE,
} from 'const/http/CLIENT_URLS';
import { useTranslation } from 'hooks/useTranslation';

import { MaintainerBlock } from './MaintainerBlock';
import { NavItem } from './NavItem';
import styles from './Sidebar.module.scss';

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const MainNavItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: HOME_PAGE },
    { name: 'Deploy', icon: AiOutlineCloudServer, href: DEPLOY_PAGE },
];

const ServerSDKs: Array<LinkItemProps> = [
    { name: 'Livelists-node-js', icon: GrNode, href: NODE_JS_PAGE }
];

const ClientSDKs: Array<LinkItemProps> = [
    { name: 'Livelists-js-core', icon: IoLogoJavascript, href: JS_CORE_PAGE },
    {
        name: 'Livelists-react-sdk',
        icon: GrReactjs,
        href: REACT_SDK_PAGE,
        subItems: [{
            name: 'Components',
            href: REACT_SDK_COMPONENTS_PAGE,
        },{
            name: 'Hooks',
            href: REACT_SDK_HOOKS_PAGE,
        }]
    },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const { t } = useTranslation(NS_COMMON);

    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <div className={styles.content}>
                <div className={styles.menuItems}>
                    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                            LiveLists
                        </Text>
                        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                    </Flex>
                    {MainNavItems.map((link) => (
                        <NavItem
                            href={link.href}
                            key={link.name}
                            icon={link.icon}
                        >
                            {link.name}
                        </NavItem>
                    ))}
                    <Heading as='h5' size='sm' className={styles.navGroup}>
                        {t('menuItems.clientSDK')}
                    </Heading>
                    {ClientSDKs.map((link) => (
                        <NavItem
                            href={link.href}
                            key={link.name}
                            icon={link.icon}
                            subItems={link.subItems}
                        >
                            {link.name}
                        </NavItem>
                    ))}
                    <Heading as='h5' size='sm' className={styles.navGroup}>
                        {t('menuItems.backendSDK')}
                    </Heading>
                    {ServerSDKs.map((link) => (
                        <NavItem
                            href={link.href}
                            key={link.name}
                            icon={link.icon}
                        >
                            {link.name}
                        </NavItem>
                    ))}
                </div>
                <MaintainerBlock />
            </div>
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
                LiveLists
            </Text>
        </Flex>
    );
};

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
    subItems?: {
        name: string,
        href: string,
    }[]
}

export const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
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
        </>
    );
};

export default SideBar;