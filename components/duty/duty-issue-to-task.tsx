"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DutyIssueToTask() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">值班问题转任务</h2>
      <Card>
        <CardHeader>
          <CardTitle>问题转任务</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">将值班中发现的问题转为开发任务</p>
        </CardContent>
      </Card>
    </div>
  )
}
