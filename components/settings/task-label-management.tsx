"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TaskLabelManagement() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">标签管理</h2>
      <Card>
        <CardHeader>
          <CardTitle>任务标签</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">任务标签管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
