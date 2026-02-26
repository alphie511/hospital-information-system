"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { mockEngineers, mockEngineerTasks } from "@/lib/engineers"

export function EngineerList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">工程师管理</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockEngineers.map((engineer) => {
          const tasks = mockEngineerTasks.filter((t) => t.engineerId === engineer.id)
          return (
            <Card key={engineer.id}>
              <CardHeader>
                <CardTitle className="text-lg">{engineer.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{engineer.department}</p>
                <div className="flex flex-wrap gap-1">
                  {engineer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm">
                  任务: {engineer.currentTasks}/{engineer.maxTasks}
                </div>
                <Progress value={(engineer.currentTasks / engineer.maxTasks) * 100} />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
