"use client";
import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
// import { Sheet } from 'lucide-react';
// import { SheetTrigger, SheetContent } from './ui/sheet';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Sidebar from './Sidebar';

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, []);

  if(!isMounted){
    return null;
  }
  
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={'ghost'} size={'icon'} className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar