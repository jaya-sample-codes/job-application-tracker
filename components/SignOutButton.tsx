'use client';
import { useRouter } from 'next/navigation';

import { signOut } from '@/lib/auth/auth-client';
import { DropdownMenuItem } from './ui/dropdown-menu';

export default function SignOutButton() {
  const router = useRouter();

  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
          router.replace('/sign-in');
        }
      }}>
      Log Out
    </DropdownMenuItem>
  );
}
