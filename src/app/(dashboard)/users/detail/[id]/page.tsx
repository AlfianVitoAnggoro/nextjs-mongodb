import TitleMenu from '@/components/elements/TitleMenu';
import NavigationPanel from '@/components/fragments/NavigationPanel';
import { getUser } from '@/controllers/user';
import React from 'react';

export default async function DetailUserPage({ params }: any) {
  const id: string = params.id;

  const navPanel = [
    {
      name: 'Home',
      href: '/dashboard',
    },
    {
      name: 'Users',
      href: '/users',
    },
    {
      name: 'Detail',
      href: `/users/detail/${id}`,
    },
  ];

  const user = await getUser(id);
  return (
    <div>
      <TitleMenu title={'Detail User'} />
      <NavigationPanel pages={navPanel} />
      <div className="space-y-2 py-5">
        <div className="flex">
          <div className="text-2xl font-semibold">Name :</div>
          <div className="ml-2 text-2xl font-bold">{user.name}</div>
        </div>
        <div className="flex">
          <div className="text-2xl font-semibold">Email :</div>
          <div className="ml-2 text-2xl font-bold">{user.email}</div>
        </div>
        <div className="flex">
          <div className="text-2xl font-semibold">Role :</div>
          <div className="ml-2 text-2xl font-bold">{user.role}</div>
        </div>
      </div>
    </div>
  );
}
