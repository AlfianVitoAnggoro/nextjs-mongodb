'use client';
import React, { FC, useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';

interface NavigationPanelProps {
  pages: { name: string; href: string }[];
}

const NavigationPanel: FC<NavigationPanelProps> = ({ pages }) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {pages.map((item: any, i: number) => (
            <div key={i}>
              {pages.length !== i + 1 ? (
                <div className="flex items-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>
                      {item.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </div>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default NavigationPanel;
