"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TaskManagementDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">任务管理</h2>
      <Card>
        <CardHeader>
          <CardTitle>任务管理面板</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">任务管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
