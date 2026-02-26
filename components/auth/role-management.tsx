"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { User } from "@/lib/auth"

interface RoleManagementProps {
  users: User[]
  onUpdateUserRole: (userId: string, roleId: string) => void
}

export function RoleManagement({ users, onUpdateUserRole }: RoleManagementProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">角色权限管理</h2>
      <div className="grid gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle className="text-lg">{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                部门: {user.department} | 角色: {user.roleId}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
