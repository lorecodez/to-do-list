"use client"
import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react'



export default function SignOut() {

    useEffect(() => {
        signOut({
            callbackUrl: '/',
            redirect: true,
        });
    }, []);

  return null
}
