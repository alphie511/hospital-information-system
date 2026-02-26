"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DutyScheduleManagement() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">值班排班</h2>
      <Card>
        <CardHeader>
          <CardTitle>排班管理</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">值班排班管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
