import TitleMenu from '@/components/elements/TitleMenu';
import NavigationPanel from '@/components/fragments/NavigationPanel';
import React from 'react';
import { payments } from '@/constants';
import { columns } from './columns';
import { DataTable } from './data-table';
export default function page() {
  const navPanel = [
    {
      name: 'Home',
      href: '/dashboard',
    },
    {
      name: 'Payments',
      href: '/payments',
    },
  ];

  return (
    <div>
      <TitleMenu title={'Payments'} />
      <NavigationPanel pages={navPanel} />
      <div>
        <DataTable columns={columns} data={payments} />
      </div>
    </div>
  );
}
