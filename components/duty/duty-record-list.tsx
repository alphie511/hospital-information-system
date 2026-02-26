"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DutyRecordList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">值班记录</h2>
      <Card>
        <CardHeader>
          <CardTitle>值班记录列表</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">值班记录管理功能</p>
        </CardContent>
      </Card>
    </div>
  )
}
