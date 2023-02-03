import React from 'react';
import Navigation from "@/components/Navigation";
import Link from "next/link";

const menuItems = [
    {label: 'menu:home', url: '/'},
    {label: 'menu:server-side', url: '/server-side'},
    {label: 'menu:dynamic-page', url: '/dynamic/test'},
];

const BaseLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="m-5 bg-white">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-between text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 px-6">
                    <Navigation items={menuItems} />
                    <div className="flex flex-row items-center space-x-2">
                        <span className="text-black font-bold">Language: </span>
                        <Link href="/" locale="en">English</Link>
                        <span>|</span>
                        <Link href="/" locale="uk">Ukrainian</Link>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg md:p-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;
