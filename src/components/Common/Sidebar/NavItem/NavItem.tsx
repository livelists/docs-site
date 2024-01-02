import React from 'react';

import styles from './NavItem.module.scss';
// eslint-disable-next-line import/named
import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import Link from 'next/link';
// eslint-disable-next-line import/named
import { useRouter } from 'next/router';
// eslint-disable-next-line import/named
import { IconType } from 'react-icons';

import { SubItem } from './SubItem';

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: string;
    href: string;
    subItems?: {
        href: string,
        name: string,
    }[]
}
const NavItem = ({ icon, children, href, subItems = [], ...rest }: NavItemProps) => {
    const router = useRouter();

    if (router.pathname === href) {
        return (
            <>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    bg="cyan.400"
                    color="white"
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
                {subItems?.map((si) => (
                    <SubItem
                        key={si.href}
                        href={si.href}
                        name={si.name}
                    />
                ))}
            </>
        );
    }

    return (
        <>
            <Link href={href} style={{ textDecoration: 'none' }}>
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
            {subItems?.map((si) => (
                <SubItem
                    key={si.href}
                    href={si.href}
                    name={si.name}
                />
            ))}
        </>
    );
};

export default NavItem;