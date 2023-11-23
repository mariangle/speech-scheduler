"use client"

import { usePathname } from "next/navigation";
import { dashboardLinks } from "@/helpers/constants";
import { cn } from "@nextui-org/react";
import Link from "next/link";

import React from "react";
import { ListResponse } from "@/types";

import ListModal from "@/components/modals/list-modal";
import ListItem from "./list-header";

interface SidebarProps {
  lists: ListResponse[],
}

const Sidebar = ({
  lists
}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="bg-white h-full py-4 dark:bg-zinc-900 rounded-xl">
      <ul>
        {dashboardLinks.map((link) => (
          <li key={link.label} className="mb-1">
            <Link 
              href={link.href} 
              className={cn(
                pathname.includes(link.href) 
                ? 'text-black dark:text-white font-semibold bg-gradient-to-l from-secondary-500/20 border-r-3 border-secondary' 
                : 'font-medium text-default-500',
                "w-full block px-4 py-3"
              )}
              >
                {link.label}
              </Link>
          </li>
        ))}
        <div className="px-4">
            <div className="flex-between">
              <h4>Lists</h4>
              <ListModal list={null}/>
            </div>
            <div className="space-y-2 my-2 text-default-500">
                <ListItem />
                {lists && lists.map((list) => <ListItem list={list} key={list.id}/>)}
            </div>
        </div>
      </ul>
    </aside>
  )
}

export default Sidebar;