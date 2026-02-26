"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { mockEngineerTasks } from "@/lib/engineers"

export function TaskProgressDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">任务进度</h2>
      <div className="grid gap-4">
        {mockEngineerTasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle className="text-lg">{task.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>进度: {task.progress}%</span>
                <span>状态: {task.status}</span>
              </div>
              <Progress value={task.progress} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
