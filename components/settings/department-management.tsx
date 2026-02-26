"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DepartmentManagement() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">部门管理</h2>
      <Card>
        <CardHeader>
          <CardTitle>部门列表</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">部门管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
