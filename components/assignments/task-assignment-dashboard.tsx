"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TaskAssignmentDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">任务分配</h2>
      <Card>
        <CardHeader>
          <CardTitle>任务分配面板</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">任务分配管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
