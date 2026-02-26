"use client"

import { Button } from "@/components/ui/button"
import type { User } from "@/lib/auth"

interface UserMenuProps {
  user: User | null
  onLogout: () => void
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  if (!user) return null

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">
        {user.name} ({user.department})
      </span>
      <Button variant="outline" size="sm" onClick={onLogout}>
        退出登录
      </Button>
    </div>
  )
}
