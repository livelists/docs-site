import * as React from 'react';

export interface Heading {
    level: 'h2' | 'h3'
    text: string
    id: string
}

function isHeading(child: React.ReactElement) {
    if (child.props?.as) {
        return new Set(['h2', 'h3']).has(child.props.as);
    }
    return false;
}

export function getHeadings(children: React.ReactNode): Heading[] {
    const headingsArr = React.Children.toArray(children)
        .filter((child) => React.isValidElement(child) && isHeading(child))
        .map((heading) => {
            if (React.isValidElement(heading)) {
                return {
                    level: heading.props?.mdxType,
                    id: heading.props?.id,
                    text: heading.props?.children,
                };
            }
        });
    return headingsArr.filter((h) => h !== undefined) as Heading[];
}