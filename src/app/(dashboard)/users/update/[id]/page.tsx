import TitleMenu from '@/components/elements/TitleMenu';
import UpdateUserForm from '@/components/forms/userForm/UpdateUserForm';
import NavigationPanel from '@/components/fragments/NavigationPanel';
import { getUser } from '@/controllers/user';
import React from 'react';

export default async function UpdateUserPage({ params }: any) {
  const id: string = params.id;
  const user = await getUser(id);

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
      name: 'Update',
      href: `/users/update/${id}`,
    },
  ];

  return (
    <div>
      <TitleMenu title={'Update User'} />
      <NavigationPanel pages={navPanel} />
      <UpdateUserForm user={user} id={id} />
    </div>
  );
}
