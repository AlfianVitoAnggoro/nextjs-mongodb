import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CreateUserForm from './CreateUserForm';

interface DialogCreateUserProps {}

const DialogCreateUser: FC<DialogCreateUserProps> = ({}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
            <DialogDescription>
              Create a new user. Click submit if you have done for fill the
              form.
            </DialogDescription>
          </DialogHeader>
          <CreateUserForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogCreateUser;
