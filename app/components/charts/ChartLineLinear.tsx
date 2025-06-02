"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer, ChartLegend, ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear line chart"

const chartData = [
  { month: "January", male: 186, female: 100 },
  { month: "February", male: 305, female: 150 },
  { month: "March", male: 237, female: 120 },
  { month: "April", male: 73, female: 80 },
  { month: "May", male: 209, female: 110 },
  { month: "June", male: 214, female: 130 },
]

const chartConfig = {
  male: {
    label: "Male",
    color: "var(--chart-1)",
  },
  female: {
    label: "Female",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function ChartLineLinear() {
  return (
    <Card className="flex flex-col bg-[#171717] border-[#232323]">
      <CardHeader className="flex-row items-start">
        <CardTitle className={`text-white`}>Gender Students</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[30vh] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="male"
              type="linear"
              stroke="#386aff"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="female"
              type="linear"
              stroke="#ee57ff"
              strokeWidth={2}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent className={`text-white`} />}></ChartLegend>
          </LineChart>

        </ChartContainer>
      </CardContent>
    </Card>
  )
}
