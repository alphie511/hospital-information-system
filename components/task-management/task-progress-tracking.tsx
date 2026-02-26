"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TaskProgressTracking() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">进度追踪</h2>
      <Card>
        <CardHeader>
          <CardTitle>任务进度追踪</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">任务进度追踪功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
