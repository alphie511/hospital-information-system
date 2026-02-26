"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MeetingManagementDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">会议管理</h2>
      <Card>
        <CardHeader>
          <CardTitle>会议管理面板</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">会议管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
