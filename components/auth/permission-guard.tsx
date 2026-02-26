"use client"

import type { User } from "@/lib/auth"

interface PermissionGuardProps {
  user: User | null
  permission: string
  children: React.ReactNode
}

export function PermissionGuard({ user, permission, children }: PermissionGuardProps) {
  if (!user?.permissions?.includes(permission)) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">您没有访问此页面的权限</p>
      </div>
    )
  }

  return <>{children}</>
}
