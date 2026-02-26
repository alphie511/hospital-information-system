"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DutyAnalytics() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">值班统计</h2>
      <Card>
        <CardHeader>
          <CardTitle>统计分析</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">值班统计分析功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
