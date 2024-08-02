import TitleMenu from '@/components/elements/TitleMenu';
import NavigationPanel from '@/components/fragments/NavigationPanel';
import React from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
// import { users } from '@/constants';
import { getUsers } from '@/controllers/user';

export default async function UsersPage() {
  const navPanel = [
    {
      name: 'Home',
      href: '/dashboard',
    },
    {
      name: 'Users',
      href: '/users',
    },
  ];

  const users = await getUsers();

  return (
    <div>
      <TitleMenu title={'Users'} />
      <NavigationPanel pages={navPanel} />
      <div>
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}
