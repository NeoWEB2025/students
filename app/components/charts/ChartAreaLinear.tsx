"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import * as React from "react";

const chartData = [
    { month: "January", count: 186 },
    { month: "February", count: 305 },
    { month: "March", count: 237 },
    { month: "April", count: 73 },
    { month: "May", count: 209 },
    { month: "June", count: 214 },
]

const chartConfig = {
    count: {
        label: "Desktop",
        color: "#232323",
    },
} satisfies ChartConfig

export default function ChartAreaLinear() {
    return (
        <Card className="bg-gradient-to-b from-[#171717] via-[#171717] to-[#222222] border-[#2b2b2b]">
            <CardHeader>
                <CardTitle className={`text-white`}>Students</CardTitle>
                <CardDescription className={`text-[#A1A1A1]`}>
                    Showing total students for 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer 
                    config={chartConfig}
                    className="aspect-auto h-[20vh] w-full"
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="#A1A1A1"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#A1A1A1"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stopColor={`#ff0000`}></CartesianGrid>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent className={`text-white`} indicator="dot" hideLabel />}
                        />
                        <Area
                            dataKey="count"
                            type="linear"
                            fill="url(#fillDesktop)"
                            stroke="#A1A1A1"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
