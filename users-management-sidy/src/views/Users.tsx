import React, { useEffect, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserCard from '../component/UserCard';
import {usersApi} from '../api/users-api';
import {User} from '../types/User';
import DashboardLayout from '../layouts/Dashboard';
import Button from '@mui/material/Button';
import CreateUserDialog from '../components/CreateUserDialog';

const Users = (): JSX.Element => {

  const [users, setUsers] = useState<User[]>([]);
  const [openUserDialog, setOpenUserDialog] = useState<boolean>(false);

  const handleOpenUserDialog = () => {
    setOpenUserDialog(true);
  };
  const handleCloseUserDialog = (action?: string, user?: User) => {
    if (action === 'created' && user) {
      setUsers([...users, user]);
    }

    setOpenUserDialog(false);
  };


  const getUsers = useCallback(async () => {
    const usersResponse = await usersApi.getUsers();

    setUsers(usersResponse);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <DashboardLayout>
      <Box>
        <Grid container>
          <Grid item md={2} />
          <Grid
            item
            container
            md={8}
            spacing={2}
            display="flex"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              md={12}
              display="flex"
              justifyContent="center"
            >
              <Button
                variant="contained"
                onClick={handleOpenUserDialog}
              >
                Create User
              </Button>
            </Grid>
            {
              users.map(_user => (
                <Grid item key={_user.id}>
                  <UserCard
                    user={_user}
                  />
                </Grid>
              ))
            }
          </Grid>
          <Grid item md={2} />
        </Grid>
      </Box>

      <CreateUserDialog
        open={openUserDialog}
        onClose={handleCloseUserDialog}
      />
    </DashboardLayout>
  );
};

export default Users;
