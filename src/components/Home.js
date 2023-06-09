import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignInButton} from './SignInButton'
import { UserInfo } from './UserInfo';
import { SignOutButton } from './SignOutButton';

export const Home = () => {
  const [user] = useAuthState(auth); // ログイン中かどうかを判断

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};