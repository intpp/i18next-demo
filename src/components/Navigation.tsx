import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export type NavigationItem = {label: string; url: string};

const Navigation: React.FC<{items: NavigationItem[]}> = ({items}) => {
    const { t } = useTranslation('menu');

    return (
        <ul className="flex flex-wrap text-sm font-medium text-center">
            {items.map(({label, url}) => (
                <li key={`${label}-${url}`} className="mr-2">
                    <Link href={url} className="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100">
                        {t(label)}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
