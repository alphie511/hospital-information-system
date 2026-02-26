"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SystemSettings() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">系统设置</h2>
      <Card>
        <CardHeader>
          <CardTitle>通用设置</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">系统配置管理</p>
        </CardContent>
      </Card>
    </div>
  )
}
